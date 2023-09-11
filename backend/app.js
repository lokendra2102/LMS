const express = require("express");
const app = express();
const { initializeApp } = require('firebase/app')
const { getAnalytics } = require('firebase/analytics')
const { getDatabase, ref:aRef, set, update, get, query, orderByChild, equalTo } = require("firebase/database")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const path = require("path")
require("dotenv").config();

const { createToken, sendDbname, maxAge } = require("./middleware/auth")
const { userConstructor } = require("./schema/DTO");
const { buyProduct, removeCartItem, signout, login, signup } = require("./REST/restapi");

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

// app.use(express.static(path.join(__dirname, '../libman/build')));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.post("/api/signup", async(req,res) => signup(req,res))

app.post("/api/login", sendDbname(db), (req,res) => login(req,res))

app.post("/api/signout", sendDbname(db), (req,res) => signout(req,res))

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

app.post("/api/remove-cart", sendDbname(db), (req,res) => removeCartItem(req,res))

app.listen(PORT,(req,res) => {
    console.log(`Port is running in ${PORT} successfully`);
})