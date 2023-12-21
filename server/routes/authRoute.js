import express from "express";
import {
  bookingController,
  loggedInController,
  loginController,
  registerController,
} from "../controllers/authController";
import CekToken from "../middleware/CekToken";
import imageFilter from "../middleware/multer";

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/", CekToken, loggedInController);
router.post("/login/booking", imageFilter, bookingController);

export default router;
