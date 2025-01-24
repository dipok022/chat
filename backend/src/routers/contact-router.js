import { Router } from "express";

const router = Router();

// routes
router.route("contacts").get();
router.route("contacts/:contactId").get();
router.route("contact/add").post();
router.route("contact/edit/:contactId").put();
router.route("contact/delete/:contactId").delete();

export default router;
