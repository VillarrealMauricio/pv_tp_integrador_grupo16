import { Card, Table, Badge } from 'react-bootstrap';

const RegistroActividad = () => {
    return (
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
    );
};

export default RegistroActividad;