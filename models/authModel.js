import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from "bcrypt";

//schema define the field and data that will be saved in the mongodb database collection
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Enter your firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Enter your lastname"],
  },
  role: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: [true, "Enter your email"],
    unique: true,
    validate: [validator.isEmail, "Enter a correct email"],
  },
  
  CV:{
    type:String,
  },
 
  password: {
    type: String,
    required: [true, "Enter a password"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  profileImage:{
    type: String,
  },
 
  profession:{
    type: String,
  },
  MentorshipRole:{
    type: String,
  },
  career:{
    type: String,
  },
  location:{
    type: String
    },
  
  Hobbies:{
    type: Array,
  },
  
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },

  verified:{
    type: Boolean,
    required: true,
    default: false,
  },
  agree:{
    type: Boolean,
    required: true,
    default: false,
  },
  mentorVerified:{
    type: Boolean,
    required: true,
    default: false,
  }
},{
  timestamps:true
});


///hashing the instance of the  password before it is save in the database
userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    console.log(err.message);
  }
});


//logging in 
userSchema.statics.login = async function (email, password) {
  //using the email enter to find the credentials of that user in the Database
  const user = await this.findOne({ email });
  // console.log(user);
  if (user) {
    if (user.verified) {
      const match = await bcrypt.compare(password, user.password);
      // console.log(match);
      if (match) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("Email has not been verified check your inbox");
  }
  throw Error("incorrect email");
};


//comparing reset new password to old password
userSchema.methods.comparePassword = async function (password) {
  try {
    const result = await bcrypt.compare(password, this.password);
    if (result) {
      return result;
    }
  } catch (err) {
    console.log(err);
  }
};

export default mongoose.model("users", userSchema);
