const express = require("express");
const {
  createAccount,
  followUser,
  unfollowUser,
  loginAccount,
  sendImage,
} = require("../controllers/AccountController");
const router = express.Router();

// CREATE Account
router.post("/create", createAccount);

router.get("/login", loginAccount);

router.get("/image", sendImage);

// UPDATE Account Data

// DELETE Account

// GET Account Data

module.exports = router;
