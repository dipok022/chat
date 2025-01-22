import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";

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
