const express = require("express");

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/users", protect, getUsers);

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

router.put("/make-admin", async (req, res) => {
  const user = await require("../models/User").findOneAndUpdate(
    {
      email: "harsh@gmail.com",
    },
    {
      role: "Admin",
    },
    {
      new: true,
    },
  );

  res.json(user);
});

module.exports = router;
