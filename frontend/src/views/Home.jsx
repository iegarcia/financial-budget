import { useEffect, useState } from "react";
import { getData } from "../functions";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Balance from "../components/Balance";

const Home = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    async function run() {
      const operationsData = await getData();
      setOperations(operationsData);
    }
    run();
  }, []);

  const validateType = (type, amount) => {
    return type === "egreso" ? (
      <td className="text-danger">{`- $${amount}`}</td>
    ) : (
      <td className="text-success">{`+ $${amount}`}</td>
    );
  };

  return (
    <>
      <Balance />
      <hr />
      <div className="d-flex justify-content-between">
        <h3>Recent Movements</h3>

        <Link to="/add">
          <Button className="btn-success mb-3">New Operation</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Concept</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {operations.map((op, i) => {
            return (
              <tr key={i}>
                <td>{new Date(op.Date).toLocaleString()}</td>
                <td>{op.Concept}</td>
                {validateType(op.OperationType, op.Amount)}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Home;
