const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1:27017/Login2");

connect.then(() => {
    console.log("Database connected Successfully");
}).catch((err) => {
    console.error("Error connecting to database:", err);
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
});

const collection = mongoose.model("users2", LoginSchema);

module.exports = collection;
