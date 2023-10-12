const { COURSES } = require("../database/allArray");

exports.sendCourses = (req, res) => {
    res.json({ couress: COURSES });
}