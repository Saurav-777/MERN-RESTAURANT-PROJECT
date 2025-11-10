import express from "express";
import { send_reservation } from "../controller/reservation.js";

const router = express.Router();

// POST route for reservation
router.post("/", send_reservation);

export default router;
