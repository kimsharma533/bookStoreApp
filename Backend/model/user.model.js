import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    reqiured: true,
  },
  email: {
    type: String,
    reqiured: true,
    unique: true,
  },
  password: {
    type: String,
    reqiured: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
