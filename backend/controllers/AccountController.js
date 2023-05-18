const Account = require("../models/Account");
const mongoose = require("mongoose");

const createAccount = async (req, res) => {
  const { username, password } = req.body;

  // add doc to db
  try {
    const account = await Account.create({ username, password });
    res.status(200).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateFollowing = async (req, res) => {
  const { username } = req.params;
  const follow = req.body.follow;

  const account = await Account.findOneAndUpdate(
    { username: username },
    {
      $push: {
        following: follow,
      },
    }
  );

  if (!account) {
    return res.status(404).json({ err: "No such account" });
  }

  res.status(200).json(account);
};

module.exports = {
  createAccount,
  updateFollowing,
};
