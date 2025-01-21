import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be fill"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "It's not valid email address",
    ],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password must be fill"],
    minlength: 8,
    validate: {
      validator: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        ),
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    },
  },
});

const userModel = module.exports("User", userSchema);
export default userModel;
