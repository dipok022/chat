import { Router } from "express";
import {
  getContacts,
  findContact,
  addContact,
  deleteContact,
} from "../controllers/contact_controller.js";

const router = Router();

// routes
router.route("contacts").get(getContacts);
router.route("contacts/:contactId").get(findContact);
router.route("contact/add").post(addContact);
router.route("contact/delete/:contactId").delete(deleteContact);

export default router;
