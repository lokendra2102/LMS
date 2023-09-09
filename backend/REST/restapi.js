//Code Migration 
const { initializeApp } = require('firebase/app')
const { getAnalytics } = require('firebase/analytics')
const { getDatabase, ref:aRef, set, update, get, query, orderByChild, equalTo } = require("firebase/database");
const { getDbEnumForProductEntry } = require('../middleware/auth');

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
    var ref = aRef(db,'/users/' + req.user.id)
    var body = req.body
    Object.keys(body).map(ele => {
        body[ele] = getDbEnumForProductEntry(body[ele])
    })
    let courses = req.user.courses ? req.user.courses : {}
    courses = {...courses, ...body}
    update(ref, {
        "courses" : courses
    }).then((data) => {
        res.status(200).json({
            "status" : "success",
            "message" : "Course bought successfully"
        })
    }).catch(e => {
        res.status(400).json({
            "status" : "failure",
            "message" : "Error Occured. Kindly try after some time."
        })
    })
}

module.exports = {
    buyProduct
}