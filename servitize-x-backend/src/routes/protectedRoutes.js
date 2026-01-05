import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile accessed",
    user: req.user,
  });
});

// Admin-only route
router.get("/admin-dashboard", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome to Admin Dashboard",
    admin: req.user,
  });
});

export default router;
