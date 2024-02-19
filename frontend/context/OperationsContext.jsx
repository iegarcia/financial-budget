import { createContext, useContext, useEffect, useState } from "react";
import { addOperation, getData, updateOperation } from "../src/functions";

const OperationsContext = createContext();

export const useData = () => {
  const context = useContext(OperationsContext);
  if (!context) throw new Error("No Data provider");
  return context;
};
function OperationsProvider({ children }) {
  const [operations, setOperations] = useState([]);

  const newOperation = async (op) => {
    const operationAdded = await addOperation(op);

    setOperations((prevData) => [...prevData, operationAdded]);
  };

  const modifyOperation = async (op) => {
    try {
      await updateOperation(op);
      const oldOperation = operations.findIndex((o) => o.id === op.id);

      operations[oldOperation] = op;
      setOperations(operations);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    async function run() {
      const operationsData = await getData();
      setOperations(operationsData);
    }
    run();
  }, [operations.length]);

  return (
    <OperationsContext.Provider
      value={{ operations, newOperation, modifyOperation }}
    >
      {children}
    </OperationsContext.Provider>
  );
}

export default OperationsProvider;
