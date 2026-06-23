import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';

const DashboardPrincipal = () => {
    return (
        <Container fluid className="py-4 px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold text-dark mb-0">Resumen del Sistema</h2>
                    <p className="text-secondary mb-0">Bienvenido al panel de administración.</p>
                </div>
            </div>

            <Row className="g-4 mb-4">
                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', color: '#0369a1' }}>
                                <i className="fas fa-users fs-4"></i>
                            </div>
                            <div>
                                <h6 className="text-secondary mb-1 fw-medium">Total Clientes</h6>
                                <h3 className="fw-bold text-dark mb-0">0</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex align-items-center">
                            <div className="bg-success bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', color: '#198754' }}>
                                <i className="fas fa-folder-open fs-4"></i>
                            </div>
                            <div>
                                <h6 className="text-secondary mb-1 fw-medium">Proyectos</h6>
                                <h3 className="fw-bold text-dark mb-0">0</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex align-items-center">
                            <div className="bg-warning bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', color: '#ffc107' }}>
                                <i className="fas fa-clock fs-4"></i>
                            </div>
                            <div>
                                <h6 className="text-secondary mb-1 fw-medium">Pendientes</h6>
                                <h3 className="fw-bold text-dark mb-0">0</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4 d-flex align-items-center">
                            <div className="bg-danger bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '60px', height: '60px', color: '#dc3545' }}>
                                <i className="fas fa-exclamation-triangle fs-4"></i>
                            </div>
                            <div>
                                <h6 className="text-secondary mb-1 fw-medium">Alertas</h6>
                                <h3 className="fw-bold text-dark mb-0">0</h3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card className="border-0 shadow-sm rounded-4">
                        <Card.Header className="bg-white border-bottom-0 pt-4 pb-0 px-4">
                            <h5 className="fw-bold text-dark mb-0">Actividad Reciente</h5>
                        </Card.Header>
                        <Card.Body className="p-4">
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
                                        <td className="py-3 fw-medium text-dark">Noel Ramos</td>
                                        <td className="py-3 text-secondary">Actualización de inventario</td>
                                        <td className="py-3 text-secondary">Hace 2 horas</td>
                                        <td className="py-3"><Badge bg="success" className="fw-normal px-2 py-1 rounded-pill">Completado</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark">Sergio Soza</td>
                                        <td className="py-3 text-secondary">Nuevo registro de cliente</td>
                                        <td className="py-3 text-secondary">Hace 5 horas</td>
                                        <td className="py-3"><Badge bg="success" className="fw-normal px-2 py-1 rounded-pill">Completado</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark">Sistema</td>
                                        <td className="py-3 text-secondary">Backup automatico</td>
                                        <td className="py-3 text-secondary">Ayer, 23:00</td>
                                        <td className="py-3"><Badge bg="warning" text="dark" className="fw-normal px-2 py-1 rounded-pill">En proceso</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardPrincipal;