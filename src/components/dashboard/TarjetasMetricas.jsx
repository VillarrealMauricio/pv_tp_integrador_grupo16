import { Row, Col, Card, Spinner, Badge } from 'react-bootstrap';

const TarjetasMetricas = ({ 
    cargandoClientes, totalClientes, proyectosCount, 
    tareasPendientesCount, alertasActivasCount, 
    onNavigateClientes, onShowProyectos, onShowTareas, onShowAlertas 
}) => {
    return (
        <Row className="g-4 mb-4">
            {/* clientes */}
            <Col xs={12} sm={6} lg={3}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-primary" onClick={onNavigateClientes}>
                    <Card.Body className="p-4 d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#0369a1' }}>
                                <i className="fas fa-users fs-5"></i>
                            </div>
                            <i className="fas fa-arrow-right text-primary opacity-50 fs-6"></i>
                        </div>
                        <h6 className="text-secondary mb-1 fw-medium">Clientes Activos</h6>
                        <h3 className="fw-bold text-dark mb-0">
                            {cargandoClientes ? <Spinner animation="grow" variant="primary" size="sm" /> : totalClientes}
                        </h3>
                    </Card.Body>
                </Card>
            </Col>

            {/* proyectos */}
            <Col xs={12} sm={6} lg={3}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-success" onClick={onShowProyectos}>
                    <Card.Body className="p-4 d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="bg-success bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#198754' }}>
                                <i className="fas fa-folder-open fs-5"></i>
                            </div>
                            <Badge bg="success" className="bg-opacity-10 text-success rounded-pill fw-bold">Ver todos</Badge>
                        </div>
                        <h6 className="text-secondary mb-1 fw-medium">Proyectos Activos</h6>
                        <h3 className="fw-bold text-dark mb-0">{proyectosCount}</h3>
                    </Card.Body>
                </Card>
            </Col>

            {/* tareas */}
            <Col xs={12} sm={6} lg={3}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-warning" onClick={onShowTareas}>
                    <Card.Body className="p-4 d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="bg-warning bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#ffc107' }}>
                                <i className="fas fa-clock fs-5"></i>
                            </div>
                            <Badge bg={tareasPendientesCount > 0 ? "danger" : "success"} className="rounded-pill">
                                {tareasPendientesCount} Al día
                            </Badge>
                        </div>
                        <h6 className="text-secondary mb-1 fw-medium">Tareas Pendientes</h6>
                        <h3 className="fw-bold text-dark mb-0">{tareasPendientesCount}</h3>
                    </Card.Body>
                </Card>
            </Col>

            {/* alertas */}
            <Col xs={12} sm={6} lg={3}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-danger" onClick={onShowAlertas}>
                    <Card.Body className="p-4 d-flex flex-column justify-content-center">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="bg-danger bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#dc3545' }}>
                                <i className="fas fa-exclamation-triangle fs-5"></i>
                            </div>
                            {alertasActivasCount > 0 && <div className="pulsing-dot"></div>}
                        </div>
                        <h6 className="text-secondary mb-1 fw-medium">Alertas de Sistema</h6>
                        <h3 className="fw-bold text-dark mb-0">{alertasActivasCount}</h3>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TarjetasMetricas;