const express = require("express");
const router = express.Router();
const { createPost, upload } = require("../controllers/PostController");

// CREATE Post

router.post("/create", upload.single("avatar"), createPost);

//router.get("get-all-post", getAllPost);

//router.delete("delete-post", deletePost);

// DELETE Post

// GET Post Data

module.exports = router;
