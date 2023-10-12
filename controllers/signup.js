const jwt = require("jsonwebtoken");
const secret = "kweygfsdalj";
const { ADMINS } = require('../database/allArray')





exports.signup = (req, res) => {
  const { username, password } = req.body;
  const existingAdmin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (existingAdmin) {
    res.status(411).json({ message: "Admin Already exist" });
  } else {
      const token = jwt.sign({ username } , secret, { expiresIn: "3h" });
    ADMINS.push({ username, password });
    res
      .status(200)
      .json({ msg:"Admin signup successfully", token });
  }
};
