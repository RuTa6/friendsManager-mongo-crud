const mongoose = require("../mongoDb");

// create Friends model
const usersModel = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  token: {
    type: String
  }
});

// export model
module.exports = mongoose.model("users", usersModel);
