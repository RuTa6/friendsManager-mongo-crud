const usersRoute = require("express").Router();
const { signUp, signIn } = require("../db/users");
var jwt = require("jsonwebtoken");

usersRoute.post("/create-user", async (request, response) => {
    const body = request.body;
    const createdData = await signUp(body);
    response.json({
      message: "User Created",
      data: createdData,
    });
  }); 
  usersRoute.post("/login-user", async (request, response) => {
    const body = request.body;
    const loggedData = await signIn(body);
    response.json({
      data: loggedData,
    });
  });

  module.exports=usersRoute