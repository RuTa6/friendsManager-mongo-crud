const mongoose = require("../mongoDb");

// create Friends model
const usersModel = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String  
  },
  password: {
    type: String,
  },
  token:{
      type:String
  }

});

// export model
module.exports = mongoose.model("users", usersModel);
