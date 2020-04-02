const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { userRoutes } = require("./src/routes/userRoutes");
const { blogPostRoutes } = require("./src/routes/blogPostRoutes");

const app = express();
const PORT = 3000;

mongoose.connect("put url here", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);
blogPostRoutes(app);

const start = () => {
  return app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
};

module.exports = { start };
