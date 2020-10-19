const mongoose = require("../mongoDb");

// create Friends model
const friendsModel = new mongoose.Schema({
  // _id:{
  //     type:String
  // },
  userId: {
    type: String,
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
  //   email: {
  //     type: String,
  //   },
  //   password: {
  //     type: String,
  //   },
});

// export model
module.exports = mongoose.model("friends", friendsModel);
