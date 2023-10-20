import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import clienteRoutes from "./routes/clientes.routes.js";
import medidorRoutes from "./routes/medidores.routes.js";
import pedidosRoutes from "./routes/pedidos.routes.js";
import { getPedidos } from "./controllers/pedidos.controller.js";
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", async (socket) => {
  console.log("Cliente conectado");

  try {
    const pedidos = await getPedidos();
    socket.emit("pedidos", pedidos);

    socket.on("message", (data) => {
      console.log(data);
      socket.broadcast.emit("message");
      io.emit("message", {
        data,
        from: socket.id.slice(6),
      });
    });
  } catch (error) {
    console.error("Error al obtener pedidos:", error);
  }
});

server.listen(4000);
console.log("server on port: 4000");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(clienteRoutes);
app.use(medidorRoutes);
app.use(pedidosRoutes);

export default app;
export { io }; // Exporta la instancia de io
