const express = require("express");
const {
  createAccount,
  followUser,
  unfollowUser,
  loginAccount,
} = require("../controllers/AccountController");
const router = express.Router();

// CREATE Account
router.post("/create", createAccount);

router.get("/login", loginAccount);

// UPDATE Account Data

// DELETE Account

// GET Account Data

module.exports = router;
