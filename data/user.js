const mongoose = require("mongoose")
const schema = mongoose.Schema({
    nickname: String,
    subscription: Boolean
});
module.exports = mongoose.model("User", schema)