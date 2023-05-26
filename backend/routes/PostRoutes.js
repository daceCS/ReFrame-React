const express = require("express");
const router = express.Router();
const {
  createPost,
  upload,
  sendPost,
  getPostData,
  getAllPost,
} = require("../controllers/PostController");

// CREATE Post

router.post("/create", upload.single("avatar"), createPost);

router.get("/get-post-image", sendPost);

router.get("/post-data", getPostData);

router.get("/get-all-post", getAllPost);

//router.get("get-all-post", getAllPost);

//router.delete("delete-post", deletePost);

// DELETE Post

// GET Post Data

module.exports = router;
