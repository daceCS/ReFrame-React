const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  PostData: {
    type: String,
    required: true,
  },
  Caption: {
    type: String,
  },
  Votes: {
    type: Number,
  },
  PostType: {
    type: Number,
    required: true,
  },
  PostedBy: {
    type: String,
    required: true,
  },
  PostId: {
    type: String,
    unique: true,
  },
  VotedBy: {
    type: String,
  },
});

const PostModel = mongoose.model("accounts", PostSchema);
module.exports = PostModel;
