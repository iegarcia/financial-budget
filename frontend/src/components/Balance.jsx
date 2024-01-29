import { useEffect, useState } from "react";
import { getCurrentBalance } from "../functions";

const Balance = () => {
  const [money, setMoney] = useState(0);

  useEffect(() => {
    async function run() {
      const total = await getCurrentBalance();
      setMoney(total);
    }
    run();
  }, []);

  return (
    <div className="jumbotron">
      <p className="lead">Total Amount</p>
      <h2 className="display-4">$ {money}</h2>
    </div>
  );
};

export default Balance;
