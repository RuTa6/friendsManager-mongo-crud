const mongoose = require("../mongoDb");

// create Friends model
const friendsModel = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
});

// export model
module.exports = mongoose.model("friends", friendsModel);
