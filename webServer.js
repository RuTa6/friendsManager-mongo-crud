const express = require("express");
const bodyParser = require("body-parser");
const {
  addFriend,
  deleteFriend,
  updateFriend,
  getFriend,
  listFriend,
} = require("./db/friends");

const app = express();
app.use(bodyParser.json());

app.post("/add-friend", async (request, response) => {
  const body = request.body;
  console.log(body);
  const insertedData = await addFriend(body);
  response.json({
    message: "Data inserted",
    status: "ok",
    data: insertedData,
  });
});

app.get("/list-friend", async (request, response) => {
  const fetcheddData = await listFriend();
  response.json({
    message: "Data fetched",
    status: "ok",
    data: fetcheddData,
  });
});

app.delete("/delete-friend/:id", async (request, response) => {
  const id = request.params.id;
  const deletedData = await deleteFriend(id);
  response.json({
    message: "data deleted",
    data: deletedData,
  });
});

app.get("/get-friend/:friendId", async (request, response) => {
  const id = request.params.friendId;
  const fetchedData = await getFriend(id);
  response.json({
    message: "data fetched",
    data: fetchedData,
  });
});

app.put("/update-friend/:id", async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  const updatedData = await updateFriend(id, body);
  response.json({
    message: "data updated",
    data: updatedData,
  });
});

app.listen(3000);
