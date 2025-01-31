import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user_router.js";

// middleware
const app = express();
app.use(express.json());
dotenv.config({
  path: "./.env",
});

// routes
app.use("/api/v1", userRouter);

export { app };
