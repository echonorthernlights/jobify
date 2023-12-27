import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import jobRouter from "./routes/jobRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/jobs", jobRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}...`);
});
