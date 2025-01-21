import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// middleware
const app = express();
app.use(express.json());
dotenv.config();

// connect database
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
});
// listen server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
