import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClienteCard = ({ cliente, colorAsignado }) => {
    const nombre = cliente?.name?.firstname || 'N/A';
    const apellido = cliente?.name?.lastname || '';
    const email = cliente?.email || 'Sin correo';
    const city = cliente?.address?.city || 'No especificada';

    return (
        <Card 
            className="h-100 rounded-4 shadow-sm cliente-card"
            style={{ '--neon-color': colorAsignado }}
        >
            <Card.Body className="p-4 d-flex flex-column position-relative">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="rounded-circle d-flex justify-content-center align-items-center border cliente-avatar" style={{ width: '48px', height: '48px' }}>
                        <i className="fas fa-user text-secondary fs-5"></i>
                    </div>
                    <Badge bg="light" text="secondary" className="fw-bold rounded-pill border">
                        #{cliente?.id || '?'}
                    </Badge>
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
                
                <Button 
                    as={Link} 
                    to={`/clientes/${cliente?.id}`} 
                    variant="light" 
                    className="w-100 rounded-pill fw-semibold btn-ficha-custom mt-auto shadow-sm"
                >
                    Ver Ficha Completa
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ClienteCard;