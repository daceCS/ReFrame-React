const Post = require("../models/Post");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/user-uploads/post-images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    let postId = createNewPostId();
    console.log(postId);
    cb(null, postId + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const createPost = async (req, res) => {
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;
  fs.rename(
    __dirname + `./user-uploads/${req.file.filename}`,
    __dirname + `./user-uploads/${newFileName}`,
    () => {
      res.send("200");
    }
  );
  const POST_TYPE_IMAGE = 0;
  console.log(req.headers.caption);
  const post = await Post.create({
    PostData: newFileName,
    Caption: req.headers.caption,
    PostType: POST_TYPE_IMAGE,
    PostedBy: "david",
    PostId: req.file.filename,
  });
  res.status(200);
};

const createNewPostId = () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 5) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

module.exports = {
  createPost,
  upload,
};
