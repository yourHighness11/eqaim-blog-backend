const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogControllers");

router.get("/", blogControllers.getBlog);
router.get("/:bid", blogControllers.getBlogById);
router.post("/newblog", blogControllers.createBlog);

module.exports = router;
