import { Card, ListGroup, Form } from 'react-bootstrap';

const AjustesNotificaciones = () => {
    return (
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4">
            <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4">
                <h6 className="fw-bold text-success mb-0 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                    Notificaciones
                </h6>
            </Card.Header>
            <Card.Body className="p-0">
                <ListGroup variant="flush">
                    <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                    <i className="fas fa-volume-up fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Alertas Sonoras</h6>
                                    <p className="text-secondary mb-0 small">Emitir un sonido cuando llegue una notificación crítica del sistema.</p>
                                </div>
                            </div>
                            <Form.Check type="switch" id="sound-switch" className="fs-4" defaultChecked />
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                    <i className="fas fa-envelope-open-text fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Resumen Semanal por Correo</h6>
                                    <p className="text-secondary mb-0 small">Recibir un reporte automático con las métricas de alta de clientes.</p>
                                </div>
                            </div>
                            <Form.Check type="switch" id="email-switch" className="fs-4" />
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default AjustesNotificaciones;