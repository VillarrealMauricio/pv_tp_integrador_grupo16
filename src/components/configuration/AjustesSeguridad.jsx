import { Card, ListGroup, Form, Badge, Button } from 'react-bootstrap';

const AjustesSeguridad = () => {
    
    // Función para limpiar el localStorage y recargar
    const handleRestaurarDatos = () => {
        if(window.confirm('¿Estás seguro? Esto borrará tus clientes locales y restaurará los de la API.')) {
            localStorage.removeItem('clientes_eliminados');
            localStorage.removeItem('mis_clientes_nuevos');
            alert('Base de datos restablecida. Recargando el sistema...');
            window.location.reload();
        }
    };

    return (
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

                    {/* A este le devolvemos el borde sutil */}
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

                    {/* El nuevo botón de restablecer va sin borde inferior */}
                    <ListGroup.Item className="p-4 bg-transparent border-0">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                                    <i className="fas fa-trash-restore fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1 text-danger">Restablecer Datos de Prueba</h6>
                                    <p className="text-secondary mb-0 small">Restaura los clientes de FakeStoreAPI y elimina los datos locales.</p>
                                </div>
                            </div>
                            <Button 
                                variant="outline-danger" 
                                className="rounded-pill fw-medium px-4 ms-5 ms-md-0 shadow-sm"
                                onClick={handleRestaurarDatos}
                            >
                                <i className="fas fa-redo-alt me-2"></i>Restablecer
                            </Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer className="bg-light p-3 text-center border-0">
                <small className="text-muted fw-medium"><i className="fas fa-clock me-2"></i>Última actualización de ajustes: Hoy a las 10:45 AM</small>
            </Card.Footer>
        </Card>
    );
};

export default AjustesSeguridad;