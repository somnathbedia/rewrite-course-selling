const { USERS } = require("../database/allArray");


exports.authenticateUser = (req, res,next) => {
    const { username, password } = req.headers;
    const convertedPassword = Number(password)
    const user = USERS.find((u) => u.username === username && u.password === convertedPassword);

    
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(404).json({ msg: "Invalid credential" });
    }
}