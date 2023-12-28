const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.userName;
    const password = req.headers.password;
    Admin.findOne({username:userName},(err,data)=>{
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

module.exports = adminMiddleware;