import { Router } from "express";
import {
  DeleteClient,
  UpdateClient,
  createClient,
  getClient,
  getClientMeasures,
  getClients,
  getIdsClients,
} from "../controllers/clientes.controller.js";
const router = Router();

router.get("/clientes", getClients);
router.post("/clientes", createClient);
router.put("/clientes/:id", UpdateClient);
router.delete("/clientes/:id", DeleteClient);
router.get("/clientes/:id", getClient);
router.get("/clientes/:id/medidores", getClientMeasures);
router.get("/ids", getIdsClients);

export default router;
