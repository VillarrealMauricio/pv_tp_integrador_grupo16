import { useState, useEffect } from 'react';
import { Container, Alert, Row, Col, Button } from 'react-bootstrap';
import '../css/clientes.css';
import FormularioAltaCliente from '../components/common/FormularioAltaCliente';
import BuscadorClientes from '../components/clientes/BuscadorClientes';
import ClienteSkeleton from '../components/clientes/ClienteSkeleton';
import ClienteCard from '../components/clientes/ClienteCard';

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState('');     

    const [showModalAlta, setShowModalAlta] = useState(false);
    const [feedbackExito, setFeedbackExito] = useState(null);
    const neonColors = [
        '#00f2fe', '#a18cd1', '#ff0844', '#f5576c', 
        '#43e97b', '#fa709a', '#fee140', '#00c6ff'
    ];

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (!response.ok) throw new Error('Error al conectar con el servidor de la API');
                
                setTimeout(async () => {
                    const dataApi = await response.json();
                    const clientesLocales = JSON.parse(localStorage.getItem('mis_clientes_nuevos')) || [];
                    const clientesEliminados = JSON.parse(localStorage.getItem('clientes_eliminados')) || [];
                    
                    let todosLosClientes = [...clientesLocales, ...dataApi];
                    
                    todosLosClientes = todosLosClientes.filter(
                        cliente => !clientesEliminados.includes(String(cliente.id))
                    );
                    
                    setClientes(todosLosClientes);
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

        const nuevoClienteCompleto = { ...payloadCliente, id: proximoId };
        
        setClientes([nuevoClienteCompleto, ...clientes]); 

        const clientesLocales = JSON.parse(localStorage.getItem('mis_clientes_nuevos')) || [];
        localStorage.setItem('mis_clientes_nuevos', JSON.stringify([nuevoClienteCompleto, ...clientesLocales]));

        setShowModalAlta(false);

        setFeedbackExito(
            `¡Cliente creado con éxito! ID remoto asignado por FakeStoreAPI: #${nuevoId}. Nombre: ${payloadCliente.name.firstname} ${payloadCliente.name.lastname}`
        );

        setTimeout(() => setFeedbackExito(null), 5000);
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
        <Container className="py-4 position-relative">
            
            {feedbackExito && (
                <Alert variant="success" className="mb-4 shadow-sm border-0 border-start border-success border-4 rounded-3">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-check-circle fs-4 me-3 text-success"></i>
                        <span className="fw-medium text-dark">{feedbackExito}</span>
                    </div>
                </Alert>
            )}
            
            <Row className="align-items-center mb-4 gy-3">
                <Col xs={12} lg={3}>
                    <h2 className="fw-bold text-dark mb-0">Directorio</h2>
                    <p className="text-secondary mb-0">Gestión de clientes.</p>
                </Col>
                
                <Col xs={12} md={7} lg={6} className="mx-auto">
                    <BuscadorClientes 
                        busqueda={busqueda} 
                        setBusqueda={setBusqueda} 
                        disabled={loading} 
                    />
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
                        <Col key={`skeleton-${index}`}>
                            <ClienteSkeleton />
                        </Col>
                    ))
                ) : clientesFiltrados.length === 0 ? (
                    <Col xs={12} className="w-100 d-flex justify-content-center align-items-center mt-4">
                        <div className="text-center py-5">
                            <i className="fas fa-search-minus text-secondary mb-4" style={{ fontSize: '4rem', opacity: 0.3 }}></i>
                            <h4 className="text-dark fw-bold">No se encontraron resultados</h4>
                            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
                                No hay clientes que coincidan con la búsqueda "{busqueda}"
                            </p>
                        </div>
                    </Col>
                ) : (
                    clientesFiltrados.map((cliente, index) => (
                        <Col key={`cliente-${cliente?.id || Math.random()}`}>
                            <ClienteCard 
                                cliente={cliente} 
                                colorAsignado={neonColors[index % neonColors.length]} 
                            />
                        </Col>
                    ))
                )}
            </Row>

            <FormularioAltaCliente 
                show={showModalAlta} 
                onHide={() => setShowModalAlta(false)} 
                onSuccess={handleAltaExitosa}
                onError={(msg) => console.error(msg)}
            />

        </Container>
    );
};

export default ListaClientes;