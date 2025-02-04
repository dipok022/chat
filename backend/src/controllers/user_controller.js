import userModel from "../models/user_model.js";

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findUser = async (req, res) => {
  try {
    if (!req.params.userId) {
      return res.status(400).send({ message: "Invalid user ID" });
    }
    const user = await userModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).send({ error: "Resource not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  // const passRegex = /^(?=.[a-zA-Z])(?=.\d)[a-zA-Z\d]{8,}$/;
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).send({ message: "User already exists" });
    } else if (!validateEmail.test(req.body.email)) {
      return res.status(400).send({ message: "Invalid email" });
    }

    // else if (!passRegex.test(req.body.password)) {
    //   return res.status(400).send({
    //     message:
    //       "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    //   });
    // }
    const user = new userModel(req.body);
    await user.save();
    res.status(201).send({ user, message: "Singup successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: "Invalid user!" });

    const isMatch = (await user.password) !== req.body.password;
    if (isMatch) return res.status(401).send({ message: "Wrong password!" });

    res.send({ user, message: "Login successful" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editUser = async (req, res) => {
  const { userId } = req.params;
  const updateUser = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, updateUser, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send({ error: "Resource not found" });
    }
    res.status(200).send({ message: "Updated successfully", updatedUser });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);

  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send({ error: "Resource not found" });
    }
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export { getUsers, findUser, createUser, loginUser, editUser, deleteUser };
