const express = require("express");
const app = express();
const { initializeApp } = require('firebase/app')
const { getAnalytics } = require('firebase/analytics')
const { getDatabase, ref:aRef, set, update, get, query, orderByChild, equalTo } = require("firebase/database")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const cors = require('cors')
const cookieParser = require("cookie-parser")
require("dotenv").config();

const { createToken, sendDbname, maxAge } = require("./middleware/auth")
const { userConstructor } = require("./schema/DTO");
const { buyProduct } = require("./REST/restapi");

const firebaseConfig = {
    apiKey: "AIzaSyDjd89yRQxOdvd8MWedBiF8emG4vQBOpxU",
    authDomain: "safe-1efcc.firebaseapp.com",
    projectId: "safe-1efcc",
    storageBucket: "safe-1efcc.appspot.com",
    messagingSenderId: "129313784951",
    appId: "1:129313784951:web:42dcb1050c020a1106b272",
    measurementId: "G-FVKXXF8J6T"
};

// const corsOptions = {
//     origin: '*',
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
// };
  
app.use(cors());
app.use(cookieParser())
app.use(express.json())

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);
const PORT = 4000
const db = getDatabase(firebaseapp)

app.post("/api/signup", async(req,res) => {
    var { username, email, university, password, cpassword, ispremium } = req.body;
    const userRef = query(query(aRef(db, 'users'), orderByChild("email")), equalTo(email));
    get(userRef)
    .then(async(snapshot) => {
        if(snapshot.exists()){
            res.status(402).json({
                "status" : "failure",
                "message" : `Account already exists with email ${email}. Kindly login to proceed further.`
            })
        }else{
            try {
                if( password === cpassword ){
                    password = await bcrypt.hash(password, 10);
                    const uuid = crypto.randomUUID();
                    set(aRef(db, 'users/' + uuid), {
                        username: username,
                        email: email,
                        password : password,
                        university : university ? university : null,
                        ispremium : ispremium
                    }).then((rep) => {
                        const token = createToken(uuid)
                        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
                        res.status(200).json({
                            "status" : "success",
                            "token" : token,
                            "user" : new userConstructor(username, email, null, university, ispremium, null)
                        })
                    }).catch((e) => {
                        console.log(e);
                        res.status(400).json({
                            "status" : "failed",
                            "message" : "Unknown error occured. Kindly try again after sometime",
                            "stackTrace" : e
                        })
                    }) 
                }else{
                    res.status(401).json({
                        "status" : "failed",
                        "message" : "Password mismatch. please try again."
                    })
                }
            } catch (error) {
                res.status(400).json({
                    "status" : "failure",
                    "error" : "Something went wrong. Kindly try again after some time",
                    "stacktrace" : error
                })
            }
        }
    })
})

app.post("/api/login", sendDbname(db), (req,res) => {
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
            try {
                var userObj = snapshot.val()[req.user["id"]]
                var fr_pass = userObj.password;
                const passwordmatch = await bcrypt.compare(password, fr_pass);
                delete userObj["password"]
                if(passwordmatch){
                    const token = createToken(req.user["id"])
                    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
                    res.status(201).json({
                        "status" : "success",
                        "token" : token,
                        "user" : userObj
                    })
                }else{
                    res.status(401).json({
                        "status" : "failure",
                        "token" : "Password mismatch. Kindly check your credentials."
                    })
                }
            } catch (error) {
                res.status(400).json({
                    "status" : "failure",
                    "error" : "Something went wrong. Kindly try again after some time"
                })
            }
        }
    })
})

app.post("/api/signout", sendDbname(db), (req,res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({
            "status" : "success",
            "message" : "User signed out successfully"
        })
    } catch (error) {
        res.status(400).json({
            "status" : "failure",
            "message" : "Unexpected error occured.Kindly try again after some time"
        })
    }
})

app.put("/api/update-memebership", sendDbname(db), (req,res) => {
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

app.post("/api/add-course", sendDbname(db), (req,res) => buyProduct(req,res))

// app.get("/get-course", sendDbname(db), (req,res) => {

// })

app.listen(PORT,(req,res) => {
    console.log(`Port is running in ${PORT} successfully`);
})