import { Router } from "express";
import OperationApi from "../api/OperationApi.js";

const router = Router();
const operationsApi = new OperationApi();

router.get("/", async (req, res) => {
  try {
    const operations = await operationsApi.getLatestOperations();
    res.json(operations);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const operation = {
    concept: req.body.concept,
    amount: req.body.amount,
    date: new Date(),
    operationType: req.body.type,
  };

  try {
    const newOperation = await operationsApi.addOperation(operation);
    res.json(newOperation);
  } catch (error) {
    console.log(error);
  }
});

export default router;
