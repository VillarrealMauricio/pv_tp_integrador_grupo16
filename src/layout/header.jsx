import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/dashboard">
                    Panel de Control - <strong>Grupo 16</strong>
                </Navbar.Brand>
                
                <Navbar.Toggle />
                
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-4 text-white">
                        Conectado como: <span className="text-info">Usuario Temporal</span>{' '}
                        <Badge bg="secondary">Sector</Badge>
                    </Navbar.Text>
                    
                    <Button variant="outline-light" size="sm">
                        Cerrar Sesión
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;