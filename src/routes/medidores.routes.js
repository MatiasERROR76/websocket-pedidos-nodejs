import { Router } from "express";

import {
  createMeasurer,
  deleteMeasurer,
  getMeasurer,
  getMeasurers,
  updateMeasurer,
} from "../controllers/medidores.controller.js";
const router = Router();

router.get("/medidores", getMeasurers);
router.post("/medidores", createMeasurer);
router.put("/medidores/:id", updateMeasurer);
router.delete("/medidores/:id", deleteMeasurer);
router.get("/medidores/:id", getMeasurer);

export default router;
