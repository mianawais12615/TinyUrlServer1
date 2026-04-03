import mongoose from "mongoose";

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✓ MongoDB connected successfully");
  } catch (err) {
    console.error("✗ DB Connection Error:", err.message);
    process.exit(1);
  }
};
