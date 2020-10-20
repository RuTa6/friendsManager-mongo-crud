const friendsRoute = require("express").Router();
const {
    addFriend,
    deleteFriend,
    updateFriend,
    getFriend,
    listFriend,
  } = require("../db/friends");
const { autherizationMiddleware } = require("../middlewares/auth");
friendsRoute.use("/",autherizationMiddleware)
friendsRoute.post("/add-friend", async (request, response) => {
  const body = request.body;
  const insertedData = await addFriend(body);
  response.json({
    message: "Data inserted",
    status: "ok",
    data: insertedData,
  });
});

friendsRoute.get("/list-friend", async (request, response) => {
  const fetcheddData = await listFriend();
  response.json({
    message: "Data fetched",
    status: "ok",
    data: fetcheddData,
  });
});

friendsRoute.delete("/delete-friend/:id", async (request, response) => {
  const id = request.params.id;
  const deletedData = await deleteFriend(id);
  response.json({
    message: "data deleted",
    data: deletedData,
  });
});

friendsRoute.get("/get-friend/:friendId", async (request, response) => {
  const id = request.params.friendId;
  const fetchedData = await getFriend(id);
  response.json({
    message: "data fetched",
    data: fetchedData,
  });
});

friendsRoute.put("/update-friend/:id", async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  const updatedData = await updateFriend(id, body);
  response.json({
    message: "data updated",
    data: updatedData,
  });
});

// export friendsRoute
module.exports=friendsRoute