import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/database.js";
import wishRoutes from "./routes/wish.routes.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

app.use(express.json());

app.use("/api/wishes", wishRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});