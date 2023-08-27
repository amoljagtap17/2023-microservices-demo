import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "10kb",
    parameterLimit: 5,
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Express and TypeScript!");
});

export { app };
