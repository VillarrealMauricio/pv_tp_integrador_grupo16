import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Badge, Button, Spinner, Alert } from 'react-bootstrap';
import { AdminContext } from '../context/AdminContext';
import '../css/dashboard.css'; 

const DetalleCliente = () => {
    const { id } = useParams(); 
    const { admin } = useContext(AdminContext);

    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const clientesLocales = JSON.parse(localStorage.getItem('mis_clientes_nuevos')) || [];
                const encontradoLocal = clientesLocales.find(c => String(c?.id) === String(id));

                if (encontradoLocal) {
                    setCliente(encontradoLocal);
                    setLoading(false);
                    return;
                }

                const response = await fetch(`https://fakestoreapi.com/users/${id}`);
                if (!response.ok) throw new Error('No se pudo obtener la ficha del cliente.');
                
                const data = await response.json();
                
                if (!data) throw new Error('El expediente solicitado no existe en el servidor externo.');

                setCliente(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCliente();
    }, [id]);

    if (loading) {
        return (
            <Container className="py-5 text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <Spinner animation="grow" variant="primary" style={{ width: '3rem', height: '3rem' }} />
                <h5 className="mt-4 text-dark fw-bold">Cargando expediente...</h5>
                <p className="text-secondary fw-medium">Conectando con la base de datos</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger" className="shadow-sm rounded-4 border-0 border-start border-danger border-4 p-4">
                    <Alert.Heading className="fw-bold"><i className="fas fa-exclamation-triangle me-2"></i>Error de Acceso</Alert.Heading>
                    <p className="text-secondary mb-4">{error}</p>
                    <Button as={Link} to="/clientes" className="btn-volver rounded-pill fw-semibold shadow-sm px-4">
                        <i className="fas fa-arrow-left me-2"></i> Volver al Directorio
                    </Button>
                </Alert>
            </Container>
        );
    }

    const firstname = cliente?.name?.firstname || 'N/A';
    const lastname = cliente?.name?.lastname || '';
    const email = cliente?.email || 'Sin correo registrado';
    const phone = cliente?.phone || 'Sin teléfono';
    const street = cliente?.address?.street || 'No especificada';
    const number = cliente?.address?.number || '';
    const city = cliente?.address?.city || 'No especificada';
    const zipcode = cliente?.address?.zipcode || '';
    const username = cliente?.username || 'N/A';
    const password = cliente?.password || 'N/A';

    return (
        <Container fluid className="py-4 px-4 position-relative">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <Button as={Link} to="/clientes" variant="light" className="rounded-pill fw-semibold shadow-sm border text-secondary px-4">
                    <i className="fas fa-arrow-left me-2"></i> Volver al Directorio
                </Button>

            </div>

            <Card className="border-0 shadow-sm rounded-4 mb-4" style={{ backgroundColor: 'var(--bs-primary)', backgroundImage: 'linear-gradient(45deg, #0369a1, #0ea5e9)' }}>
                <Card.Body className="p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4 text-white position-relative overflow-hidden">
                    <i className="fas fa-id-card position-absolute opacity-10" style={{ fontSize: '15rem', right: '-2rem', bottom: '-3rem' }}></i>

                    <div className="rounded-circle bg-white d-flex justify-content-center align-items-center shadow-lg" style={{ width: '100px', height: '100px', zIndex: 1 }}>
                        <i className="fas fa-user text-primary" style={{ fontSize: '3rem' }}></i>
                    </div>
                    
                    <div className="text-center text-md-start" style={{ zIndex: 1 }}>
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-1">
                            <h2 className="fw-bold text-white text-capitalize mb-0">{firstname} {lastname}</h2>
                            <Badge bg="light" text="primary" className="rounded-pill ms-2 shadow-sm fs-6">#{cliente?.id}</Badge>
                        </div>
                        <p className="mb-0 opacity-75 fs-5"><i className="fas fa-envelope me-2"></i>{email}</p>
                    </div>
                </Card.Body>
            </Card>

            <Row className="g-4">

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
        </Container>
    );
};

export default DetalleCliente;