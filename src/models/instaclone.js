const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const instaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    PostImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Posts", instaSchema);
