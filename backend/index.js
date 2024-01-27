import express, { json } from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js";
import { authenticateConnection } from "./db/database.js";
import OperationApi from "./api/OperationApi.js";

const app = express();
const PORT = 3000;

const operationsApi = new OperationApi();

app.use(json());
app.use(cors());
app.use("/data", dataRoutes);

app.listen(PORT);
authenticateConnection();

app.get("/", async (req, res) => {
  try {
    const balance = await operationsApi.getBalance();
    res.json(balance);
  } catch (error) {
    console.log(error);
  }
});
