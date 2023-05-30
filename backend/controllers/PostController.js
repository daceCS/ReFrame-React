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

const createImagePost = async (req, res) => {
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
  let postID = req.file.filename.split(".")[0];
  console.log(postID);
  const post = await Post.create({
    PostData: req.file.filename,
    Caption: req.headers.caption,
    PostType: POST_TYPE_IMAGE,
    PostedBy: "mike",
    PostId: postID,
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

const sendPostImage = async (req, res) => {
  const DATA = req.params.image;

  res.sendFile(__dirname + "\\user-uploads\\post-images\\" + DATA); // this code works
};

const getPostData = async (req, res) => {
  const POST_ID = req.headers.postid;
  post = await Post.findOne({ PostId: POST_ID });
  //console.log(post);

  res.json(post);
};

const getAllPost = async (req, res) => {
  allPost = await Post.find();

  console.log(allPost);
  res.json({ allPost: allPost });
};

const getAllUserPost = async (req, res) => {
  const USER = req.params.username;
  //console.log(USER);
  const ALL_USER_POST = await Post.find({ PostedBy: USER });
  //console.log(ALL_USER_POST);

  res.json(ALL_USER_POST);
};

module.exports = {
  createImagePost,
  upload,
  sendPostImage,
  getPostData,
  getAllPost,
  getAllUserPost,
};
