import * as dotenv from "dotenv";
import http from "http";
import { app } from "./app";
import { logger } from "./globals/logger";
import { mongoDBConnect } from "./globals/utils/mongo-connect";

const start = async () => {
  dotenv.config();

  const PORT = 3000;

  const server = http.createServer(app);

  await mongoDBConnect();

  server.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}/`);
  });

  process.on("SIGTERM", () => {
    logger.info("SIGTERM signal received: closing HTTP server");

    server.close(() => {
      logger.info("HTTP server closed");
    });
  });
};

start();
