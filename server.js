// *** Dependencies
// =============================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Requiring our models for syncing
// const db = require("./models")

app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
require("./routes/html.js")(app);
// require("./routes/api.js")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})







