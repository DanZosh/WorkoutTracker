// *** Dependencies
// =============================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
const PORT = process.env.PORT || 8000;
const app = express();
app.use(logger("dev"));

// Requiring our models for syncing
const db = require("./models")



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Static directory
app.use(express.static('public'));

require("express").Router() //router method 1
// Routes
// =============================================================
require("./routes/htmlRoutes.js")(app);//router method 1
require("./routes/apiRoutes.js")(app);//router method 1
// app.use(require("./routes/htmlRoutes.js")); //router method 2
// app.use(require("./routes/apiRoutes.js")); //router method 2

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})