const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },

  blogPost: {
    type: String,
    required: true
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
  },

  imageUrl: {
    type: [{ type: String }],
    required: true
  },

  title: {
    type: String,
    required: true
  }
});

const BlogPostModel = mongoose.model("blogPost", blogPostSchema);

module.exports = { BlogPostModel };
