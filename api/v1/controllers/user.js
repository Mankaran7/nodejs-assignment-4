const serviceController = require("../services/user.js");

const getUserName = async (req, res) => {
  try {
   
    const userId = req.body.userId;
    const user = await serviceController.getUserById(userId);
    res.status(200).json({ username: user });
  } catch (err) {
    res.status(500).json({ message: "Error while fetching user" });
  }
};
module.exports={getUserName}
