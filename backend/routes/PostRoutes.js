const express = require("express");
const router = express.Router();
const {
  createImagePost,
  upload,
  sendPostImage,
  getPostData,
  getAllPost,
  getAllUserPost,
} = require("../controllers/PostController");

// CREATE Post

router.post("/create-image-post", upload.single("avatar"), createImagePost);

router.get("/get-post-image", sendPostImage);

router.get("/post-data", getPostData);

router.get("/get-all-post", getAllPost);

router.get("/get-all-user-posts/:username", getAllUserPost);

//router.get("get-all-post", getAllPost);

//router.delete("delete-post", deletePost);

// DELETE Post

// GET Post Data

module.exports = router;
