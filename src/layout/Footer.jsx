import { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';

const Footer = () => {
    const [showAyuda, setShowAyuda] = useState(false);

    const handleClose = () => setShowAyuda(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShowAyuda(true);
    };

    return (
        <>
            <footer className="bg-white border-top border-light-subtle pt-4 pb-2 mt-auto w-100 shadow-sm">
                <Container fluid className="px-4 px-lg-5">
                    <Row className="gy-3 mb-3">
                        
                        <Col xs={12} md={5} className="pe-lg-5">
                            <h6 className="fw-bold text-dark mb-2">
                                <i className="fas fa-layer-group text-primary me-2"></i>
                                Panel Administrativo
                            </h6>
                            <p className="text-secondary mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                                Sistema de Gestión Integral para el Control de Clientes y Monitoreo de Métricas en tiempo real. 
                            </p>
                        </Col>

                        <Col xs={12} sm={6} md={4}>
                            <h6 className="fw-bold text-dark mb-2">Institución y Soporte</h6>
                            <ul className="list-unstyled text-secondary mb-0" style={{ fontSize: '0.85rem' }}>
                                <li className="mb-2">
                                    <a href="https://maps.google.com/?q=Facultad+de+Ingeniería+UNJu" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary footer-link">
                                        <i className="fas fa-university text-primary me-2 text-opacity-75" style={{ width: '16px' }}></i>
                                        FI - UNJu <span className="text-primary text-opacity-50" style={{fontSize: '0.75rem'}}></span>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-map-marker-alt text-primary me-2 text-opacity-75" style={{ width: '16px' }}></i>
                                    Jujuy, Argentina
                                </li>
                                <li className="mb-0">
                                    <a href="#" onClick={handleShow} className="text-decoration-none fw-medium text-primary footer-link">
                                        <i className="fas fa-headset me-2 text-opacity-75" style={{ width: '16px' }}></i>
                                        Abrir ticket de ayuda
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <h6 className="fw-bold text-dark mb-2">Redes Sociales</h6>
                            <div className="d-flex gap-3 mt-2">
                                <a href="#" className="text-secondary footer-link" style={{ fontSize: '1.2rem' }}>
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-secondary footer-link" style={{ fontSize: '1.2rem' }}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-secondary footer-link" style={{ fontSize: '1.2rem' }}>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-secondary footer-link" style={{ fontSize: '1.2rem' }}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <hr className="text-light-subtle my-2" />
                    <Row className="align-items-center pt-1">
                        <Col md={6} className="text-center text-md-start mb-1 mb-md-0">
                            <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                                © {new Date().getFullYear()} Programación Visual. Todos los derechos reservados.
                            </span>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <span className="text-muted fw-medium" style={{ fontSize: '0.8rem' }}>
                                Versión 1.0.0
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <Modal show={showAyuda} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton className="border-bottom-0 pb-0">
                    <Modal.Title className="fw-bold text-dark fs-5">
                        <i className="fas fa-life-ring text-primary me-2"></i>
                        Centro de Soporte
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-3">
                    <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>
                        ¿Tenés alguna duda o encontraste un error en el sistema? Detallá tu consulta y nuestro equipo técnico lo revisará.
                    </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formAsunto">
                            <Form.Label className="fw-medium text-dark" style={{ fontSize: '0.9rem' }}>Asunto</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Problema al cargar cliente" className="shadow-sm border-light-subtle" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formMensaje">
                            <Form.Label className="fw-medium text-dark" style={{ fontSize: '0.9rem' }}>Detalle de la consulta</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Escribí todos los detalles posibles acá..." className="shadow-sm border-light-subtle" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="border-top-0 pt-0">
                    <Button variant="light" onClick={handleClose} className="rounded-pill fw-medium text-secondary border">
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="rounded-pill fw-medium px-4 shadow-sm" style={{ backgroundColor: '#0369a1', borderColor: '#0369a1' }}>
                        <i className="fas fa-paper-plane me-2"></i>
                        Enviar consulta
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Footer;