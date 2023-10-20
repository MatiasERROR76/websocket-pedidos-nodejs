import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pedido = sequelize.define(
  "Pedidos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.STRING,
    },
    costo: {
      type: DataTypes.STRING,
    },
    tiempo: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);
