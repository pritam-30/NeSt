import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}
