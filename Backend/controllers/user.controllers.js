const UserModel = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || !req.file) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }
    const newUser = new UserModel({
      name,
      email,
      password,
      image: req.file.filename,
    });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User registered successfully.",
      user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        image: savedUser.image,
      },
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ msg: users });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error." });
  }
};

module.exports = { register, getUsers };
