// Import Express
const express = require("express");

// Create Express application
const app = express();

// Port
const PORT = 3000;


// ======================================================
// TEST ROUTE
// ======================================================

app.get("/api/test", (req, res) => {

    res.json({
        message: "Node.js server is working!"
    });

});


// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {

    console.log("=================================");
    console.log("SERVER IS RUNNING");
    console.log("http://localhost:3000");
    console.log("=================================");

});