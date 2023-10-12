const { COURSES } = require("../database/allArray");


exports.update = (req, res) => {
    const courseId = Number(req.params.courseId);
    let updateCourse = null;
    for (let i = 0; i < COURSES.length; i++){
        if (COURSES[i]._id === courseId) {
            COURSES[i] = req.body;
            updateCourse = COURSES[i];
            res.status(201).json({msg:"courses updated successfully",updateCourse})
            break;
        }
    }
}