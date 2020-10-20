require("../mongoDb");
const friendsModel = require("../model/friends");
// import friends model

const addFriend = async (body) => {
  // add a friend to DB
  const friendsmodel = new friendsModel({
    userId: body.userId,
    fullName:body.fullName,
    address: body.address, 
    contactNumber: body.contactNumber
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
const updateFriend = async (id,body) => {
  // update a friend to DB
  const result = await friendsModel.findOneAndUpdate({
		_id: id
	},
	{
    userId: body.userId,
    fullName: body.fullName,
    address: body.address,
    contactNumber: body.contactNumber
  },{
		new:true
	}
	
	);
  return result;
};
const getFriend = async (id) => {
  // select a friend from DB
  const result = await friendsModel.findById(id);
  return result;
};

const listFriend = async () => {
  // get the list of friends  DB
  const results = await friendsModel.find();
  return results;
};

module.exports = {
  addFriend: addFriend,
  deleteFriend,
  updateFriend,
  getFriend,
  listFriend: listFriend,
};
