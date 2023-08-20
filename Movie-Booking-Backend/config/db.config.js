const mongoose = require('mongoose');

const DB_URL = "mongodb://127.0.0.1:27017/moviesdb";

const connectToDatabase = () => {

    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Connected to the database!");
    }).catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    })
}

module.exports = connectToDatabase
