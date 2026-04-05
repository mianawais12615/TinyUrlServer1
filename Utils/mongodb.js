import mongoose from "mongoose";

export const ConnectMongoDb = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MongoDB URI:", process.env.MONGODB_URI ? "URI is set" : "URI is MISSING!");
    
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✓ MongoDB connected successfully");
  } catch (err) {
    console.error("✗ DB Connection Error:", err.message);
    console.error("Full error:", err);
    console.error("\nTroubleshooting:");
    console.error("1. Check MongoDB Atlas Network Access settings");
    console.error("2. Add your IP address or allow access from anywhere (0.0.0.0/0)");
    console.error("3. Verify your cluster is running");
    process.exit(1);
  }
};
