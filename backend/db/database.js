import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const db = new Sequelize(
  process.env.DB_TABLE,
  process.env.DB_USER,
  process.env.DB.PASS,
  {
    host: process.env.DB_HOST,
    port: 3307,
    dialect: "mysql",
  }
);

export const authenticateConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error", error);
  }
};
