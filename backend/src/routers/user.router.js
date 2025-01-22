import { Router } from "express";
import {
  getUsers,
  findUser,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

// routers
router.route("/users").get(getUsers);
router.route("/users/:userId").get(findUser);
router.route("/register").post(createUser);
router.route("/edit/:userId").put(editUser);
router.route("/delete/:userId").delete(deleteUser);

export default router;
