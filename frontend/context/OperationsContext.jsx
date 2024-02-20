import { createContext, useContext, useEffect, useState } from "react";
import {
  addOperation,
  deleteOperation,
  getCurrentBalance,
  getData,
  updateOperation,
} from "../src/functions";

const OperationsContext = createContext();

export const useData = () => {
  const context = useContext(OperationsContext);
  if (!context) throw new Error("No Data provider");
  return context;
};
function OperationsProvider({ children }) {
  const [operations, setOperations] = useState([]);
  const [balance, setBalance] = useState(0);

  const newOperation = async (op) => {
    const operationAdded = await addOperation(op);

    setOperations((prevData) => [...prevData, operationAdded]);
  };

  const modifyOperation = async (op) => {
    try {
      await updateOperation(op);
      const newBalance = await getCurrentBalance();
      setBalance(newBalance);

      const oldOperation = operations.findIndex((o) => o.id === op.id);
      operations[oldOperation] = op;
      setOperations(operations);
    } catch (error) {
      alert(error);
    }
  };

  const destroyOperation = async (id) => {
    try {
      await deleteOperation(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function run() {
      const operationsData = await getData();
      setOperations(operationsData);
      const currentBalance = await getCurrentBalance();
      setBalance(currentBalance);
    }
    run();
  }, [operations.length]);

  return (
    <OperationsContext.Provider
      value={{
        balance,
        operations,
        newOperation,
        modifyOperation,
        destroyOperation,
      }}
    >
      {children}
    </OperationsContext.Provider>
  );
}

export default OperationsProvider;
