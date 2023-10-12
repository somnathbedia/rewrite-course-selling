const { USERS } = require("../database/allArray")

exports.signin = (req, res) => {
    res.json({ msg: "user logged in" });
}