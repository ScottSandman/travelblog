const {
  getAllUsers,
  postUser,
  deleteUser,
  putUser,
  getUser,
  getHome,
  getTest
} = require("../controllers/userController");

const userRoutes = app => {
  app.route("/users").get(getAllUsers);
  app
    .route("/user")
    .post(postUser)
    .delete(deleteUser)
    .put(putUser)
    .get(getUser);

  app.route("/").get(getHome);
  app.route("/test").get(getTest);
};

module.exports = { userRoutes };
