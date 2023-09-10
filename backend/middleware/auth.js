const jwt = require("jsonwebtoken")
const { ref:aRef, get } = require("firebase/database")

const sendDbname = (db) => {
    return (req, res, next) => {
        const token = req.cookies.jwt ? req.cookies.jwt : (req.headers.token ? req.headers.token : null);
        if (token) {
            jwt.verify(token, 'Pega Solutions', async (err, decodedToken) => {
                if (err) {
                    res.redirect("/test");
                    next();
                } else {
                    const webRef = aRef(db, '/users/'+decodedToken.id);
                    get(webRef)
                    .then((data)=>{
                        let user = data.val();
                        if(user){
                            user["id"] = decodedToken.id;
                            req.user = user
                            next();
                        }else{
                            res.status(404).json({
                                "status" : "failure",
                                "error" : "You haven't signedup yet. kindly signup to proceed"
                            })
                        }
                    }).catch((e) => {
                        console.log(e);
                        res.status(400).json({
                            "status" : "failure",
                            "error" : "Something went wrong. Kindly try again after some time"
                        })
                    })
                }
            });
        } else {
            if(req.url === "/api/login"){
                next()
            }else{
                res.status(400).json({
                    "status" : "failure",
                    "error" : "Invalid auth"
                })
            }
        }
    };
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) =>
  jwt.sign({ id }, "Pega Solutions", {
    expiresIn: maxAge,
});

const getDbEnumForProductEntry = (param) => {
    switch(param){
        case "buy":
            return 2
        case "cart":
            return 1
        case "fav":
            return 0
        default:
            return 9
    }
}

module.exports = {
    createToken, sendDbname, maxAge, getDbEnumForProductEntry
}