import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Badge, Button, Spinner, Alert } from 'react-bootstrap';
import { AdminContext } from '../context/AdminContext';

const DetalleCliente = () => {
    const { id } = useParams(); 
    const { admin } = useContext(AdminContext);

    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${id}`);
                if (!response.ok) throw new Error('No se pudo obtener la ficha del cliente.');
                const data = await response.json();
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
            <Container className="py-5 text-center">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-secondary fw-medium">Cargando ficha del cliente...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger">{error}</Alert>
                <Button as={Link} to="/clientes" variant="secondary">
                    Volver a Clientes
                </Button>
            </Container>
        );
    }


    return (
        <Container className="py-4">

            <Button as={Link} to="/clientes" variant="light" className="mb-4 rounded-pill fw-medium shadow-sm">
                ← Volver a Clientes
            </Button>

            <Row className="g-4">

                <Col xs={12} md={6}>
                    <Card className="rounded-4 shadow-sm h-100">
                        <Card.Body className="p-4">
                            <h5 className="fw-bold mb-4">Datos Personales</h5>
                            <p><span className="text-secondary">ID:</span> <Badge bg="light" text="dark" className="border">#{cliente.id}</Badge></p>
                            <p><span className="text-secondary">Nombre:</span> <strong className="text-capitalize">{cliente.name.firstname} {cliente.name.lastname}</strong></p>
                            <p><span className="text-secondary">Email:</span> {cliente.email}</p>
                            <p><span className="text-secondary">Teléfono:</span> {cliente.phone}</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6}>
                    <Card className="rounded-4 shadow-sm h-100">
                        <Card.Body className="p-4">
                            <h5 className="fw-bold mb-4">Dirección</h5>
                            <p><span className="text-secondary">Calle:</span> <strong>{cliente.address.street}</strong></p>
                            <p><span className="text-secondary">Número:</span> <strong>{cliente.address.number}</strong></p>
                            <p><span className="text-secondary">Ciudad:</span> <strong className="text-capitalize">{cliente.address.city}</strong></p>
                            <p><span className="text-secondary">Código Postal:</span> <strong>{cliente.address.zipcode}</strong></p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6}>
                    <Card className="rounded-4 shadow-sm h-100">
                        <Card.Body className="p-4">
                            <h5 className="fw-bold mb-4">Credenciales</h5>
                            <p><span className="text-secondary">Usuario:</span> <code>{cliente.username}</code></p>
                            <p><span className="text-secondary">Contraseña:</span> <code>{cliente.password}</code></p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default DetalleCliente;