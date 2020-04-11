const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Loading post model
const Post = require("../../models/Post");

//Loading post Validations
const validatePostInput = require("../../validation/post");

// @route:  GET api/posts/test
// @desc:   Tests post route
// @access: Public
router.get("/test", (req, res) => res.json({ msg: "Posts file works" }));

// @route:  POST api/posts
// @desc:   Create a post
// @access: Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      //if any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.user.avatar,
      user: req.user.id,
    });

    newPost.save().then((post) => res.json(post));
  }
);
module.exports = router;
