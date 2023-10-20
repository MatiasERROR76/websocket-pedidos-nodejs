import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Medidor } from "./Medidor.js";

export const Cliente = sequelize.define(
  "Clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rut: {
      type: DataTypes.STRING,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

Cliente.hasMany(Medidor, {
  foreignKey: "clienteId",
  sourceKey: "id",
});

Medidor.belongsTo(Cliente, {
  foreignKey: "clienteId",
  targetId: "id",
});
