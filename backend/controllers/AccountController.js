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

const followUser = async (req, res) => {
  const { username } = req.params;
  const followedUser = req.body.follow;

  const account = await Account.findOneAndUpdate(
    { username: username },
    {
      $push: {
        following: followedUser,
      },
    }
  );

  const updateUserFollowCount = await Account.findOneAndUpdate(
    {
      username: followedUser,
    },
    {
      $inc: {
        followers: 1,
      },
    }
  );

  if (!account) {
    return res.status(404).json({ err: "No such account" });
  }
  if (!updateUserFollowCount) {
    return res.status(404).json({ err: "No such account" });
  }

  res.status(200).json(account);
};

const unfollowUser = async (req, res) => {
  const { username } = req.params;
  const followedUser = req.body.follow;

  const account = await Account.findOneAndUpdate(
    { username: username },
    {
      $pull: {
        following: followedUser,
      },
    }
  );

  const updateUserFollowCount = await Account.findOneAndUpdate(
    {
      username: followedUser,
    },
    {
      $inc: {
        followers: -1,
      },
    }
  );

  if (!account) {
    return res.status(404).json({ err: "No such account" });
  }
  if (!updateUserFollowCount) {
    return res.status(404).json({ err: "No such account" });
  }

  res.status(200).json(account);
};

module.exports = {
  createAccount,
  updateFollowing,
  followUser,
  unfollowUser,
};
