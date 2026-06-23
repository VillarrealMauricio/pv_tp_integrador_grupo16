import { useState, useEffect } from 'react';
import { Container, Alert, Row, Col, Card, Badge, Button, Placeholder } from 'react-bootstrap';
import '../css/clientes.css';

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);     

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (!response.ok) throw new Error('Error al conectar con el servidor de la API');
                
                setTimeout(async () => {
                    const data = await response.json();
                    setClientes(data);
                    setLoading(false);
                }, 1000);

            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchClientes();
    }, []);

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger" className="shadow-sm rounded-3 border-0 border-start border-danger border-4">
                    <Alert.Heading className="fw-bold"><i className="fas fa-exclamation-circle me-2"></i>Error de conexión</Alert.Heading>
                    <p className="mb-0 text-secondary">{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid className="py-4 px-4">
            
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                <div>
                    <h2 className="fw-bold text-dark mb-0">Gestión de Clientes</h2>
                    <p className="text-secondary mb-0">Directorio completo de usuarios registrados en el sistema.</p>
                </div>
                    {!loading && (
                    <div className="d-inline-flex align-items-center px-4 py-2 bg-white border border-light-subtle shadow-sm rounded-pill">
                    <div 
                        className="rounded-circle d-flex justify-content-center align-items-center me-2" 
                        style={{ width: '28px', height: '28px', backgroundColor: '#e0f2fe', color: '#0369a1' }}
                    >
                        <i className="fas fa-users" style={{ fontSize: '0.85rem' }}></i>
                    </div>
                        <span className="fw-bold text-dark fs-6 me-1">{clientes.length}</span>
                        <span className="text-secondary fw-medium" style={{ fontSize: '0.95rem' }}>Registros Totales</span>
                    </div>
                )}
            </div>

            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <Col key={index}>
                            <Card className="h-100 rounded-4 shadow-sm border-light-subtle">
                                <Card.Body className="p-4 d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <Placeholder as="div" animation="glow">
                                            <Placeholder xs={12} className="rounded-circle" style={{ width: '48px', height: '48px' }} />
                                        </Placeholder>
                                        <Placeholder as="div" animation="glow" className="w-25">
                                            <Placeholder xs={12} className="rounded-pill p-2" />
                                        </Placeholder>
                                    </div>
                                    <Placeholder as="h5" animation="glow" className="mb-3">
                                        <Placeholder xs={8} className="rounded" />
                                    </Placeholder>
                                    <div className="d-flex flex-column gap-3 mb-4 mt-auto">
                                        <Placeholder as="div" animation="glow"><Placeholder xs={9} className="rounded" /></Placeholder>
                                        <Placeholder as="div" animation="glow"><Placeholder xs={6} className="rounded" /></Placeholder>
                                        <Placeholder as="div" animation="glow"><Placeholder xs={7} className="rounded" /></Placeholder>
                                    </div>
                                    <Placeholder.Button variant="light" className="w-100 rounded-pill mt-auto" aria-hidden="true" />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    
                    clientes.map((cliente) => {
                        const isActivo = cliente.id % 5 !== 0;

                        return (
                            <Col key={cliente.id}>
                                <Card className="h-100 rounded-4 shadow-sm cliente-card">
                                    <Card.Body className="p-4 d-flex flex-column position-relative">
                                        
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <div className="rounded-circle d-flex justify-content-center align-items-center border cliente-avatar" style={{ width: '48px', height: '48px' }}>
                                                <i className="fas fa-user text-secondary fs-5"></i>
                                            </div>
                                            
                                            <div className="d-flex flex-column align-items-end gap-1">
                                                <Badge bg="light" text="secondary" className="fw-bold rounded-pill border">
                                                    #{cliente.id}
                                                </Badge>
                                                <Badge bg={isActivo ? 'success' : 'secondary'} className="bg-opacity-10 text-uppercase" style={{ fontSize: '0.65rem', color: isActivo ? '#198754' : '#6c757d' }}>
                                                    <i className={`fas ${isActivo ? 'fa-check-circle' : 'fa-minus-circle'} me-1`}></i>
                                                    {isActivo ? 'Activo' : 'Inactivo'}
                                                </Badge>
                                            </div>
                                        </div>

                                        <h5 className="fw-bold text-dark text-capitalize mb-3 tracking-tight">
                                            {cliente.name.firstname} {cliente.name.lastname}
                                        </h5>

                                        <div className="d-flex flex-column gap-2 mb-4 mt-auto">
                                            <div className="d-flex align-items-center text-secondary" style={{ fontSize: '0.9rem' }}>
                                                <i className="fas fa-envelope text-primary cliente-data-icon me-2"></i>
                                                <span className="text-truncate fw-medium">{cliente.email}</span>
                                            </div>
                                            <div className="d-flex align-items-center text-secondary" style={{ fontSize: '0.9rem' }}>
                                                <i className="fas fa-phone text-success cliente-data-icon me-2"></i>
                                                <span className="fw-medium">{cliente.phone}</span>
                                            </div>
                                            <div className="d-flex align-items-center text-secondary text-capitalize" style={{ fontSize: '0.9rem' }}>
                                                <i className="fas fa-map-marker-alt text-danger cliente-data-icon me-2"></i>
                                                <span className="fw-medium">{cliente.address.city}</span>
                                            </div>
                                        </div>

                                        <Button variant="light" className="w-100 rounded-pill fw-semibold btn-ficha-custom mt-auto shadow-sm">
                                            Ver Ficha Completa
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                )}
            </Row>
        </Container>
    );
};

export default ListaClientes;