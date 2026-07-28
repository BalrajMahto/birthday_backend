import express from "express";
import { createWish } from "../controllers/wish.controller.js";

const router = express.Router();

router.post("/", createWish);

export default router;