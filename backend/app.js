import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./.env" });

// Enable CORS for frontend (React)
app.use(
  cors({
    origin: ["http://localhost:5173"], // allow requests from your frontend
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/v1/reservation", reservationRouter);

// Test route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Connect to database
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
