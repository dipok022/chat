import express from "express";

const router = express.Router();

// all users
router.get("/users", (req, res) => {
  res.send("Hello, World!");
});

// single user
router.get("/user/:id", (req, res) => {
  res.send(`Hello, World! User with id ${req.params.id}`);
});

// register
router.post("/register", (req, res) => {
  res.send("New resource created!");
});

// login
router.post("/login", (req, res) => {
  res.send("User logged in!");
});

// PUT
router.put("/user/:id", (req, res) => {
  res.send(`Resource with id ${req.params.id} updated!`);
});

// DELETE
router.delete("/user/:id", (req, res) => {
  res.send(`Resource with id ${req.params.id} deleted!`);
});

export default router;
