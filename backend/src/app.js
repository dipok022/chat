import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router.js";
import chatRouter from "./routers/chat-router.js";

// middleware
const app = express();
app.use(express.json());
dotenv.config({
  path: "./.env",
});

// routes
app.use("/api/v1", userRouter);
app.use("/api/v1", chatRouter);

export { app };
