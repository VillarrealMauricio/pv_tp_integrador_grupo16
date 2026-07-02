import { Modal, Button } from 'react-bootstrap';

const ModalEliminarCliente = ({ show, onHide, onConfirm, firstname, lastname }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold text-dark">
                    <i className="fa-solid fa-triangle-exclamation text-danger me-2"></i>
                    Confirmar eliminación
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-secondary">
                ¿Estás seguro que querés eliminar a <strong className="text-dark">{firstname} {lastname}</strong>? Esta acción no se puede deshacer.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" className="rounded-pill fw-semibold" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" className="rounded-pill fw-semibold" onClick={onConfirm}>
                    <i className="fa-solid fa-trash me-2"></i> Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEliminarCliente;