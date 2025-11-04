const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send(" Hello from Service B");
});
app.post("/serviceB", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/serviceB", (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log("ServiceB running on http://localhost:3001");
});
