import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      // metch: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    avatar: {
      type: String,
    },
    about: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
      // minlength: 8,
      // metch:
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
