const {COURSES} = require("../database/allArray")



exports.courses = (req, res) => {
    const course = req.body;
    course._id = Date.now();
    COURSES.push(course);
    res.status(200).json({ msg: "Course created successfully", courseId: course._id });
}