import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Middleware to protect routes (requires valid token)
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

// Controller to check current user's auth status
export const checkAuth = (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};
