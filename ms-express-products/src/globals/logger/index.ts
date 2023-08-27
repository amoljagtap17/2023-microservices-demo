import winston, { format } from "winston";

const { combine, timestamp, prettyPrint } = format;

const logger = winston.createLogger({
  level: "info",
  // format: winston.format.json(),
  format: combine(timestamp(), prettyPrint()),
  defaultMeta: { service: "ms-express-products" },
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export { logger };
