// const router = require("express").Router() //router method 2
const db = require("../models");
const path = require("path");

module.exports = function(app) { //router method 1
// Routes
// =============================================================

    // exercise route loads exercise.html
    // router//router method 2
    app//router method 1
    .get("/exercise", function(req, res) {
        console.log("success get request in htmlRoutes.js")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // blog stats loads stats.html
    // router//router method 2
    app//router method 1
    .get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
} //router method 1
// module.exports = router; //router method 2