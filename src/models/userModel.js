import mongoose from "mongoose"; // Erase if already required
import bcryptjs from 'bcryptjs'

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user"
  }
});

userSchema.pre("save", async function (next) {
  const user = this;
  // Only hash the password if it has been modified or is new
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);

  next();
});

userSchema.methods.comparePassword = async function (password) {
  const user = this;
  const compare = await bcryptjs.compare(password, user.password);
  return compare;
};

//Export the model
const User = mongoose.model("User", userSchema)

export default User