import mongoose from "mongoose";

const UserScheme = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter username"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  number: {
    type: Number,
    required: [true, "Please enter number"],
  },
  id: {
    type: String,
  },
});

const User = mongoose.model("User", UserScheme);

export default User;
