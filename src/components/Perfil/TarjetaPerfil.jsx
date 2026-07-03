import { Card, Badge, ListGroup } from 'react-bootstrap';

const TarjetaPerfil = ({ nombreAdmin, sectorAdmin, privilegios }) => {
    return (
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
    );
};

export default TarjetaPerfil;