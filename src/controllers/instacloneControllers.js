const Post = require("../models/instaclone");
const mongoose = require("mongoose");
const getPosts = async (req, res) => {
  const Posts = await Post.find({}).sort({ createdAt: -1 });
  res.status(200).json(Posts);
};
const createPost = async (req, res) => {
  const { name, location, likes, description, PostImage } = req.body;
  try {
    const post = await Post.create({
      name,
      location,
      likes,
      description,
      PostImage,
    });
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getPosts,
  createPost,
};
