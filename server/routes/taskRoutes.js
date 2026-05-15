const express = require("express");

const {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", protect, adminOnly, createTask);

router.get("/", protect, getTasks);

router.put("/:id", protect, updateTaskStatus);

router.delete("/:id", protect, adminOnly, deleteTask);

module.exports = router;
