import mongoose from 'mongoose';

const connectDB = async () => {
  const connectionString = `${process.env.MONGODB_URI}/bg-removal`;
  console.log("🚀 MongoDB URI:", connectionString); // 🟡 Debug line

  try {
    await mongoose.connect(connectionString);
    console.log('✅ MongoDB connection successful');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
};

export default connectDB;
