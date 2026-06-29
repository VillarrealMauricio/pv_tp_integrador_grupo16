import { Container, Card, Form, ListGroup, Button, Badge, Row, Col } from 'react-bootstrap';

const Configuracion = () => {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <Container className="py-4 px-4 max-w-4xl">
            <div className="mb-4 d-flex align-items-center gap-3">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-cogs text-secondary fs-4"></i>
                </div>
                <div>
                    <h2 className="fw-bold text-dark mb-0">Ajustes del Sistema</h2>
                    <p className="text-secondary mb-0">Administrá tus preferencias y la seguridad de tu cuenta.</p>
                </div>
            </div>
            
            <Row className="g-4">
                <Col lg={12}>
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
                                        <Form.Check type="switch" id="theme-switch" className="fs-4" onChange={toggleTheme} defaultChecked={localStorage.getItem('theme') === 'dark'} />
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

                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                        <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4">
                            <h6 className="fw-bold text-danger mb-0 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                                Seguridad y Privacidad
                            </h6>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                                <i className="fas fa-user-shield fs-5"></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Sesión Persistente</h6>
                                                <p className="text-secondary mb-0 small">Mantener la sesión activa por 30 días en este equipo local.</p>
                                            </div>
                                        </div>
                                        <Form.Check type="switch" id="session-switch" className="fs-4" />
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                                <i className="fas fa-lock fs-5"></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Autenticación en 2 Pasos (2FA)</h6>
                                                <p className="text-secondary mb-0 small">Agrega una capa extra de seguridad usando tu celular.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3 ms-5 ms-md-0">
                                            <Badge bg="danger" className="bg-opacity-10 text-danger rounded-pill px-3 py-2 fw-medium">Desactivado</Badge>
                                            <Button variant="outline-danger" className="rounded-pill fw-medium px-4">Configurar</Button>
                                        </div>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="p-4 bg-transparent border-light-subtle">
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-secondary bg-opacity-10 text-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                                <i className="fas fa-cloud-upload-alt fs-5"></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Copia de Seguridad (Backup)</h6>
                                                <p className="text-secondary mb-0 small">Guardar un respaldo de la configuración local en la nube.</p>
                                            </div>
                                        </div>
                                        <Button variant="light" className="border rounded-pill fw-medium px-4 text-secondary ms-5 ms-md-0 shadow-sm">
                                            <i className="fas fa-sync-alt me-2"></i>Sincronizar Ahora
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer className="bg-light p-3 text-center border-0">
                            <small className="text-muted fw-medium"><i className="fas fa-clock me-2"></i>Última actualización de ajustes: Hoy a las 10:45 AM</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Configuracion;