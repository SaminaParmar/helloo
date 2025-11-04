const express = require("express");
const app = express();

app.use(express.json());

let posts = [];

app.get("/", (req, res) => {
  res.send("Hello from Service A");
});

app.post("/serviceA", (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    userId,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get("/serviceA", (req, res) => {
  res.json(posts);
});



app.listen(3002, () => {
  console.log("ServiceA running on http://localhost:3002");
});
