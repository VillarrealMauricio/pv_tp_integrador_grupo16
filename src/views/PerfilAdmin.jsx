import { useContext } from 'react';
import { Container, Row, Col, Card, Badge, ListGroup, ProgressBar } from 'react-bootstrap';
import { AdminContext } from '../context/AdminContext';

const PerfilAdmin = () => {
    const { admin } = useContext(AdminContext);

    const nombreAdmin = admin?.nombre || "Usuario Invitado";
    const sectorAdmin = admin?.sector || "Gerencia";
    const getPrivilegios = (sector) => {
        const sectorMinuscula = (sector || '').toLowerCase();
        
        if (sectorMinuscula.includes('soporte')) {
            return { 
                color: 'info', 
                icono: 'fas fa-tools', 
                texto: 'Soporte Técnico (Acceso Nivel 2)' 
            };
        } else if (sectorMinuscula.includes('gerencia')) {
            return { 
                color: 'success', 
                icono: 'fas fa-shield-alt', 
                texto: 'Control Total (Root / Admin)' 
            };
        } else {
            return { 
                color: 'secondary', 
                icono: 'fas fa-user-lock', 
                texto: 'Acceso Estándar (Solo Lectura)' 
            };
        }
    };

    const privilegios = getPrivilegios(sectorAdmin);

    return (
        <Container className="py-4 px-4">
            <div className="mb-4 d-flex align-items-center gap-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', color: '#0369a1' }}>
                    <i className="fas fa-user-shield fs-4"></i>
                </div>
                <div>
                    <h2 className="fw-bold text-dark mb-0">Mi Perfil Administrativo</h2>
                    <p className="text-secondary mb-0">Credenciales oficiales, nivel de acceso y rendimiento en el sistema.</p>
                </div>
            </div>

            <Row className="g-4">
                <Col xs={12} lg={5}>
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4 h-100">
                        <div style={{ height: '140px', background: 'linear-gradient(45deg, #0369a1, #0ea5e9)' }} className="position-relative">
                            <i className="fas fa-code position-absolute opacity-10 text-white" style={{ fontSize: '8rem', right: '1rem', top: '1rem' }}></i>
                        </div>
                        
                        <Card.Body className="text-center position-relative pt-0 px-4 pb-4">
                            <div className="rounded-circle bg-white shadow d-flex align-items-center justify-content-center mx-auto border border-4 border-card-bg" 
                                 style={{ width: '110px', height: '110px', marginTop: '-55px', zIndex: 2, position: 'relative' }}>
                                <i className="fas fa-user-astronaut text-primary" style={{ fontSize: '3rem' }}></i>
                            </div>

                            <h3 className="fw-bold text-dark mt-3 mb-1">{nombreAdmin}</h3>
                            <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold text-uppercase mb-4" style={{ fontSize: '0.8rem' }}>
                                <i className="fas fa-briefcase me-2"></i>{sectorAdmin}
                            </Badge>

                            <ListGroup variant="flush" className="text-start border-top pt-2">
                                <ListGroup.Item className="py-3 bg-transparent border-light-subtle d-flex align-items-center gap-3">
                                    <div className="bg-light text-secondary rounded-circle d-flex align-items-center justify-content-center border" style={{ width: '38px', height: '38px' }}>
                                        <i className="fas fa-at"></i>
                                    </div>
                                    <div>
                                        <small className="d-block text-secondary fw-medium fs-7">USUARIO DE RED</small>
                                        <code className="text-dark fw-bold bg-light px-2 py-1 rounded border">@{nombreAdmin.toLowerCase().replace(/\s/g, '_')}</code>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="py-3 bg-transparent border-light-subtle d-flex align-items-center gap-3">
                                    <div className="bg-light text-secondary rounded-circle d-flex align-items-center justify-content-center border" style={{ width: '38px', height: '38px' }}>
                                        <i className="fas fa-envelope-shield"></i>
                                    </div>
                                    <div>
                                        <small className="d-block text-secondary fw-medium fs-7">CORREO DE RECUPERACIÓN</small>
                                        <span className="text-dark fw-semibold">{nombreAdmin.toLowerCase().replace(/\s/g, '')}@empresa.com</span>
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item className="py-3 bg-transparent border-0 d-flex align-items-center gap-3">
                                    <div className={`bg-${privilegios.color} bg-opacity-10 text-${privilegios.color} rounded-circle d-flex align-items-center justify-content-center border border-${privilegios.color} border-opacity-25`} style={{ width: '38px', height: '38px' }}>
                                        <i className="fas fa-key"></i>
                                    </div>
                                    <div>
                                        <small className="d-block text-secondary fw-medium fs-7">NIVEL DE PRIVILEGIOS</small>
                                        <span className={`text-${privilegios.color} fw-bold d-flex align-items-center gap-1`}>
                                            <i className={privilegios.icono}></i> {privilegios.texto}
                                        </span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} lg={7}>
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                        <Card.Header className="bg-white border-bottom-0 pt-4 px-4">
                            <h5 className="fw-bold text-dark mb-0">
                                <i className="fas fa-chart-line text-secondary me-2"></i>Métricas de Actividad Personal
                            </h5>
                        </Card.Header>
                        <Card.Body className="p-4 pt-2">
                            <Row className="g-3 text-center">
                                <Col xs={6} md={4}>
                                    <div className="p-3 bg-light rounded-3 border">
                                        <i className="fas fa-user-plus text-primary fs-4 mb-2"></i>
                                        <h4 className="fw-bold text-dark mb-0">12</h4>
                                        <small className="text-muted fw-medium">Altas de Clientes</small>
                                    </div>
                                </Col>
                                <Col xs={6} md={4}>
                                    <div className="p-3 bg-light rounded-3 border">
                                        <i className="fas fa-check-double text-success fs-4 mb-2"></i>
                                        <h4 className="fw-bold text-dark mb-0">85%</h4>
                                        <small className="text-muted fw-medium">Tareas Resueltas</small>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div className="p-3 bg-light rounded-3 border">
                                        <i className="fas fa-terminal text-warning fs-4 mb-2"></i>
                                        <h4 className="fw-bold text-dark mb-0">146</h4>
                                        <small className="text-muted fw-medium">Commits en Git</small>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                        <Card.Header className="bg-white border-bottom-0 pt-4 px-4">
                            <h5 className="fw-bold text-dark mb-0">
                                <i className="fas fa-folder-open text-secondary me-2"></i>Módulos Bajo tu Supervisión
                            </h5>
                        </Card.Header>
                        <Card.Body className="p-4 pt-2">
                            <div className="d-flex flex-column gap-4">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-bold text-dark d-flex align-items-center gap-2">
                                            <i className="fas fa-shopping-cart text-primary"></i> E-commerce Open Market
                                        </span>
                                        <Badge bg="primary" className="rounded-pill px-3">85% Completado</Badge>
                                    </div>
                                    <ProgressBar variant="primary" now={85} style={{ height: '8px' }} className="rounded-pill" />
                                    <small className="text-muted d-block mt-1 fw-medium">Estado: Fase final de integración y pruebas de API externa.</small>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-bold text-dark d-flex align-items-center gap-2">
                                            <i className="fas fa-shield-alt text-warning"></i> Módulo de Seguridad y Login
                                        </span>
                                        <Badge bg="success" className="rounded-pill px-3">100% Estable</Badge>
                                    </div>
                                    <ProgressBar variant="success" now={100} style={{ height: '8px' }} className="rounded-pill" />
                                    <small className="text-muted d-block mt-1 fw-medium">Estado: Validaciones completadas y sincronizadas con LocalStorage.</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PerfilAdmin;