import { Row, Col, Card } from 'react-bootstrap';

const TarjetasInfoCliente = ({ email, phone, street, number, city, zipcode, username, password }) => {
    return (
        <Row className="g-4">
            {/* Contacto */}
            <Col xs={12} md={4}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card">
                    <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-4 pb-2 border-bottom border-light-subtle">
                            <div className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '45px', height: '45px', color: '#0369a1' }}>
                                <i className="fas fa-address-book fs-5"></i>
                            </div>
                            <h5 className="fw-bold text-dark mb-0">Contacto</h5>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <div>
                                <span className="d-block text-secondary fw-medium" style={{ fontSize: '0.85rem' }}>CORREO OFICIAL</span>
                                <span className="text-dark fw-semibold"><i className="fas fa-at text-primary me-2 opacity-75"></i>{email}</span>
                            </div>
                            <div>
                                <span className="d-block text-secondary fw-medium" style={{ fontSize: '0.85rem' }}>TELÉFONO MÓVIL</span>
                                <span className="text-dark fw-semibold"><i className="fas fa-phone-alt text-success me-2 opacity-75"></i>{phone}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            {/* Ubicación */}
            <Col xs={12} md={4}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card">
                    <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-4 pb-2 border-bottom border-light-subtle">
                            <div className="bg-danger bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '45px', height: '45px', color: '#dc3545' }}>
                                <i className="fas fa-map-marked-alt fs-5"></i>
                            </div>
                            <h5 className="fw-bold text-dark mb-0">Ubicación</h5>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <div>
                                <span className="d-block text-secondary fw-medium" style={{ fontSize: '0.85rem' }}>DOMICILIO</span>
                                <span className="text-dark fw-semibold text-capitalize"><i className="fas fa-home text-secondary me-2 opacity-75"></i>{street} {number}</span>
                            </div>
                            <div>
                                <span className="d-block text-secondary fw-medium" style={{ fontSize: '0.85rem' }}>CIUDAD Y C.P.</span>
                                <span className="text-dark fw-semibold text-capitalize"><i className="fas fa-city text-secondary me-2 opacity-75"></i>{city} {zipcode && `(CP: ${zipcode})`}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            {/* Credenciales */}
            <Col xs={12} md={4}>
                <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card">
                    <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-4 pb-2 border-bottom border-light-subtle">
                            <div className="bg-warning bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '45px', height: '45px', color: '#ffc107' }}>
                                <i className="fas fa-shield-alt fs-5"></i>
                            </div>
                            <h5 className="fw-bold text-dark mb-0">Credenciales</h5>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <div>
                                <span className="d-block text-secondary fw-medium" style={{ fontSize: '0.85rem' }}>USUARIO DE RED</span>
                                <div className="d-flex align-items-center mt-1">
                                    <i className="fas fa-user-circle text-secondary me-2 opacity-75"></i>
                                    <code className="bg-light px-2 py-1 rounded text-dark border fw-bold">{username}</code>
                                </div>
                            </div>
                            <div>
                                <span className="d-block text-secondary fw-medium" style={{ fontSize: '0.85rem' }}>CLAVE DE ACCESO</span>
                                <div className="d-flex align-items-center mt-1">
                                    <i className="fas fa-key text-secondary me-2 opacity-75"></i>
                                    <code className="bg-light px-2 py-1 rounded text-dark border fw-bold">{password}</code>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TarjetasInfoCliente;