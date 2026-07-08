import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Container, Button, Spinner, Alert } from 'react-bootstrap';
import { AdminContext } from '../context/AdminContext';
import '../css/dashboard.css';
import HeroCliente from '../components/clientes/HeroCliente';
import TarjetasInfoCliente from '../components/clientes/TarjetasInfoCliente';
import ModalEliminarCliente from '../components/clientes/ModalEliminarCliente';

const DetalleCliente = () => {
    const { id } = useParams();
    const { admin } = useContext(AdminContext);
    const navigate = useNavigate();
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModalEliminar, setShowModalEliminar] = useState(false);
    const handleEliminar = async () => {
        try {
            await fetch(`https://fakestoreapi.com/users/${cliente.id}`, { method: 'DELETE' });

            const clientesLocales = JSON.parse(localStorage.getItem('mis_clientes_nuevos')) || [];
            const esClienteLocal = clientesLocales.some(c => String(c.id) === String(cliente.id));

            if (esClienteLocal) {
                const filtrados = clientesLocales.filter(c => String(c.id) !== String(cliente.id));
                localStorage.setItem('mis_clientes_nuevos', JSON.stringify(filtrados));
            } else {
                const clientesEliminados = JSON.parse(localStorage.getItem('clientes_eliminados')) || [];
                if (!clientesEliminados.includes(String(cliente.id))) {
                    clientesEliminados.push(String(cliente.id));
                    localStorage.setItem('clientes_eliminados', JSON.stringify(clientesEliminados));
                }
            }

            setShowModalEliminar(false);
            navigate('/clientes');

        } catch (error) {
            console.error('Error:', error);
        }
    }

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

    return (
        <Container fluid className="py-4 px-4 position-relative">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Button as={Link} to="/clientes" variant="light" className="rounded-pill fw-semibold shadow-sm border text-secondary px-4">
                    <i className="fas fa-arrow-left me-2"></i> Volver al Directorio
                </Button>
                {admin.sector === 'Gerencia' && (
                    <Button onClick={() => setShowModalEliminar(true)} variant="danger" className="rounded-pill fw-semibold shadow-sm px-4">
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                )}
            </div>

            <HeroCliente 
                firstname={firstname} 
                lastname={lastname} 
                email={cliente?.email || 'Sin correo registrado'} 
                id={cliente?.id} 
            />

            <TarjetasInfoCliente 
                email={cliente?.email || 'Sin correo registrado'}
                phone={cliente?.phone || 'Sin teléfono'}
                street={cliente?.address?.street || 'No especificada'}
                number={cliente?.address?.number || ''}
                city={cliente?.address?.city || 'No especificada'}
                zipcode={cliente?.address?.zipcode || ''}
                username={cliente?.username || 'N/A'}
                password={cliente?.password || 'N/A'}
            />

            <ModalEliminarCliente 
                show={showModalEliminar} 
                onHide={() => setShowModalEliminar(false)} 
                onConfirm={handleEliminar} 
                firstname={firstname} 
                lastname={lastname} 
            />
        </Container>
    );
};

export default DetalleCliente;