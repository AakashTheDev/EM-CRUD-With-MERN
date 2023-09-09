const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  EMail: {
    type: String,
    required: true,
  },
  Profession: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("Employees", UserSchema);
module.exports = UserModel;
