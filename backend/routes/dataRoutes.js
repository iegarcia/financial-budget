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
  const addOperation = {
    Concept: req.body.concept,
    Amount: req.body.amount,
    Date: new Date(),
    OperationType: req.body.type,
  };
  console.log(addOperation);

  try {
    const newOperation = await operationsApi.addOperation(addOperation);
    res.json(newOperation);
  } catch (error) {
    console.log(error);
  }
});

export default router;
