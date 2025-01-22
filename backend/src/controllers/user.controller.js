import userModel from "../models/user.model";

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findUser = async (req, res) => {};

const createUser = async (req, res) => {
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).send({ message: "User already exists" });
    } else if (!validateEmail.test(req.body.email)) {
      return res.status(400).send({ message: "Invalid email" });
    } else if (!passRegex.test(req.body.password)) {
      return res.status(400).send({
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }
    const user = new userModel(req.body);
    await user.save();
    res.status(201).send({ message: "Singup successfully", user });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editUser = async (req, res) => {};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send({ error: "Resource not found" });
    }
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export { getUsers, findUser, createUser, editUser, deleteUser };
