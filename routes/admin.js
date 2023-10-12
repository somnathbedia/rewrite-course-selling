const express = require("express");
const router = express.Router();
const  handleSignup  = require("../controllers/signup")
const handleSignin = require("../controllers/signin")
const adminAuthentication = require("../authentication/adminAuthentication")
const handleCourses = require("../controllers/courses");
const courseUpdate = require("../controllers/updateCourse")
const getCourses = require("../controllers/getCourses")

router.post("/signup", handleSignup.signup);
router.post("/signin", adminAuthentication.adminAuthentication, handleSignin.signin);
router.get("/courses", adminAuthentication.adminAuthentication, handleCourses.courses);
router.put("/courses/:courseId", adminAuthentication.adminAuthentication, courseUpdate.update);
router.get("/fetchcourses", adminAuthentication.adminAuthentication, getCourses.sendCourses);

// export default router;

module.exports = router;