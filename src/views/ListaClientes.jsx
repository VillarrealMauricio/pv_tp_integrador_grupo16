import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Alert, Row, Col, Card, Badge, Button, Placeholder, Form, InputGroup, Toast, ToastContainer } from 'react-bootstrap';
import '../css/clientes.css';
import FormularioAltaCliente from '../common/FormularioAltaCliente';

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState('');     

    const [showModalAlta, setShowModalAlta] = useState(false);
    const [notificacion, setNotificacion] = useState({ show: false, mensaje: '', variante: 'success' });

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

    const clientesFiltrados = clientes.filter((cliente) => {
        if (!cliente) return false; 
        const termino = busqueda.toLowerCase();
        const apellido = cliente?.name?.lastname?.toLowerCase() || '';
        const ciudad = cliente?.address?.city?.toLowerCase() || '';
        return apellido.includes(termino) || ciudad.includes(termino);
    });

    const handleAltaExitosa = (nuevoId, payloadCliente) => {
        const proximoId = clientes.length > 0 
            ? Math.max(...clientes.map(c => Number(c?.id) || 0)) + 1 
            : 1;

        setNotificacion({ show: true, mensaje: `¡Cliente registrado con éxito! ID asignado: #${proximoId}`, variante: 'success' });
        
        setClientes([{ ...payloadCliente, id: proximoId }, ...clientes]); 
        setShowModalAlta(false);
    };

    const handleAltaError = (mensajeError) => {
        setNotificacion({ show: true, mensaje: mensajeError, variante: 'danger' });
    };

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
        <Container fluid className="py-4 px-4 position-relative">
            
            <ToastContainer position="top-end" className="p-4" style={{ zIndex: 1055 }}>
                <Toast show={notificacion.show} onClose={() => setNotificacion({ ...notificacion, show: false })} delay={5000} autohide bg={notificacion.variante}>
                    <Toast.Header closeButton={false} className="d-flex justify-content-between">
                        <strong className="me-auto text-dark">
                            <i className={`fas ${notificacion.variante === 'success' ? 'fa-check-circle text-success' : 'fa-exclamation-triangle text-danger'} me-2`}></i>
                            Aviso del Sistema
                        </strong>
                        <button type="button" className="btn-close" onClick={() => setNotificacion({ ...notificacion, show: false })}></button>
                    </Toast.Header>
                    <Toast.Body className="text-white fw-medium">
                        {notificacion.mensaje}
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            <Row className="align-items-center mb-4 gy-3">
                <Col xs={12} lg={3}>
                    <h2 className="fw-bold text-dark mb-0">Directorio</h2>
                    <p className="text-secondary mb-0">Gestión de clientes.</p>
                </Col>
                
                <Col xs={12} md={7} lg={6} className="mx-auto">
                    <InputGroup className="search-container shadow-sm py-1">
                        <InputGroup.Text className="bg-transparent border-0 text-primary ps-4">
                            <i className="fas fa-search opacity-75"></i>
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Buscar por apellido o ciudad..." className="border-0 shadow-none py-2 search-input text-dark fw-medium" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} disabled={loading} />
                        {busqueda && (
                            <Button variant="link" className="border-0 text-secondary pe-4 text-decoration-none btn-clear-search" onClick={() => setBusqueda('')}>
                                <i className="fas fa-times-circle fs-5"></i>
                            </Button>
                        )}
                    </InputGroup>
                </Col>

                <Col xs={12} md={5} lg={3} className="text-lg-end d-flex justify-content-lg-end gap-2">
                    <Button variant="primary" className="rounded-pill fw-medium shadow-sm d-flex align-items-center" style={{ backgroundColor: '#0369a1', borderColor: '#0369a1' }} onClick={() => setShowModalAlta(true)}>
                        <i className="fas fa-user-plus me-2"></i> Nuevo Cliente
                    </Button>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <Col key={index}>
                            <Card className="h-100 rounded-4 shadow-sm border-light-subtle">
                                <Card.Body className="p-4 d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <Placeholder as="div" animation="glow"><Placeholder xs={12} className="rounded-circle" style={{ width: '48px', height: '48px' }} /></Placeholder>
                                        <Placeholder as="div" animation="glow" className="w-25"><Placeholder xs={12} className="rounded-pill p-2" /></Placeholder>
                                    </div>
                                    <Placeholder as="h5" animation="glow" className="mb-3"><Placeholder xs={8} className="rounded" /></Placeholder>
                                    <div className="d-flex flex-column gap-3 mb-4 mt-auto">
                                        <Placeholder as="div" animation="glow"><Placeholder xs={9} className="rounded" /></Placeholder>
                                        <Placeholder as="div" animation="glow"><Placeholder xs={6} className="rounded" /></Placeholder>
                                    </div>
                                    <Placeholder.Button variant="light" className="w-100 rounded-pill mt-auto" aria-hidden="true" />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : clientesFiltrados.length === 0 ? (
                    <Col xs={12}>
                        <div className="text-center py-5">
                            <i className="fas fa-search-minus text-secondary mb-3" style={{ fontSize: '3rem', opacity: 0.5 }}></i>
                            <h5 className="text-dark fw-bold">No se encontraron resultados</h5>
                        </div>
                    </Col>
                ) : (
                    clientesFiltrados.map((cliente) => {
                        const isActivo = (cliente?.id || 0) % 5 !== 0;
                        const nombre = cliente?.name?.firstname || 'N/A';
                        const apellido = cliente?.name?.lastname || '';
                        const email = cliente?.email || 'Sin correo';
                        const city = cliente?.address?.city || 'No especificada';

                        return (
                            <Col key={`cliente-${cliente?.id || Math.random()}`}>
                                <Card className="h-100 rounded-4 shadow-sm cliente-card">
                                    <Card.Body className="p-4 d-flex flex-column position-relative">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <div className="rounded-circle d-flex justify-content-center align-items-center border cliente-avatar" style={{ width: '48px', height: '48px' }}>
                                                <i className="fas fa-user text-secondary fs-5"></i>
                                            </div>
                                            <Badge bg="light" text="secondary" className="fw-bold rounded-pill border">#{cliente?.id || '?'}</Badge>
                                        </div>
                                        <h5 className="fw-bold text-dark text-capitalize mb-3 tracking-tight">
                                            {nombre} {apellido}
                                        </h5>
                                        <div className="d-flex flex-column gap-2 mb-4 mt-auto">
                                            <div className="d-flex align-items-center text-secondary" style={{ fontSize: '0.9rem' }}>
                                                <i className="fas fa-envelope text-primary cliente-data-icon me-2"></i>
                                                <span className="text-truncate fw-medium">{email}</span>
                                            </div>
                                            <div className="d-flex align-items-center text-secondary text-capitalize" style={{ fontSize: '0.9rem' }}>
                                                <i className="fas fa-map-marker-alt text-danger cliente-data-icon me-2"></i>
                                                <span className="fw-medium">{city}</span>
                                            </div>
                                        </div>
                                        <Button as={Link} to={`/clientes/${cliente?.id}`} variant="light" className="w-100 rounded-pill fw-semibold btn-ficha-custom mt-auto shadow-sm">
                                            Ver Ficha Completa
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                )}
            </Row>

            <FormularioAltaCliente 
                show={showModalAlta} 
                onHide={() => setShowModalAlta(false)} 
                onSuccess={handleAltaExitosa}
                onError={handleAltaError}
            />

        </Container>
    );
};

export default ListaClientes;