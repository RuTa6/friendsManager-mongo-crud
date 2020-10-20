const express = require("express");
const bodyParser = require("body-parser");
const friendsRoute = require("./routes/friends");
const usersRoute = require("./routes/auth");
const app = express();
app.use(bodyParser.json());
app.use("/", usersRoute);
app.use("/", friendsRoute);

app.listen(3000);
