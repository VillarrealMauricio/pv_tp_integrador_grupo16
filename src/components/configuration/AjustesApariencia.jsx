import { Card, ListGroup, Form } from 'react-bootstrap';

const AjustesApariencia = ({ isDarkMode, toggleTheme }) => {
    return (
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4">
            <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4">
                <h6 className="fw-bold text-primary mb-0 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                    Apariencia y Accesibilidad
                </h6>
            </Card.Header>
            <Card.Body className="p-0">
                <ListGroup variant="flush">
                    <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-dark bg-opacity-10 text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                    <i className="fas fa-moon fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Modo Oscuro</h6>
                                    <p className="text-secondary mb-0 small">Cambia la apariencia del panel para reducir la fatiga visual.</p>
                                </div>
                            </div>
                            <Form.Check 
                                type="switch" 
                                id="theme-switch" 
                                className="fs-4" 
                                checked={isDarkMode} 
                                onChange={toggleTheme} 
                            />
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                    <i className="fas fa-magic fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Animaciones de Interfaz</h6>
                                    <p className="text-secondary mb-0 small">Activa transiciones suaves al navegar entre ventanas y modales.</p>
                                </div>
                            </div>
                            <Form.Check type="switch" id="animations-switch" className="fs-4" defaultChecked />
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default AjustesApariencia;