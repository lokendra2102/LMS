//Code Migration 
const crypto = require("crypto")
const bcrypt = require("bcryptjs")
const { initializeApp } = require('firebase/app')
const { getAnalytics } = require('firebase/analytics')
const { getDatabase, ref:aRef, set, update, get, query, orderByChild, equalTo, remove, limitToFirst } = require("firebase/database");
const { getDbEnumForProductEntry, createToken, maxAge } = require('../middleware/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDjd89yRQxOdvd8MWedBiF8emG4vQBOpxU",
    authDomain: "safe-1efcc.firebaseapp.com",
    projectId: "safe-1efcc",
    storageBucket: "safe-1efcc.appspot.com",
    messagingSenderId: "129313784951",
    appId: "1:129313784951:web:42dcb1050c020a1106b272",
    measurementId: "G-FVKXXF8J6T"
};
const firebaseapp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseapp)

const buyProduct = (req,res) => {
    var ref = aRef(db,'/users/' + req.user.id + '/courses')
    var body = req.body
    Object.keys(body).map(ele => {
        ele = ele.replace(".","_")
        body[ele] = getDbEnumForProductEntry(body[ele])
    })
    update(ref, {...body}).then((data) => {
        req.user.courses = {...req.user.courses, ...body}
        res.status(200).json({
            "status" : "success",
            "message" : "Course bought successfully",
            "user" : req.user
        })
    }).catch(e => {
        res.status(400).json({
            "status" : "failure",
            "message" : "Error Occured. Kindly try after some time."
        })
    })
}

const removeCartItem = (req,res) => {
    var body = req.body
    var ref = aRef(db,'/users/' + req.user.id + '/courses/' + body.key)
    let courses = Object.keys(req.user.courses)
    if(courses && courses.includes(body.key) && req.user.courses[body.key] === 1){
        remove(ref).then((data) => {
            delete req.user.courses[data.key]
            res.status(200).json({
                "status" : "success",
                "message" : "Course bought successfully",
                "user" : req.user
            })
        }).catch(e => {
            res.status(400).json({
                "status" : "failure",
                "message" : "Error Occured. Kindly try after some time."
            })
        })
    }else{
        res.status(404).json({
            "status" : 404,
            "message" : "Item not found in cart"
        })
    }
}

const signout = (req,res) => {
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
}

const login = (req,res) => {
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
                var userObj;
                var token;
                if(req.user){
                    userObj = snapshot.val()[req.user["id"]]
                    token = req.user["id"]
                }else{
                    token = Object.keys(snapshot.val())[0];
                    userObj = snapshot.val()[token]
                }
                var fr_pass = userObj.password;
                const passwordmatch = await bcrypt.compare(password, fr_pass);
                delete userObj["password"]
                if(passwordmatch){
                    token = createToken(token)
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
                console.log(error);
                res.status(400).json({
                    "status" : "failure",
                    "error" : "Something went wrong. Kindly try again after some time"
                })
            }
        }
    })
}

const signup = (req,res) => {
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
}

module.exports = {
    buyProduct, removeCartItem, 
    signout, login, signup
}