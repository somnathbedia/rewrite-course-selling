const { COURSES } = require("../database/allArray");

exports.courseForUser = (req, res) => {
    let filteredCourses = [];
    for (let i = 0; i < COURSES.length; i++){
        if (COURSES[i].published) {
            filteredCourses.push(COURSES[i]);
        }
    }
    res.json({ courses: filteredCourses });
}