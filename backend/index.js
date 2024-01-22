import express, { json } from "express";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes.js";
import { authenticateConnection } from "./db/database.js";

const app = express();
const PORT = 3000;

app.use(json());
app.use(cors());
app.use("/data", dataRoutes);

app.listen(PORT);
authenticateConnection();

app.get("/", (req, res) => {
  res.send("hello");
});
