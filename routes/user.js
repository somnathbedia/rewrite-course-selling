const express = require("express");
const router = express.Router();
const handleSignup = require("../controllers/userSignup");
const handleSignin = require("../controllers/userSignin");
const authenticateUser = require("../authentication/userAuthentication");
const getCourses = require("../controllers/courseForUser");
const purchasedCourse = require("../controllers/purchashedCourse")
const userPurchased = require("../controllers/userPurchased")

router.post("/signup", handleSignup.signup);
router.post("/signin", authenticateUser.authenticateUser, handleSignin.signin);
router.get("/courses", authenticateUser.authenticateUser, getCourses.courseForUser);
router.post("/courses/:courseID", authenticateUser.authenticateUser, purchasedCourse.purchasedCourse)
router.get("/purchasedcourses", authenticateUser.authenticateUser, userPurchased.userPurchased);


module.exports = router;