const {ADMINS} = require("../database/allArray")

exports.adminAuthentication = (req, res, next) => {
    const { username, password } = req.headers;

    //convert if number password/string password
    const convertedPassword = Number(password);
    const admin = ADMINS.find((a) => a.username === username && a.password === convertedPassword)
    
    if (admin) {
        next();
    } else {
        res.status(403).json({ msg: "Admin authencation failed" });
    }
}