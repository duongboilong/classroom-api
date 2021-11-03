const mongoose = require("mongoose");
const ClassRoom = require("./classes.model");

module.exports = {
    getAllCourse: async(req, res) => {
        console.log(ClassRoom);
        await ClassRoom.find()
            .exec()
            .then((allCourse) => {
                console.log(allCourse.length);
                return res.status(200).json(allCourse);
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "Server error. Please try again.",
                    error: err.message,
                });
            });
    },
    addNewClass: (req, res) => {
        console.log(req.body);
        const classRoom = new ClassRoom({
            _id: new mongoose.Types.ObjectId(),
            ID: 5,
            className: req.body.className,
            catName: req.body.catName,
            teacherName: req.body.teacherName,
        });
        classRoom
            .save()
            .then((allCourse) => {
                console.log(allCourse.length);
                return res.status(201).json(allCourse);
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: "Server error. Please try again.",
                    error: err.message,
                });
            });
    },
};