import { useState, useEffect } from 'react';
import { Modal, Form, Button, Row, Col, InputGroup, Spinner } from 'react-bootstrap';

const FormularioAltaCliente = ({ show, onHide, onSuccess, onError }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [listaProvincias, setListaProvincias] = useState([]);
    const [listaLocalidades, setListaLocalidades] = useState([]);

    const [nuevoCliente, setNuevoCliente] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        provincia: '',
        localidad: ''
    });

    useEffect(() => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
            .then(res => res.json())
            .then(data => {
                const ordenadas = data.provincias.sort((a, b) => a.nombre.localeCompare(b.nombre));
                setListaProvincias(ordenadas);
            })
            .catch(err => console.error("Error cargando provincias:", err));
    }, []);

    useEffect(() => {
        if (!nuevoCliente.provincia) {
            setListaLocalidades([]);
            return;
        }

        fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${nuevoCliente.provincia}&campos=id,nombre&max=5000`)
            .then(res => res.json())
            .then(data => {
                const ordenadas = data.localidades.sort((a, b) => a.nombre.localeCompare(b.nombre));
                setListaLocalidades(ordenadas);
            })
            .catch(err => console.error("Error cargando localidades:", err));
    }, [nuevoCliente.provincia]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "provincia") {
            setNuevoCliente({
                ...nuevoCliente,
                provincia: value,
                localidad: ''
            });
        } else {
            setNuevoCliente({
                ...nuevoCliente,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                email: nuevoCliente.email,
                username: nuevoCliente.email.split('@')[0],
                password: 'password123',
                name: {
                    firstname: nuevoCliente.firstname,
                    lastname: nuevoCliente.lastname
                },
                address: {
                    city: `${nuevoCliente.localidad}, ${nuevoCliente.provincia}`,
                    street: 'Calle Falsa',
                    number: 123,
                    zipcode: '4600',
                    geolocation: { lat: '-24.1856', long: '-65.2994' }
                },
                phone: nuevoCliente.phone
            };

            const response = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok || response.status === 201) {
                const data = await response.json();
                
                setNuevoCliente({ firstname: '', lastname: '', email: '', phone: '', provincia: '', localidad:'' });
                
                onSuccess(data.id, payload);
            } else {
                throw new Error('El servidor rechazó la petición de guardado.');
            }
        } catch (error) {
            onError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal show={show} onHide={!isSubmitting ? onHide : null} centered backdrop="static" size="lg">
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton={!isSubmitting} className="border-bottom-0 pb-0 pt-4 px-4">
                    <Modal.Title className="fw-bold text-dark fs-4">
                        <i className="fas fa-user-plus text-primary me-2"></i>
                        Alta de Nuevo Cliente
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body className="pt-2 px-4">
                    <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
                        Completá los datos personales y de contacto. El sistema se encargará de generar la credencial de acceso en la base de datos.
                    </p>
                    
                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-medium text-dark mb-1" style={{ fontSize: '0.9rem' }}>Nombre</Form.Label>
                                <InputGroup className="shadow-sm">
                                    <InputGroup.Text className="bg-light border-end-0 text-secondary"><i className="fas fa-user"></i></InputGroup.Text>
                                    <Form.Control type="text" name="firstname" value={nuevoCliente.firstname} onChange={handleChange} required placeholder="Ej: Mauricio" className="border-start-0 py-2" />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-medium text-dark mb-1" style={{ fontSize: '0.9rem' }}>Apellido</Form.Label>
                                <InputGroup className="shadow-sm">
                                    <InputGroup.Text className="bg-light border-end-0 text-secondary"><i className="fas fa-id-card"></i></InputGroup.Text>
                                    <Form.Control type="text" name="lastname" value={nuevoCliente.lastname} onChange={handleChange} required placeholder="Ej: Villarreal" className="border-start-0 py-2" />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group>
                                <Form.Label className="fw-medium text-dark mb-1" style={{ fontSize: '0.9rem' }}>Correo Electrónico Oficial</Form.Label>
                                <InputGroup className="shadow-sm">
                                    <InputGroup.Text className="bg-light border-end-0 text-secondary"><i className="fas fa-envelope"></i></InputGroup.Text>
                                    <Form.Control type="email" name="email" value={nuevoCliente.email} onChange={handleChange} required placeholder="usuario@empresa.com" className="border-start-0 py-2" />
                                </InputGroup>
                            </Form.Group>
                        </Col>
 
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-medium text-dark mb-1" style={{ fontSize: '0.9rem' }}>Teléfono Móvil</Form.Label>
                                <InputGroup className="shadow-sm">
                                    <InputGroup.Text className="bg-light border-end-0 text-secondary"><i className="fas fa-phone-alt"></i></InputGroup.Text>
                                    <Form.Control type="text" name="phone" value={nuevoCliente.phone} onChange={handleChange} required placeholder="+54 9 388..." className="border-start-0 py-2" />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-medium text-dark mb-1" style={{ fontSize: '0.9rem' }}>Provincia</Form.Label>
                                <InputGroup className="shadow-sm">
                                    <InputGroup.Text className="bg-light border-end-0 text-secondary"><i className="fas fa-map"></i></InputGroup.Text>
                                    <Form.Select name="provincia" value={nuevoCliente.provincia} onChange={handleChange} required className="border-start-0 py-2">
                                        <option value="">Selecciona Provincia...</option>
                                        {listaProvincias.map(p => (
                                            <option key={p.id} value={p.nombre}>{p.nombre}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-medium text-dark mb-1" style={{ fontSize: '0.9rem' }}>Localidad de Residencia</Form.Label>
                                <InputGroup className="shadow-sm">
                                    <InputGroup.Text className="bg-light border-end-0 text-secondary"><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                                    <Form.Select 
                                        name="localidad" 
                                        value={nuevoCliente.localidad} 
                                        onChange={handleChange} 
                                        required 
                                        className="border-start-0 py-2"
                                        disabled={!nuevoCliente.provincia}
                                    >
                                        <option value="">
                                            {!nuevoCliente.provincia ? "Localidad..." : "Selecciona Localidad..."}
                                        </option>
                                        {listaLocalidades.map(l => (
                                            <option key={l.id} value={l.nombre}>{l.nombre}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                
                <Modal.Footer className="border-top-0 pt-0 pb-4 px-4">
                    <Button variant="white" onClick={onHide} className="rounded-pill fw-medium text-secondary border shadow-sm px-4" disabled={isSubmitting}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" className="rounded-pill fw-medium px-4 shadow-sm d-flex align-items-center" style={{ backgroundColor: '#0369a1', borderColor: '#0369a1' }} disabled={isSubmitting}>
                        {isSubmitting ? (
                            <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" /> Registrando Cliente...</>
                        ) : (
                            <><i className="fas fa-cloud-upload-alt me-2"></i> Guardar en Servidor</>
                        )}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default FormularioAltaCliente;