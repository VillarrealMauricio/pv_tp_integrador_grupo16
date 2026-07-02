import { Card, ProgressBar } from 'react-bootstrap';

const EstadoServidor = ({ alertasActivasCount }) => {
    return (
        <Card className="border-0 shadow-sm rounded-4 h-100">
            <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4">
                <h5 className="fw-bold text-dark mb-0">
                    <i className="fas fa-server text-secondary me-2"></i>Estado del Servidor
                </h5>
            </Card.Header>
            <Card.Body className="p-4 d-flex flex-column gap-4">
                <div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium text-secondary" style={{fontSize: '0.9rem'}}>Almacenamiento (SSD)</span>
                        <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>78%</span>
                    </div>
                    <ProgressBar variant="primary" now={78} style={{ height: '8px' }} />
                </div>
                <div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium text-secondary" style={{fontSize: '0.9rem'}}>Memoria RAM</span>
                        <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>45%</span>
                    </div>
                    <ProgressBar variant="success" now={45} style={{ height: '8px' }} />
                </div>
                <div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium text-secondary" style={{fontSize: '0.9rem'}}>Carga de CPU</span>
                        <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>
                            {alertasActivasCount > 0 ? '92%' : '24%'}
                        </span>
                    </div>
                    <ProgressBar 
                        variant={alertasActivasCount > 0 ? "danger" : "success"} 
                        animated={alertasActivasCount > 0} 
                        now={alertasActivasCount > 0 ? 92 : 24} 
                        style={{ height: '8px' }} 
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default EstadoServidor;