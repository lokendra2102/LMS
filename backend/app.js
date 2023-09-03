const express = require("express");
const app = express();
const { initializeApp } = require('firebase/app')
const { getAnalytics } = require('firebase/analytics')
const { getDatabase, ref:aRef, set, update, get, query, orderByChild, equalTo } = require("firebase/database")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const cors = require('cors')
require("dotenv").config();

const { createToken, sendDbname, maxAge } = require("./middleware/auth")

const firebaseConfig = {
    apiKey: "AIzaSyDjd89yRQxOdvd8MWedBiF8emG4vQBOpxU",
    authDomain: "safe-1efcc.firebaseapp.com",
    projectId: "safe-1efcc",
    storageBucket: "safe-1efcc.appspot.com",
    messagingSenderId: "129313784951",
    appId: "1:129313784951:web:42dcb1050c020a1106b272",
    measurementId: "G-FVKXXF8J6T"
};

const corsOptions = {
    origin: '*://*.*',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
};
  
app.use(cors(corsOptions));
app.use(express.json())

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);
const PORT = 4000
const db = getDatabase(firebaseapp)

app.post("/signup", async(req,res) => {
    var { username, email, password, cpassword } = req.body;
    if( password === cpassword ){
        password = await bcrypt.hash(password, 10);
        const uuid = crypto.randomUUID();
        set(aRef(db, 'users/' + uuid), {
            username: username,
            email: email,
            password : password
        }).then((rep) => {
            const token = createToken(uuid)
            res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({
                "status" : "success",
                "token" : token
            })
        }).catch((e) => {
            console.log(e);
            res.status(400).json({
                "status" : "failed",
                "message" : "Kindly Refresh WebPage"
            })
        }) 
    }else{
        res.status(202).json({
            "status" : "failed",
            "message" : "Password mismatch. please try again."
        })
    }
    // const webRef = aRef(db, '/users');
    // get(webRef)
    // .then((data)=>{
    //     console.log("ok");
    //     const user = userConstructor("lokendra.s", "slokendra2102@gmail.com", true, [])
    //     if(data.val() === null){
    //         set(aRef(db, 'users/' + crypto.randomUUID()), {
    //             username: user.username,
    //             email: user.email,
    //             ispremium : user.ispremium,
    //             projects : user.courselist
    //         }).then((rep) => {
    //             res.status(201).json({
    //                 "success" : "true"
    //             })
    //         }).catch((e) => {
    //             res.status(400).json({
    //                 "success" : "false",
    //                 "message" : "Kindly Refresh WebPage"
    //             })
    //         })           
    //     }else{
    //         update(webRef,{
    //             username: user.username,
    //             email: user.email,
    //             ispremium : user.ispremium,
    //             projects : user.courselist
    //           })
    //           .then(() => {
    //             res.status(201).json({
    //               "success" : "true"
    //             })
    //           }).catch((e) => {
    //             res.status(400).json({
    //               "success" : "false",
    //               "message" : "Kindly Refresh WebPage"
    //             })
    //           })
    //     }
    // }).catch((e) => {
    //   res.status(400).json({
    //     "success" : "false",
    //     "message" : "Kindly Refresh WebPage"
    //   })
    // })
})

app.post("/login", sendDbname(db), (req,res) => {
    const { email, password } = req.body;
    const starCountRef = query(query(aRef(db, 'users'), orderByChild("email")), equalTo(email));
    get(starCountRef)
    .then(async(snapshot) => {
        if(!snapshot.exists()|| snapshot.size > 1){
            res.status(402).json({
                "status" : "failure",
                "message" : `Account doesn't exists with email ${email}. Kindly create account to proceed further.`
            })
        }else{
            var fr_pass = snapshot.val()[req.user["id"]]["password"];
            const passwordmatch = await bcrypt.compare(password, fr_pass)
            if(passwordmatch){
                const uuid = crypto.randomUUID();
                const token = createToken(uuid)
                res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
                res.status(201).json({
                    "status" : "success",
                    "token" : token
                })
            }else{
                res.status(401).json({
                    "status" : "failure",
                    "token" : "Password mismatch. Kindly check your credentials."
                })
            }
        }
    })
})

app.post("/signout", sendDbname(db), (req,res) => {
    res.clearCookie("jwt");
    res.status(200).json({
        "status" : "success",
        "message" : "User signed out successfully"
    })
})

app.put("/update-memebership", sendDbname(db), (req,res) => {
    const user = req.user;
    const { ispremium } = req.body;
    const starCountRef = query(query(aRef(db, 'users'), orderByChild("email")), equalTo(user.email));
    get(starCountRef)
    .then(async(snapshot) => {
        if(!snapshot.exists()|| snapshot.size > 1){
            res.status(402).json({
                "status" : "failure",
                "message" : `Account doesn't exists with email ${email}. Kindly create account to proceed further.`
            })
        }else{
            var ref = aRef(db,'/users/' + req.user.id)
            update(ref, {"ispremium" : ispremium}).then((data) => {
                res.status(200).json({
                    "status" : "success",
                    "message" : "Premium membership added"
                })
            }).catch(e => {
                res.status(400).json({
                    "status" : "failure",
                    "message" : "Error Occured. Kindly try after some time."
                })
            })
        }
    })
})

// app.post("/add-course", sendDbname(db), (req,res) => {

// })

// app.get("/get-course", sendDbname(db), (req,res) => {

// })

app.listen(PORT,(req,res) => {
    console.log(`Port is running in ${PORT} successfully`);
})