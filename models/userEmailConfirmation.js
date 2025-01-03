 import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userEmailConfirmation = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "users",
  },
  
  verificationString: {
    type: String,
    require: true,
  },
  
  createdAt: {
    type: Date,
    expires: 3600,
    default: Date.now(),
  },
});

//we hash the verification string prior to storing it
userEmailConfirmation.pre("save", async function (next) {
  try {
    console.log(this.verificationString);
    const salt = await bcrypt.genSalt();
    this.verificationString= await bcrypt.hash(this.verificationString, salt);
    next();
  } catch (error) {
    console.log(error.message);
  }
});

// verify the verification string when the user click on it
userEmailConfirmation.methods.verifyUniqueString = async function (verificationString) {
  const result = await bcrypt.compare(verificationString, this.verificationString);
  if (result) {
    return result;
  }
  console.log(`verificationString is verified : ${result} `);
};


export default mongoose.model("userEmailConfirmation", userEmailConfirmation);
