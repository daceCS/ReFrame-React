const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
  deletePost,
} = require("../controllers/PostController");

// CREATE Post

router.post("create", createPost);

router.get("get-all-post", getAllPost);

router.delete("delete-post", deletePost);

// DELETE Post

// GET Post Data

module.exports = router;
