import express from "express";
import { createPedido, getPedidos } from "../controllers/pedidos.controller.js";

const router = express.Router();

router.post("/pedidos", createPedido);
router.get("/pedidos", getPedidos);

export default router;
