import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const url = process.env.MONGO_DB_URL;
    const connection = await mongoose.connect(url);
    if (connection) {
      console.log("conected to db ");
    }
  } catch (error) {
    console.log("error connnect to db");
    throw error;
  }
};

export default connectToDatabase;
