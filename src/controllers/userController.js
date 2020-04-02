const { UserModel } = require("../models/userModel");
const path = require("path");

const getAllUsers = async (request, response) => {
  try {
    console.log("GET USERS");
    let userInstances = await UserModel.find({});
    console.log(userInstances);
    response.send(userInstances);
  } catch (error) {
    response.status(500).send(error);
  }
};

const postUser = async (request, response) => {
  try {
    console.log("POST USER");
    let userInstance = new UserModel(request.body);
    console.log(userInstance);
    const createdUser = await UserModel.create(userInstance);
    response.send(createdUser);
  } catch (error) {
    response.status(500).send(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    console.log("DELETE USER");
    console.log(request.query);
    deleteUserInstance = await UserModel.deleteOne(request.query);
    console.log("deleteUserInstance");
    response.send(deleteUserInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const putUser = async (request, response) => {
  console.log("USER UPDATE");
  let updateUser = await UserModel.findOneAndUpdate(
    request.query,
    request.body
  );
  response.send(updateUser);
};

const getUser = async (request, response) => {
  try {
    console.log("GET SINGLE USER");
    let user = await UserModel.findOne(request.query);
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getHome = async (request, response) => {
  try {
    console.log("SEND HOME PAGE");
    response.sendFile(path.join(__dirname + "/../views/index.html"));
  } catch (error) {
    response.status(500).send(error);
  }
};

const getTest = async (request, response) => {
  try {
    console.log("SEND TEST PAGE");
    response.sendFile(path.join(__dirname + "/../views/test.html"));
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = {
  getAllUsers,
  postUser,
  deleteUser,
  putUser,
  getUser,
  getHome,
  getTest
};

// // gets user to delete from json request body
// app.delete("/user", async (request, response) => {
//   try {
//     console.log("DELETE USER");
//     deleteUserInstance = await UserModel.deleteOne(request.body);
//     console.log("deleteUserInstance");
//     response.send(deleteUserInstance);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
