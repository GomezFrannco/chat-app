import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class ConnectDB {
  constructor(db) {
    this.mongoose = mongoose;
    this.connect(db);
  }
  connect(db) {
    this.mongoose.connect(db, (err) => {
      try {
        console.log({
          DB: "Connected to MongoDB",
        });
      } catch (error) {
        console.error({
          DB_Error: error.message,
        });
      }
    });
  }
}

export default new ConnectDB(process.env.MONGO_URI);
