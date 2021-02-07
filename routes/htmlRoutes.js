// const router = require("express").Router() //router method 2
const db = require("../models");

module.exports = function(app) { //router method 1

// Routes
// =============================================================


    // Each of the below routes just handles the HTML page that the user gets sent to.

    // exercise route loads exercise.html
    // router.get("/exercise", (req.res) =>)) DOES SIMILAR IF SET UP FOR THIS IN THE SERVER
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