const {User} = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports.userVerification = async(req, res) => {
  try{
  if (!req.session.token){
    return res.json({ status: false })
  }
  const user = await User.findById(req.session.token);
  if (!user) {
    return res.status(404).json({ status: false, message: "User not found" });
  }
  res.status(200).json({ status: true, user: user.username });
}
catch (error) {
  console.error("Verification error:", error);
  res.status(500).json({ status: false, message: "Internal server error" });
}
}