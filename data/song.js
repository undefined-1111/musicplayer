const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name: String,
    author: String,
    directory: String
});
module.exports = mongoose.model("Song", schema)