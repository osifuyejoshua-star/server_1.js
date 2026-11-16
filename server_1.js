require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/" , (req, res) => {
  res.send("My Week 2 API!!")
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }
  res.status(201).json({
    message: `Hello, ${name}!`,
  });
});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  res.send(`User ${id} profile`);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API live on port ${PORT}`);
});
