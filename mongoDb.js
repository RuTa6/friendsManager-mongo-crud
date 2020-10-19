const mongoose = require("mongoose");
const db = mongoose.connect(
  "mongodb+srv://dbuser:xog6e8CtM2MhRDmH@cluster0.1wrr2.mongodb.net/friendsManager?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("connected successfully");
    } else {
      console.log("failed to connect" + err);
    }
  }
);

module.exports = mongoose;
