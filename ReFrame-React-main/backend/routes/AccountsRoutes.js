const express = require("express");
const {
  createAccount,
  updateFollowing,
  followUser,
  unfollowUser,
} = require("../controllers/AccountController");
const router = express.Router();

// CREATE Account
router.post("/create", createAccount);

// UPDATE Account Data
router.patch("/updateFollowing/:username", updateFollowing);

// DELETE Account

// GET Account Data

module.exports = router;
