import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useData } from "../../context/OperationsContext";

const UpdateOperation = ({ item, show, onHide }) => {
  const [operation, setOperation] = useState({
    Concept: "",
    Amount: 0,
    Date: "",
    OperationType: "",
  });

  const { modifyOperation } = useData();

  useEffect(() => {
    if (item) {
      setOperation({
        id: item.id,
        Concept: item.Concept,
        Amount: item.Amount,
        Date: item.Date,
        OperationType: item.OperationType,
      });
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await modifyOperation(operation);
      onHide();
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setOperation({ ...operation, [name]: value });
  };

  return (
    <>
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header>
          <Offcanvas.Title>Update Operation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!item ? (
            <Spinner variant="dark" animation="border" />
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label> Date</Form.Label>
                <Form.Control
                  value={new Date(operation.Date).toLocaleString()}
                  onChange={handleChange}
                  type="text"
                  name="Date"
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Concept</Form.Label>
                <Form.Control
                  value={operation.Concept}
                  onChange={handleChange}
                  name="Concept"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  value={operation.Amount}
                  onChange={handleChange}
                  name="Amount"
                  type="text"
                  placeholder="100,00"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Type</Form.Label>
                <h5
                  className={
                    operation && operation.OperationType == "ingreso"
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                >
                  {operation.OperationType.toUpperCase()}
                </h5>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPassword"> */}
              <Button variant="primary" type="submit">
                Update
              </Button>
              &nbsp; &nbsp;
              <Button variant="secondary" type="button" onClick={onHide}>
                Cancel
              </Button>
              {/* </Form.Group> */}
            </Form>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UpdateOperation;
