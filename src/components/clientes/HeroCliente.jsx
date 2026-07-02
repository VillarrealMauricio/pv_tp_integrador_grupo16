import { Card, Badge } from 'react-bootstrap';

const HeroCliente = ({ firstname, lastname, email, id }) => {
    return (
        <Card className="border-0 shadow-sm rounded-4 mb-4" style={{ backgroundColor: 'var(--bs-primary)', backgroundImage: 'linear-gradient(45deg, #0369a1, #0ea5e9)' }}>
            <Card.Body className="p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4 text-white position-relative overflow-hidden">
                <i className="fas fa-id-card position-absolute opacity-10" style={{ fontSize: '15rem', right: '-2rem', bottom: '-3rem' }}></i>

                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center shadow-lg" style={{ width: '100px', height: '100px', zIndex: 1 }}>
                    <i className="fas fa-user text-primary" style={{ fontSize: '3rem' }}></i>
                </div>

                <div className="text-center text-md-start" style={{ zIndex: 1 }}>
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-1">
                        <h2 className="fw-bold text-white text-capitalize mb-0">{firstname} {lastname}</h2>
                        <Badge bg="light" text="primary" className="rounded-pill ms-2 shadow-sm fs-6">#{id}</Badge>
                    </div>
                    <p className="mb-0 opacity-75 fs-5"><i className="fas fa-envelope me-2"></i>{email}</p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default HeroCliente;