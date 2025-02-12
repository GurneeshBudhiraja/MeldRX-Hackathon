import { Router } from "express";
import { getSummary } from "../controllers/llm.controller.ts";


const router = Router()

router.get("/", getSummary)


export default router