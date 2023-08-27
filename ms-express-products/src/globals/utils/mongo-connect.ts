import mongoose from "mongoose";
import { logger } from "../logger";

export const mongoDBConnect = async () => {
  const MONGO_URI = process.env.MONGO_URI as string;

  try {
    await mongoose.connect(MONGO_URI);

    logger.info("Connected to MongoDb");
  } catch (err) {
    logger.error(err);
  }
};
