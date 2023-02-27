const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const cors = require("cors");
const instacloneRoutes = require("./routes/instaclone");
const app = express();
app.use(express.json());
app.use("/api/posts", instacloneRoutes);
mongoose.set("strictQuery", false);

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
const mongo = process.env.MONGO_URI;
mongoose.connect(mongo);
mongoose.connection.on("connected", () => {
  console.log(`connected to db`);
});
mongoose.connection.on("error", () => {
  console.log(`connected to db define error`);
});
// mongoose.connect(
//   "mongodb+srv://Irshad:Irshad@123@cluster0.5scvlru.mongodb.net/?retryWrites=true&w=majority",
//   () => {
//     console.log("connected to DB");
//   }
// );
// // app.use(cors());
// // mongodb+srv://vulcan:12,@expressmongodb.xgwpawz.mongodb.net/instaClone?retryWrites=true&w=majority

app.listen(4000, () => {
  console.log("listening on 4000");
});
