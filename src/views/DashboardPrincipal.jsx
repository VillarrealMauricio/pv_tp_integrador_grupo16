import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Table, Badge, Spinner, ProgressBar } from 'react-bootstrap';

const DashboardPrincipal = () => {
    const navigate = useNavigate();

    const [totalClientes, setTotalClientes] = useState(0);
    const [cargandoClientes, setCargandoClientes] = useState(true);

    useEffect(() => {
        const fetchMeticas = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (response.ok) {
                    const data = await response.json();
                    setTotalClientes(data.length);
                }
            } catch (error) {
                console.error("Error cargando métricas:", error);
            } finally {
                setCargandoClientes(false);
            }
        };

        fetchMeticas();
    }, []);

    return (
        <Container fluid className="py-4 px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-0">Resumen del Sistema</h2>
                    <p className="text-secondary mb-0">Monitoreo global y atajos rápidos.</p>
                </div>
            </div>

            <Row className="g-4 mb-4">
                <Col xs={12} sm={6} lg={3}>
                    <Card 
                        className="border-0 shadow-sm rounded-4 h-100" 
                        onClick={() => navigate('/clientes')}
                        style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(3, 105, 161, 0.15)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}
                    >
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '55px', height: '55px', color: '#0369a1' }}>
                                    <i className="fas fa-users fs-4"></i>
                                </div>
                                <i className="fas fa-arrow-right text-primary opacity-50"></i>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Clientes Activos</h6>
                            <h3 className="fw-bold text-dark mb-0">
                                {cargandoClientes ? <Spinner animation="grow" variant="primary" size="sm" /> : totalClientes}
                            </h3>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center mb-2">
                                <div className="bg-success bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '55px', height: '55px', color: '#198754' }}>
                                    <i className="fas fa-folder-open fs-4"></i>
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Proyectos Activos</h6>
                            <h3 className="fw-bold text-dark mb-0">42</h3>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center mb-2">
                                <div className="bg-warning bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '55px', height: '55px', color: '#ffc107' }}>
                                    <i className="fas fa-clock fs-4"></i>
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Tareas Pendientes</h6>
                            <h3 className="fw-bold text-dark mb-0">15</h3>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center mb-2">
                                <div className="bg-danger bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '55px', height: '55px', color: '#dc3545' }}>
                                    <i className="fas fa-exclamation-triangle fs-4"></i>
                                </div>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Alertas de Sistema</h6>
                            <h3 className="fw-bold text-dark mb-0">3</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4">
                <Col xs={12} lg={8}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold text-dark mb-0">
                                <i className="fas fa-history text-secondary me-2"></i>
                                Registro de Actividad
                            </h5>
                        </Card.Header>
                        <Card.Body className="p-4 pt-0">
                            <Table responsive hover className="mb-0 align-middle">
                                <thead className="text-secondary">
                                    <tr>
                                        <th className="fw-medium border-bottom pb-3">Usuario</th>
                                        <th className="fw-medium border-bottom pb-3">Acción</th>
                                        <th className="fw-medium border-bottom pb-3">Fecha</th>
                                        <th className="fw-medium border-bottom pb-3">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark">
                                            <i className="fas fa-user-astronaut text-primary me-2 opacity-75"></i>
                                            Mauricio Villarreal
                                        </td>
                                        <td className="py-3 text-secondary">Alta de nuevo cliente (#128)</td>
                                        <td className="py-3 text-secondary">Hace 10 min</td>
                                        <td className="py-3">
                                            <Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="py-3 fw-medium text-dark">
                                            <i className="fas fa-code text-primary me-2 opacity-75"></i>
                                            Noel Chiliguay
                                        </td>
                                        <td className="py-3 text-secondary">Actualización masiva de inventario</td>
                                        <td className="py-3 text-secondary">Hace 1 hora</td>
                                        <td className="py-3">
                                            <Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="py-3 fw-medium text-dark">
                                            <i className="fas fa-laptop-code text-primary me-2 opacity-75"></i>
                                            Franco Sanchez
                                        </td>
                                        <td className="py-3 text-secondary">Exportación de métricas a Excel</td>
                                        <td className="py-3 text-secondary">Hace 3 horas</td>
                                        <td className="py-3">
                                            <Badge bg="warning" className="bg-opacity-10 text-warning fw-bold px-3 py-2 rounded-pill">En proceso</Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="py-3 fw-medium text-dark">
                                            <i className="fas fa-robot text-secondary me-2 opacity-75"></i>
                                            Sistema Automático
                                        </td>
                                        <td className="py-3 text-secondary">Sincronización con FakeStore API</td>
                                        <td className="py-3 text-secondary">Hace 5 horas</td>
                                        <td className="py-3">
                                            <Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark">
                                            <i className="fas fa-terminal text-primary me-2 opacity-75"></i>
                                            Sergio Soza
                                        </td>
                                        <td className="py-3 text-secondary">Intento de borrado de registro maestro</td>
                                        <td className="py-3 text-secondary">Ayer, 15:45</td>
                                        <td className="py-3">
                                            <Badge bg="danger" className="bg-opacity-10 text-danger fw-bold px-3 py-2 rounded-pill">Rechazado</Badge>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="py-3 fw-medium text-dark">
                                            <i className="fas fa-user-astronaut text-primary me-2 opacity-75"></i>
                                            Mauricio Villarreal
                                        </td>
                                        <td className="py-3 text-secondary">Modificación de permisos de usuario</td>
                                        <td className="py-3 text-secondary">Ayer, 10:30</td>
                                        <td className="py-3">
                                            <Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} lg={4}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4">
                            <h5 className="fw-bold text-dark mb-0">
                                <i className="fas fa-server text-secondary me-2"></i>
                                Estado del Servidor
                            </h5>
                        </Card.Header>
                        <Card.Body className="p-4 d-flex flex-column gap-4">
                            
                            <div>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-medium text-secondary" style={{fontSize: '0.9rem'}}>Almacenamiento (SSD)</span>
                                    <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>78%</span>
                                </div>
                                <ProgressBar variant="primary" now={78} style={{ height: '8px' }} />
                                <small className="text-muted mt-1 d-block">390 GB usados de 500 GB</small>
                            </div>

                            <div>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-medium text-secondary" style={{fontSize: '0.9rem'}}>Carga de Memoria RAM</span>
                                    <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>45%</span>
                                </div>
                                <ProgressBar variant="success" now={45} style={{ height: '8px' }} />
                                <small className="text-muted mt-1 d-block">14.4 GB usados de 32.0 GB</small>
                            </div>

                            <div>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-medium text-secondary" style={{fontSize: '0.9rem'}}>Carga de CPU</span>
                                    <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>92%</span>
                                </div>
                                <ProgressBar variant="danger" animated now={92} style={{ height: '8px' }} />
                                <small className="text-danger mt-1 d-block fw-medium"><i className="fas fa-exclamation-circle me-1"></i>Pico de procesamiento detectado</small>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default DashboardPrincipal;