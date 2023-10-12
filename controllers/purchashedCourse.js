const { COURSES } = require("../database/allArray");

exports.purchasedCourse = (req, res) => {
    const courseId = Number(req.params.courseID);
    const course = COURSES.find(c => c._id === courseId && c.published);
    console.log(course);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: 'Course purchased successfully' });
  } else {
    res.status(404).json({ message: 'Course not found or not available' });
  }
}