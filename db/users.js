require("../mongoDb");
//import user model
const usersModel = require("../model/users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const signUp = async (body) => {
  const newUser = new usersModel({
    userName: body.userName,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    token: jwt.sign({ email: body.email }, "secretKey123"),
  });
  const results = await newUser.save();
  return results;
};

const signIn = async (body) => {
try{
  const loggedUser = await usersModel.findOne({
    email: body.email,
  });
  const result = await bcrypt.compare(body.password, loggedUser.password);
  if (result){
      return{
          id:loggedUser._id,
          email:loggedUser.email,
          userName:loggedUser.userName,
          token:loggedUser.token
      }
  }else{
      return{
          error:true,
          message:"passwords didn't match"
      }
  }
} catch(e){
    return{
        message:"Email is not available"
    }
}
};

module.exports = {
  signUp,
  signIn,
};
