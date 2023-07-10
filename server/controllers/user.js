import mongoose from "mongoose";
import User from "../models/user.js";

// create user
export const createUser = async (req, res) => {
  const { userName, email, number } = req.body;
  try {
    if (userName && email && number) {
      const newUser = new User({
        userName,
        email,
        number,
      });

      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } else {
      res.status(400).json({ message: "Please provide all required fields" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get User
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get UserById
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get UserById
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, number } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No user exist with id: ${id}` });
    }

    const updateUser = {
      userName,
      email,
      number,
      _id: id,
    };

    const user = await User.findByIdAndUpdate(id, updateUser, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
