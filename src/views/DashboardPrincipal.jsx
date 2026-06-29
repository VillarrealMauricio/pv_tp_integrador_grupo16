import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Table, Badge, Spinner, ProgressBar, Modal, Form, ListGroup, Button } from 'react-bootstrap';
import '../css/dashboard.css';

const DashboardPrincipal = () => {
    const navigate = useNavigate();

    const [totalClientes, setTotalClientes] = useState(0);
    const [cargandoClientes, setCargandoClientes] = useState(true);

    const [showProyectos, setShowProyectos] = useState(false);
    const [showTareas, setShowTareas] = useState(false);
    const [showAlertas, setShowAlertas] = useState(false);

    const [proyectos] = useState([
        { id: 1, nombre: "E-commerce Open Market", progreso: 85, encargado: "Mauricio V." },
        { id: 2, nombre: "Maquetado e Interfaz", progreso: 100, encargado: "Franco S." },
        { id: 3, nombre: "Algoritmo de Analisis de Mercado", progreso: 40, encargado: "Noel Ch." },
        { id: 4, nombre: "Módulo de Conexión API Global", progreso: 70, encargado: "Nelson R." }
    ]);

    const [tareas, setTareas] = useState([
        { id: 1, texto: "Corregir rutas dinámicas en App.jsx", realizada: false },
        { id: 2, texto: "Diseñar buscador por apellido y ciudad", realizada: false },
        { id: 3, texto: "Vincular el estado de login con LocalStorage", realizada: true },
        { id: 4, texto: "Revisar contraste de colores en etiquetas", realizada: false },
        { id: 5, texto: "Armar estructura limpia de carpetas", realizada: true }
    ]);

    const [alertas, setAlertas] = useState([
        { id: 1, mensaje: "Uso crítico de CPU detectado (92%)", tipo: "danger" },
        { id: 2, mensaje: "Intento de borrado de registro rechazado a Sergio Soza", tipo: "warning" },
        { id: 3, mensaje: "Latencia elevada en la respuesta de FakeStoreAPI", tipo: "info" }
    ]);

    const tareasPendientesCount = tareas.filter(t => !t.realizada).length;
    const alertasActivasCount = alertas.length;

useEffect(() => {
        const fetchMetricas = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (response.ok) {
                    const dataApi = await response.json();
                    const clientesLocales = JSON.parse(localStorage.getItem('mis_clientes_nuevos')) || [];
                    const clientesEliminados = JSON.parse(localStorage.getItem('clientes_eliminados')) || [];
                    const totalReal = (dataApi.length + clientesLocales.length) - clientesEliminados.length;
                    
                    setTotalClientes(totalReal);
                }
            } catch (error) {
                console.error("Error cargando métricas:", error);
            } finally {
                setCargandoClientes(false);
            }
        };
        fetchMetricas();
}, []);

    const toggleTarea = (id) => {
        setTareas(tareas.map(t => t.id === id ? { ...t, realizada: !t.realizada } : t));
    };

    const resolverAlerta = (id) => {
        setAlertas(alertas.filter(a => a.id !== id));
    };

    return (
        <Container fluid className="py-4 px-4">
            
            <div className="mb-4">
                <h2 className="fw-bold text-dark mb-0">Resumen del Sistema</h2>
                <p className="text-secondary mb-0">Monitoreo global del grupo y paneles de control activos.</p>
            </div>

            <Row className="g-4 mb-4">
                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-primary" onClick={() => navigate('/clientes')}>
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#0369a1' }}>
                                    <i className="fas fa-users fs-5"></i>
                                </div>
                                <i className="fas fa-arrow-right text-primary opacity-50 fs-6"></i>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Clientes Activos</h6>
                            <h3 className="fw-bold text-dark mb-0">
                                {cargandoClientes ? <Spinner animation="grow" variant="primary" size="sm" /> : totalClientes}
                            </h3>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-success" onClick={() => setShowProyectos(true)}>
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="bg-success bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#198754' }}>
                                    <i className="fas fa-folder-open fs-5"></i>
                                </div>
                                <Badge bg="success" className="bg-opacity-10 text-success rounded-pill fw-bold">Ver todos</Badge>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Proyectos Activos</h6>
                            <h3 className="fw-bold text-dark mb-0">{proyectos.length}</h3>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-warning" onClick={() => setShowTareas(true)}>
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="bg-warning bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#ffc107' }}>
                                    <i className="fas fa-clock fs-5"></i>
                                </div>
                                <Badge bg={tareasPendientesCount > 0 ? "danger" : "success"} className="rounded-pill">
                                    {tareasPendientesCount} Al día
                                </Badge>
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Tareas Pendientes</h6>
                            <h3 className="fw-bold text-dark mb-0">{tareasPendientesCount}</h3>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                    <Card className="border-0 shadow-sm rounded-4 h-100 dashboard-card card-hover-danger" onClick={() => setShowAlertas(true)}>
                        <Card.Body className="p-4 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="bg-danger bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '52px', height: '52px', color: '#dc3545' }}>
                                    <i className="fas fa-exclamation-triangle fs-5"></i>
                                </div>
                                {alertasActivasCount > 0 && (
                                    <div className="pulsing-dot"></div>
                                )}
                            </div>
                            <h6 className="text-secondary mb-1 fw-medium">Alertas de Sistema</h6>
                            <h3 className="fw-bold text-dark mb-0">{alertasActivasCount}</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4">
                <Col xs={12} lg={8}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Header className="bg-white border-bottom-0 pt-4 pb-2 px-4">
                            <h5 className="fw-bold text-dark mb-0">
                                <i className="fas fa-history text-secondary me-2"></i>Registro de Actividad
                            </h5>
                        </Card.Header>
                        <Card.Body className="p-4 pt-0">
                            <Table responsive hover className="mb-0 align-middle tabla-actividad">
                                <thead className="text-secondary">
                                    <tr>
                                        <th className="fw-medium border-bottom pb-3">Usuario</th>
                                        <th className="fw-medium border-bottom pb-3">Acción</th>
                                        <th className="fw-medium border-bottom pb-3">Fecha</th>
                                        <th className="fw-medium border-bottom pb-3">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark"><i className="fas fa-user-astronaut text-primary me-2 opacity-75"></i>Mauricio Villarreal</td>
                                        <td className="py-3 text-secondary">Alta de nuevo cliente (#128)</td>
                                        <td className="py-3 text-secondary">Hace 10 min</td>
                                        <td><Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark"><i className="fas fa-code text-primary me-2 opacity-75"></i>Noel Chiliguay</td>
                                        <td className="py-3 text-secondary">Actualización masiva de inventario</td>
                                        <td className="py-3 text-secondary">Hace 1 hora</td>
                                        <td><Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark"><i className="fas fa-laptop-code text-primary me-2 opacity-75"></i>Franco Sanchez</td>
                                        <td className="py-3 text-secondary">Exportación de métricas a Excel</td>
                                        <td className="py-3 text-secondary">Hace 3 horas</td>
                                        <td><Badge bg="warning" className="bg-opacity-10 text-warning fw-bold px-3 py-2 rounded-pill">En proceso</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark"><i className="fas fa-robot text-secondary me-2 opacity-75"></i>Sistema Automático</td>
                                        <td className="py-3 text-secondary">Sincronización con FakeStore API</td>
                                        <td className="py-3 text-secondary">Hace 5 horas</td>
                                        <td><Badge bg="success" className="bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill">Completado</Badge></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 fw-medium text-dark"><i className="fas fa-terminal text-primary me-2 opacity-75"></i>Sergio Soza</td>
                                        <td className="py-3 text-secondary">Intento de borrado de registro maestro</td>
                                        <td className="py-3 text-secondary">Ayer, 15:45</td>
                                        <td><Badge bg="danger" className="bg-opacity-10 text-danger fw-bold px-3 py-2 rounded-pill">Rechazado</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} lg={4}>
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
                                    <span className="fw-bold text-dark" style={{fontSize: '0.9rem'}}>{alertasActivasCount > 0 ? '92%' : '24%'}</span>
                                </div>
                                <ProgressBar variant={alertasActivasCount > 0 ? "danger" : "success"} animated={alertasActivasCount > 0} now={alertasActivasCount > 0 ? 92 : 24} style={{ height: '8px' }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Modal show={showProyectos} onHide={() => setShowProyectos(false)} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fw-bold text-dark"><i className="fas fa-folder-open text-success me-2"></i>Proyectos en Cursada</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-3">
                    <p className="text-secondary mb-3" style={{fontSize:'0.9rem'}}>Seguimiento de módulos del grupo de desarrollo:</p>
                    <ListGroup variant="flush">
                        {proyectos.map(p => (
                            <ListGroup.Item key={p.id} className="px-0 py-3 border-light-subtle">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="fw-bold text-dark" style={{fontSize:'0.95rem'}}>{p.nombre}</span>
                                    <Badge bg="light" text="dark" className="border shadow-sm">{p.progreso}%</Badge>
                                </div>
                                <ProgressBar variant={p.progreso === 100 ? "success" : "primary"} now={p.progreso} style={{height: '6px'}} className="mb-1" />
                                <small className="text-muted fw-medium">Líder técnico: {p.encargado}</small>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
            </Modal>

            <Modal show={showTareas} onHide={() => setShowTareas(false)} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fw-bold text-dark"><i className="fas fa-tasks text-warning me-2"></i>Tareas del Tablero</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-3">
                    <p className="text-secondary mb-3" style={{fontSize:'0.9rem'}}>Hacé click en los casilleros para marcar tareas como resueltas en tiempo real:</p>
                    <div className="d-flex flex-column gap-2">
                        {tareas.map(t => (
                            <div key={t.id} className="tarea-item d-flex align-items-center p-3 bg-light rounded-3">
                                <Form.Check 
                                    type="checkbox"
                                    id={`tarea-${t.id}`}
                                    checked={t.realizada}
                                    onChange={() => toggleTarea(t.id)}
                                    className="tarea-checkbox me-3 fs-5"
                                />
                                <label 
                                    htmlFor={`tarea-${t.id}`} 
                                    className={`mb-0 fw-medium flex-grow-1 ${t.realizada ? 'tarea-completada' : 'text-dark'}`}
                                    style={{ cursor: 'pointer', fontSize: '0.95rem' }}
                                >
                                    {t.texto}
                                </label>
                            </div>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showAlertas} onHide={() => setShowAlertas(false)} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="fw-bold text-dark"><i className="fas fa-bell text-danger me-2"></i>Centro de Incidentes</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-3">
                    {alertas.length === 0 ? (
                        <div className="text-center py-4">
                            <i className="fas fa-check-circle text-success mb-3 shadow-sm rounded-circle bg-white" style={{fontSize: '3rem'}}></i>
                            <h5 className="fw-bold text-dark">¡Sistema Estable!</h5>
                            <p className="text-secondary mb-0">No se registran alertas ni eventos pendientes.</p>
                        </div>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            {alertas.map(a => (
                                <div key={a.id} className={`alerta-item p-3 bg-${a.tipo} bg-opacity-10 border border-${a.tipo} border-opacity-25 rounded-3 d-flex justify-content-between align-items-center`}>
                                    <div className="d-flex align-items-center me-3">
                                        <i className="fas fa-exclamation-circle me-2" style={{color: `var(--bs-${a.tipo})`, fontSize: '1.2rem'}}></i>
                                        <span className="fw-medium text-dark-subtle" style={{fontSize:'0.9rem'}}>{a.mensaje}</span>
                                    </div>
                                    <Button size="sm" variant={`outline-${a.tipo}`} className="rounded-pill px-3 fw-medium bg-white" style={{fontSize:'0.8rem'}} onClick={() => resolverAlerta(a.id)}>
                                        Resolver
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </Modal.Body>
            </Modal>

        </Container>
    );
};

export default DashboardPrincipal;