const user = require("../models/User");

const updateUserData = async (req, res) => {
  try {
    const userId = req.userId;
    const updates = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true }
    ).select("-password"); // Don't return password

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "User data updated successfully",
      user,
    });
  } catch (err) {
    console.error("Update error", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = updateUserData;
