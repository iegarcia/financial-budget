import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { updateOperation } from "../functions";

const UpdateOperation = ({ item, show, onHide }) => {
  const [operation, setOperation] = useState({
    concept: "",
    amount: 0,
    date: "",
  });
  useEffect(() => {
    if (item) {
      setOperation({
        id: item.id,
        Concept: item.Concept,
        Amount: item.Amount,
        Date: new Date(item.Date).toISOString().split("T")[0],
      });
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateOperation(operation);
      alert("Actualizado!");
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
          {!show ? (
            <Spinner variant="dark" animation="border" />
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label> Date</Form.Label>
                <Form.Control
                  value={operation.Date}
                  onChange={handleChange}
                  type="date"
                  name="Date"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Concept</Form.Label>
                <Form.Control
                  value={operation.Concept}
                  onChange={handleChange}
                  name="Concept"
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  value={Number(operation.Amount).toLocaleString()}
                  onChange={handleChange}
                  name="Amount"
                  type="text"
                  placeholder="100,00"
                  required
                />
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
