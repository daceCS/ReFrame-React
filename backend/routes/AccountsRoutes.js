const express = require("express");
const {
  createAccount,
  followUser,
  unfollowUser,
} = require("../controllers/AccountController");
const router = express.Router();

// CREATE Account
router.post("/create", createAccount);

// UPDATE Account Data

// DELETE Account

// GET Account Data

module.exports = router;
