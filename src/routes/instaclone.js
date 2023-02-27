const router = require("express").Router();
const {
  createPost,
  getPosts,
} = require("../controllers/instacloneControllers");
router.get("/", getPosts);
router.post("/", createPost);
module.exports = router;
