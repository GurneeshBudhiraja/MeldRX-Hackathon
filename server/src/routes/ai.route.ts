import { Router } from "express";
import { intro, getSummary } from "../controllers/llm.controller";


const router = Router()

router.get("/", intro)
router.get("/summary", getSummary)


export default router