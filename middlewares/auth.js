const router = require("express").Router();
var jwt = require("jsonwebtoken");
const autherizationMiddleware = (req, res, next) => {
  // get token
  const str = req.headers.authorization;
  if (str == null) {
    res.status(401).json({
      message: "No auth token found",
    });
  } else {
    const string = str.split(" ");
    const token = string[1];
    // match token from DB and token from Client(postman/browswr)
    jwt.verify(token, "secretKey123", (err, result) => {
      if (!err) {
        console.log(result.email);
        next();
      } else {
        // if doesnot match, return error - invalid token
        res.status(401).json({
          message: "Auth token didn't match",
        });
      }
    });
  }
};

module.exports = { autherizationMiddleware };
