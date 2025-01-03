import mongoose from "mongoose";
import bcrypt from "bcrypt";

const resetPassword = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },
  uniqueToken: {
    type: String,
    require: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

resetPassword.pre("save", async function (next) {
  try {
    if (this.isModified("uniqueToken")) {
      const salt = await bcrypt.genSalt();
      this.uniqueToken = await bcrypt.hash(this.uniqueToken, salt);
      next();
    }
  } catch (err) {
    console.log(err.message);
  }
});

resetPassword.methods.compareUniqueToken = async function (uniqueToken) {
  const result = await bcrypt.compare(uniqueToken, this.uniqueToken);
  if (result) {
    return result;
  }
  console.log(`uniqueToken is verified : ${result} `);
};

export default mongoose.model("resetPassword", resetPassword);
