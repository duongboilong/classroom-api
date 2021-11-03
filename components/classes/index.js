const express = require("express");
const dummy = require("./dummy");
const router = express.Router();
const classDummy = require("./dummy");
const classRoomControler = require("./classes.controler");

/* GET home page. */
router.get("/", classRoomControler.getAllCourse);

router.get("/getAll", classRoomControler.getAllCourse);

// router.post("/", function(req, res, next) {
//     console.log(req.body);
//     console.log("dsfsdf");
//     const cls = { id: dummy.length + 1, ...req.body };
//     dummy.push(cls);
//     res.json(dummy);
// });

router.post("/", classRoomControler.addNewClass);

router.get("/abc", function(req, res, next) {
    res.json(classDummy);
});

module.exports = router;