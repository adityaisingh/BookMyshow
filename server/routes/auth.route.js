import express from "express";
import {
  google,
  login,
  logout,
  signup,
  promoteToAdmin,
} from "../controllers/auth.controller.js";

import { isAdmin } from "../Middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/google", google);
router.put("/promote/:userId", isAdmin, promoteToAdmin);

export default router;
