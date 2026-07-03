import { Card, Row, Col } from 'react-bootstrap';

const MetricasActividad = () => {
    return (
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
    );
};

export default MetricasActividad;