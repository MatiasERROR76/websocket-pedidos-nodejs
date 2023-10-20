import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Medidor = sequelize.define(
  "Medidores",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
  },
  { timestamps: true }
);
