const { Router } = require("express");
const router = Router();
const Post = require("../models/Post");
const { check, validationResult } = require("express-validator");

// /api/post/create
router.post(
  "/create",
  // [
  // check("title", "Некорректные данные поста")
  // .not()
  // .isEmpty(),
  // .custom((value) => !/\s/.test(value)),
  // check("description", "Некоррекнтые данные описание поста")
  // .not()
  // .isEmpty()
  // .custom((value) => !/\s/.test(value)),
  // ],
  async (req, res) => {
    try {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({
      //     errors: errors.array(),
      //     message: "Некоррекные данные при создании поста",
      //   });
      // }

      const { title, description } = req.body;
      const post = new Post({ title, description });
      await post.save();
      res.status(201).json({ message: "Пост создан" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Упс что-то пошло не так попробуйте снова..." });
    }
  }
);

// /api/post/
router.get("/", async (req, res, next) => {
  // res.send("API WORK");
  try {
    const posts = await Post.find() 
    res.json(posts);
  } catch (e) {
    console.log(e, "E");
    res
      .status(500)
      .json({ message: "Упс что-то пошло не так попробуйте снова..." });
  }
});

// /api.post/:id
router.get("/:id", async (req, res) => {
  // res.send("API WORK");
  try {
    const posts = await Post.findById(req.params.id) 
    res.json(posts);
  } catch (e) {
    console.log(e, "E");
    res
      .status(500)
      .json({ message: "Упс что-то пошло не так попробуйте снова..." });
  }
});

module.exports = router;
