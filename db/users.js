require("../mongoDb");
const usersModel = require("../model/users");
var jwt = require('jsonwebtoken');

const signupUser = async (user) => {

  // Check if the email exists in DB

  // TODO: hash the password - npm i bcrypt

  const newUser = new usersModel(user);
  console.log("Adding new user");

  const addedUser = await newUser.save();
  return addedUser;
}

const loginUser = async (body) => {

  const userFromDb = await usersModel.findOne({
    email: body.email
  })

  if (userFromDb.password === body.password) { // TODO: match hashed passwords

    if (userFromDb.token) {
      return {
        email: userFromDb.email,
        token: userFromDb.token,
        name: userFromDb.name
      }
    } else {

      const token = jwt.sign({ email: userFromDb.email }, 'secretKey123');

      const result = await usersModel.findOneAndUpdate({
        _id: userFromDb._id
      }, {
        token
      }, {
        new: true
      });
      return {
        email: result.email,
        token: result.token,
        name: result.name
      };
    }

  } else {
    return {
      error: true,
      message: "Invalid password"
    }
  }
}

module.exports = {
  signupUser,
  loginUser
};
