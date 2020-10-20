const express = require("express");
const bodyParser = require("body-parser");
const friendsRoute = require("./routes/friends");
const usersRoute = require("./routes/auth");
const app = express();
app.use(bodyParser.json());
app.use("/",usersRoute)
app.use("/",friendsRoute)

//var jwt = require("jsonwebtoken");

// const autherizationMiddleware = (req, res, next) => {
//   // get token
//   const str = req.headers.authorization;
//   const string = str.split(" ");
//   const token = string[1];
//   // match token from DB and token from Client(postman/browswr)
//   jwt.verify(token, "secretKey123", (err, result) => {
//     if (!err) {
//       console.log(result.email);
//       next();
//     } else {
//       // if doesnot match, return error - invalid token
//       res.status(401).json({
//         message: "No auth token found",
//       });
//     }
//   });
// };

//     req.customData = {
//       userEmail: "",
//       userId: "",
//     };
//app.use(autherizationMiddleware);

// app.post("/create-user", async (request, response) => {
//   const body = request.body;
//   const createdData = await signUp(body);
//   response.json({
//     message: "User Created",
//     data: createdData,
//   });
// });

// app.post("/login-user", async (request, response) => {
//   response.sendFile("./layots/signIn.html");
//   const body = request.body;
//   const loggedData = await signIn(body);
//   response.json({
//     data: loggedData,
//   });
// });




// app.post("/add-friend", async (request, response) => {
//   const body = request.body;
//   const insertedData = await addFriend(body);
//   response.json({
//     message: "Data inserted",
//     status: "ok",
//     data: insertedData,
//   });
// });

// app.get("/list-friend", async (request, response) => {
//   const fetcheddData = await listFriend();
//   response.json({
//     message: "Data fetched",
//     status: "ok",
//     data: fetcheddData,
//   });
// });

// app.delete("/delete-friend/:id", async (request, response) => {
//   const id = request.params.id;
//   const deletedData = await deleteFriend(id);
//   response.json({
//     message: "data deleted",
//     data: deletedData,
//   });
// });

// app.get("/get-friend/:friendId", async (request, response) => {
//   const id = request.params.friendId;
//   const fetchedData = await getFriend(id);
//   response.json({
//     message: "data fetched",
//     data: fetchedData,
//   });
// });

// app.put("/update-friend/:id", async (request, response) => {
//   const id = request.params.id;
//   const body = request.body;
//   const updatedData = await updateFriend(id, body);
//   response.json({
//     message: "data updated",
//     data: updatedData,
//   });
// });

app.listen(3000);
