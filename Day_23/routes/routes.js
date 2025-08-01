const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller");

router.post("/users", userController.createUser);

router.post("/posts", userController.createPost);

router.get("/post", userController.getPosts);

// Update a post by ID
router.put("/post/:id", userController.updatePost);

// Delete a post by ID
router.delete("/post/:id", userController.deletePost);
//post to user
router.get("/posts-with-users", userController.getPostsWithUsers);
//user to post
router.get("/users-with-posts", userController.getUserPost);
//user to post with specifications
router.get("/userswith-posts", userController.getUsersWithPosts);



module.exports = router;
