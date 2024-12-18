import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
  logging: false, // Disable logging in console
});

export default sequelize;
