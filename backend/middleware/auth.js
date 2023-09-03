const jwt = require("jsonwebtoken")
const { ref:aRef, get } = require("firebase/database")

const sendDbname = (db) => {
    return (req, res, next) => {
        const token = req.headers.token;
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
                        res.status(400).json({
                            "status" : "failure",
                            "error" : "Something went wrong. Kindly try again after some time"
                        })
                    })
                }
            });
        } else {
            res.status(400).json({
                "status" : "failure",
                "error" : "Invalid auth"
            })
        }
    };
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) =>
  jwt.sign({ id }, "Pega Solutions", {
    expiresIn: maxAge,
});

module.exports = {
    createToken, sendDbname, maxAge
}