const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const newBlog = new Blog({
    title,
    content,
  });

  await newBlog.save(function (err) {
    res.json({messsage:"Blog created"})
  });
};

const getBlog = async (req, res) => {
  await Blog.find({}).exec(function (err, results) {
    if (err) {
      console.log(err);
    } else {
      res.json({ users: results });
    }
  });
};

const getBlogById = async (req, res) => {
  const blogId = req.params.bid;
  await Blog.findById(blogId).exec(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json({ user: result });
    }
  });
};

module.exports = { createBlog, getBlog, getBlogById };
