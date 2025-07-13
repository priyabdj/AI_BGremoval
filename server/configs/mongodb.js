// mongodb.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
};

export default connectDB;
