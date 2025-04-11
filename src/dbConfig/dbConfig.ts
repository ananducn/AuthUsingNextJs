import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log("MongoDB connection error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}
