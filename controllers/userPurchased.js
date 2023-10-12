exports.userPurchased = (req, res) => {
    const  course  = req.user.purchasedCourses;
    res.json({ course });
}