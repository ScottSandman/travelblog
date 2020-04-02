const { BlogPostModel } = require("../models/blogPostModel");

const postBlogPost = async (request, response) => {
  try {
    console.log("POST BLOG POST");
    const publishBlog = new BlogPostModel(request.body);
    const createBlog = await BlogPostModel.create(publishBlog);
    response.send(createBlog);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getOneBlogPost = async (request, response) => {
  try {
    console.log("GET SINGLE BLOG POST");
    const getBlogPost = await BlogPostModel.findOne(request.query);
    response.send(getBlogPost);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getAllBlogPost = async (request, response) => {
  try {
    console.log("GET ALL BLOG POSTS");
    const getAllBlogs = await BlogPostModel.find({});
    response.send(getAllBlogs);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getBlogByAuthor = async (request, response) => {
  try {
    if (
      !request.query.author ||
      request.query.title ||
      request.query.blogPost ||
      request.query.urlImage ||
      request.query.date
    ) {
      throw "Invalid request. Requires Author";
    }
    console.log("GET BLOG POSTS BY AUTHOR");
    const getByAuthor = await BlogPostModel.find(request.query);
    response.send(getByAuthor);
  } catch (error) {
    response.status(500).send(error);
  }
};

const putBlog = async (request, response) => {
  try {
    console.log("EDIT BLOG POST");
    const editblog = await BlogPostModel.findOneAndUpdate(
      request.query,
      request.body
    );
    response.send(editblog);
  } catch (error) {
    response.status(500).send(error);
  }
};

const deleteBlog = async (request, response) => {
  try {
    console.log("DELETE BLOG POST");
    const deleteBlogPost = await BlogPostModel.deleteOne(request.query);
    response.send(deleteBlogPost);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = {
  postBlogPost,
  getOneBlogPost,
  getAllBlogPost,
  getBlogByAuthor,
  putBlog,
  deleteBlog
};
