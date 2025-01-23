import { Router } from "express";
import {
  getUsers,
  findUser,
  createUser,
  loginUser,
  editUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

// routers
router.route("/users").get(getUsers);
router.route("/me/:userId").get(findUser);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/edit/:userId").put(editUser);
router.route("/delete/:userId").delete(deleteUser);

export default router;
