import { Router } from "express";
import { discoveryController, ehrCardController } from "../controllers/cds.controller";


const router = Router()


// Discovery endpoint
router.get("/", discoveryController)


// To show card on individual patient
router.post("/:id", ehrCardController)


export default router;