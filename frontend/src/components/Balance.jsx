import { useEffect, useState } from "react";
import { getCurrentBalance } from "../functions";
import { useData } from "../../context/OperationsContext";

const Balance = () => {
  const [money, setMoney] = useState(0);
  const { operations } = useData();

  useEffect(() => {
    async function run() {
      const total = await getCurrentBalance();
      setMoney(total);
    }
    run();
  }, [operations.length]);

  return (
    <div className="jumbotron">
      <p className="lead">Total Amount</p>
      <h2 className="display-4">$ {money}</h2>
    </div>
  );
};

export default Balance;
