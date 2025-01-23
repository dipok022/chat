import { Router } from "express";

const router = Router();

// routers
router.route("/chats").get();
router.route("/chat/add").post();
router.route("/chat/delete/:chatId").delete();

export default router;
