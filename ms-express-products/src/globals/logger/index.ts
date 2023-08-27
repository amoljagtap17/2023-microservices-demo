import * as dotenv from "dotenv";
import winston, { format, transports } from "winston";
import "winston-mongodb";

dotenv.config();

const { combine, timestamp, prettyPrint } = format;

const db = process.env.MONGO_LOGS_URI as string;

const logger = winston.createLogger({
  level: "info",
  // format: winston.format.json(),
  format: combine(timestamp(), prettyPrint()),
  defaultMeta: { service: "ms-express-products" },
  transports: [
    new transports.MongoDB({
      level: "error",
      db,
      collection: "ms-express-products-logs",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export { logger };
