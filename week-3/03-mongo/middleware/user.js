const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userName = req.headers.userName;
    const password = req.headers.password;
    User.findOne({username:userName},(err,data)=>{
        if(err){
            res.send("User Not Found...");
        }else{
            if(data.password === password){
                next();
            }
            res.send("Invalid Password...");
        }
    })
}

module.exports = userMiddleware;