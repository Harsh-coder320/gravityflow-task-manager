router.put("/make-admin/:id", protect, async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        message: "Only admins can make other admins",
      });
    }

    const User = require("../models/User");

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        role: "Admin",
      },
      {
        new: true,
      },
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User promoted to Admin successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});
