import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router.js";
import connectDB from "./db/index.js";

// middleware
const app = express();
app.use(express.json());
dotenv.config({
  path: "./.env",
});

// routes
app.use("/api/v1", userRouter);

// connect database and listen port
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection failed !!! ", err);
  });
