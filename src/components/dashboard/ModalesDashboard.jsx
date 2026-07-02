import { Modal, ListGroup, Badge, ProgressBar, Form, Button } from 'react-bootstrap';

export const ModalProyectos = ({ show, onHide, proyectos }) => (
    <Modal show={show} onHide={onHide} centered>
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
);

export const ModalTareas = ({ show, onHide, tareas, toggleTarea }) => (
    <Modal show={show} onHide={onHide} centered>
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
);

export const ModalAlertas = ({ show, onHide, alertas, resolverAlerta }) => (
    <Modal show={show} onHide={onHide} centered>
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
);