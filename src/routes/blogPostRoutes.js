const {
  postBlogPost,
  getOneBlogPost,
  getAllBlogPost,
  getBlogByAuthor,
  putBlog,
  deleteBlog
} = require("../controllers/blogPostController");

const blogPostRoutes = app => {
  app
    .route("/blogpost")
    .post(postBlogPost)
    .get(getOneBlogPost)
    .put(putBlog)
    .delete(deleteBlog);

  app.route("/blogposts").get(getAllBlogPost);
  app.route("/blogpostbyauthor").get(getBlogByAuthor);
};

module.exports = { blogPostRoutes };
