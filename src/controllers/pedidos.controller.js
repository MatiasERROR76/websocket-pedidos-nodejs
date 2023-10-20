import { io } from "../app.js";
import { Pedido } from "../models/pedido.js";
export const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
    io.emit("pedidos", pedidos); // Emitir los pedidos al cliente a través del WebSocket
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido.create(req.body);
    // Emitir el nuevo pedido al cliente a través del WebSocket
    io.emit("pedidoCreado", nuevoPedido); // Emite el nuevo pedido al cliente
    res.json(nuevoPedido);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
