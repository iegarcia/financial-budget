import { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Balance from "../components/Balance";
import AddOperation from "../components/AddOperation";
import Button from "react-bootstrap/esm/Button";
import UpdateOperation from "../components/UpdateOperation";
import { useData } from "../../context/OperationsContext";
import DeleteModal from "../components/DeleteModal";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { operations } = useData();

  const validateType = (type, amount) => {
    return type === "egreso" ? (
      <td className="text-danger">{`- $${Number(amount).toLocaleString(
        "es-AR",
        { currency: "ARS", style: "decimal", minimumFractionDigits: 2 }
      )}`}</td>
    ) : (
      <td className="text-success">{`+ $${Number(amount).toLocaleString(
        "es-AR",
        { currency: "ARS", style: "decimal", minimumFractionDigits: 2 }
      )}`}</td>
    );
  };

  const handleEdit = (op) => {
    setSelectedItem(op);
    setShow(true);
  };
  const handleDelete = (op) => {
    setSelectedItem(op);
    setShowDelete(true);
  };

  return (
    <>
      <Balance />
      <hr />

      <AddOperation />
      <br />
      <h3>Last movements</h3>
      {operations.length <= 0 ? (
        <h3 className="text-center alert alert-info">
          The movements you add, will appear here
        </h3>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Concept</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((op, i) => {
              return (
                <tr key={i}>
                  <td>{new Date(op.Date).toLocaleString()}</td>

                  <td>{op.Concept}</td>
                  {validateType(op.OperationType, op.Amount)}
                  <td>{op.OperationType}</td>
                  <td>
                    <Button
                      className="btn btn-warning"
                      onClick={() => handleEdit(op)}
                    >
                      Editar
                    </Button>{" "}
                    <Button
                      className="btn btn-danger"
                      onClick={() => handleDelete(op)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <UpdateOperation
        item={selectedItem}
        show={show}
        onHide={() => setShow(false)}
      />
      {selectedItem !== null ? (
        <DeleteModal
          show={showDelete}
          handleClose={() => setShowDelete(false)}
          item={selectedItem}
        />
      ) : null}
    </>
  );
};

export default Home;
