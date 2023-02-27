const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const cors = require("cors");
const instacloneRoutes = require("./routes/instaclone");
const app = express();
app.use(express.json());
app.use("/api/posts", instacloneRoutes);
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://root:Hyderabad@12@cluster0.dkysp1w.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);
// app.use(cors());
// mongodb+srv://vulcan:12,@expressmongodb.xgwpawz.mongodb.net/instaClone?retryWrites=true&w=majority

app.listen(4000, () => {
  console.log("listening on 4000");
});
