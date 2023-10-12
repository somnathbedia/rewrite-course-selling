const { USERS } = require("../database/allArray");

exports.signup = (req, res) => {
  const user = { ...req.body, purchasedCourses: [] };

  USERS.push(user);
  res.status(200).json({ msg: "user signup successfully",user });
};
