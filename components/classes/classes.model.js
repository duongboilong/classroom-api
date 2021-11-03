const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ID: Number,
    className: String,
    catName: String,
    teacherName: String,
}, { versionKey: false });

module.exports = mongoose.model("classes", courseSchema);