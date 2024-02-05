import { createContext, useContext, useState } from "react";

const OperationsContext = createContext();

export const useData = () => {
  const context = useContext(OperationsContext);
  if (!context) throw new Error("No Data provider");
  return context;
};
function OperationsProvider({ children }) {
  const [operations, setOperations] = useState([]);

  const newOperation = (op) => {
    setOperations([...operations, op]);
  };

  return (
    <OperationsContext.Provider value={{ operations, newOperation }}>
      {children}
    </OperationsContext.Provider>
  );
}

export default OperationsProvider;
