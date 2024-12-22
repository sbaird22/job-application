import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: console.log, // Enable logging for debugging
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
})();

export default sequelize;