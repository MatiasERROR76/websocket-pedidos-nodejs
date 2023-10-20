import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_evo", "postgres", "Admin1991", {
  host: "localhost",
  dialect: "postgres",
});

export { sequelize };
