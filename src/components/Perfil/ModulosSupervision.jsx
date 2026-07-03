import { Card, Badge, ProgressBar } from 'react-bootstrap';

const ModulosSupervision = () => {
    return (
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
    );
};

export default ModulosSupervision;