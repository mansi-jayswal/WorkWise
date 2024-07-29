import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the TypeScript interface for the user
//why extending document? :- to access the mongodb field like objectId
interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  savedPosts: string[];
}

// Creating  the user schema
const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  savedPosts: {
    type: [String],
    default: [],
    required: false,
  },
});

// Create the User model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
