require("../mongoDb");
// const { request } = require("express");
// const { update } = require("../model/friends");
const friendsModel = require("../model/friends");
// import friends model

const addFriend = async (body) => {
  // add a friend to DB
  const friendsmodel = new friendsModel({
    userId: "123",
    fullName: "def-test", //req.body.fullName,
    address: "kandy", //req.body.address,
    contactNumber: "1231231", //req.body.contactnumber,
  });
  console.log("Adding new friend");

  const results = await friendsmodel.save();
  return results;
};

const deleteFriend = async (id) => {
  // delete a friend from DB
  const result = await friendsModel.findByIdAndRemove(id);
  return result;
};
const updateFriend = async (id) => {
  // update a friend to DB
  const result = await friendsModel.findOneAndUpdate({
    _id: id
  }, {
    userId: "456",
    fullName: "xyz",
    address: "ghi",
    contactNumber: "0777123123",
  }, {
    new: true
  });
  return result;
};
const getFriend = async (id) => {
  // console.log("id>>> " + id);
  // select a friend from DB
  const result = await friendsModel.findById(id);
  // console.log("result", result);
  return result;
};

const listFriend = async () => {
  // get the list of friends  DB
  const results = await friendsModel.find();
  return results;
};

module.exports = {
  addFriend,
  deleteFriend,
  updateFriend,
  getFriend,
  listFriend: listFriend,
};
