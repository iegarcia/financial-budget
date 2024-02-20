import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../context/OperationsContext";

const DeleteModal = ({ item, show, handleClose }) => {
  const { destroyOperation } = useData();

  const handleDelete = async () => {
    try {
      await destroyOperation(item.id);
      handleClose();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete operation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Are your that you want to delete the {item.OperationType} operation
          <br />
          <strong>{item.Concept}</strong> ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
