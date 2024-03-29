import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { addOperation } from "../functions";
import { useData } from "../../context/OperationsContext";

const AddOperation = () => {
  const [operation, setOperation] = useState({
    concept: "",
    amount: 0,
    type: "",
  });

  const { newOperation } = useData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newOperation(operation);
      e.target.reset();
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setOperation({ ...operation, [name]: value });
  };

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add new operation</Accordion.Header>
          <Accordion.Body>
            <Form
              className="d-flex justify-content-between"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  onChange={handleChange}
                  name="concept"
                  type="text"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  onChange={handleChange}
                  name="amount"
                  type="text"
                  placeholder="100,00"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Select
                  onChange={handleChange}
                  name="type"
                  aria-label="Default select example"
                  required
                >
                  <option defaultValue hidden>
                    Select the operation
                  </option>
                  <option value="ingreso">Ingreso</option>
                  <option value="egreso">Egreso</option>
                </Form.Select>
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword"> */}
              <Button variant="primary" type="submit">
                Add
              </Button>
              {/* </Form.Group> */}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AddOperation;
