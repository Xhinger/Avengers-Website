
// Mongoose allows Node.js to communicate with MongoDB
const mongoose = require("mongoose");


// ======================================================
// CREATE USER SCHEMA
// ======================================================

// Schema describes the structure of our user data
const userSchema = new mongoose.Schema({

    // ==============================================
    // USERNAME
    // ==============================================

    username: {

        // Data type is String
        type: String,

        // Username is required
        required: true,

        // Two users cannot have the same username
        unique: true
    },


    // ==============================================
    // EMAIL
    // ==============================================

    email: {

        // Data type is String
        type: String,

        // Email is required
        required: true,

        // Two users cannot have the same email
        unique: true
    },


    // ==============================================
    // PASSWORD
    // ==============================================

    password: {

        // Password is stored as a String
        type: String,

        // Password is required
        required: true
    }

});


// ======================================================
// CREATE USER MODEL
// ======================================================

// "User" becomes the MongoDB collection "users"
const User =
    mongoose.model(
        "User",
        userSchema
    );


// ======================================================
// EXPORT MODEL
// ======================================================

// Allows server.js to use the User model
module.exports = User;

