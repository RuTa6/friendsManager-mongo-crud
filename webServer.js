const express = require("express");
const bodyParser = require("body-parser");
const {
  addFriend,
  deleteFriend,
  updateFriend,
  getFriend,
  listFriend,
} = require("./db/friends");
const { signupUser, loginUser } = require('./db/users')

const app = express();
app.use(bodyParser.json());

const autherizationMiddleware = (req, res, next) => {
  console.log("Autherization middleware");

  if (req.headers.authorization) {

    // get token
    // verify token and get payload (email)

    // get user from DB (by email)

    // match token from DB and token from Client(postman/browswr)

    req.customData = {
      userEmail: '',
      userId: ''
    }
    next();

    // if doesnot match, return error - invalid token

  } else {
    res.status(401).json({
      message: "No auth token found"
    })
  }

  // console.log(req.headers.authorization)


  // if (new Date().getHours() >= 14 && new Date().getHours() <= 18) {
  //   next();
  // } else {
  //   res.json({
  //     message: "Request not allowed right now. Try after 2PM"
  //   })
  // }
}

app.use(autherizationMiddleware)

app.post("/signup", async (req, res) => {
  const body = req.body;
  const { email, password, name } = body

  try {

    const createdUser = await signupUser({
      email,
      password,
      name
    })

    res.json({
      message: "New user created",
      data: createdUser
    })
  } catch (e) {
    res.status(500).json({
      message: e.message,
    })
  }
})

app.post("/login", async (req, res) => {
  const body = req.body;
  const { email, password } = body

  const logedinUser = await loginUser({
    email, password
  })

  if (logedinUser.error) {
    res.status(401).json(logedinUser)
  } else {
    res.json({
      message: "User logged in",
      data: logedinUser
    })
  }

})

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
  const userId = req.customData.userId;
  const fetcheddData = await listFriend(userId);
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
