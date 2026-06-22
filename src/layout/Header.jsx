import { Navbar, Container, Nav, Form, Button, Badge, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoGrafico from '../assets/logo-grafico.png';
import '../css/header.css'; 

const Header = () => {
    return (
        <Navbar expand="lg" className="header-glass py-3" sticky="top">
            <Container fluid className="px-4">
                
                <Navbar.Brand as={Link} to="/dashboard" className="d-flex align-items-center m-0 text-decoration-none gap-3">
                    <div style={{ width: '45px', height: '45px' }}>
                        <img 
                            src={logoGrafico} 
                            alt="Logo Administrador" 
                            className="img-fluid" 
                            style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(3.5)' }} 
                        />
                    </div>
                    <span className="fw-bold fs-4 text-dark tracking-tight">
                        Panel de Control
                    </span>
                </Navbar.Brand>
                
                <Navbar.Toggle className="border-0 shadow-none" />
                
                <Navbar.Collapse className="justify-content-between mt-3 mt-lg-0">
                    
                    <Nav className="mx-lg-auto gap-2 gap-lg-4 my-3 my-lg-0">
                        <Nav.Link as={Link} to="/dashboard" className="nav-link-custom fw-medium px-2 text-center">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/clientes" className="nav-link-custom fw-medium px-2 text-center">
                            Clientes
                        </Nav.Link>
                        <Nav.Link as={Link} to="/configuracion" className="nav-link-custom fw-medium px-2 text-center">
                            Formulario
                        </Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center gap-3 justify-content-center">
                        
                        <Button 
                            className="rounded-pill px-3 py-1.5 fw-medium d-flex align-items-center gap-1 border-0 shadow-sm"
                            style={{ 
                                backgroundColor: '#0369a1',
                                fontSize: '0.9rem',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-1">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            Nuevo
                        </Button>

                        <Form className="d-none d-xl-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar..."
                                className="border border-light-subtle bg-light shadow-none rounded-pill px-3 py-1"
                                aria-label="Search"
                                style={{ fontSize: '0.9rem' }}
                            />
                        </Form>

                        <div className="position-relative d-flex align-items-center justify-content-center text-secondary mx-1 icon-hover" style={{ cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle notification-dot">
                                <span className="visually-hidden">Nuevas alertas</span>
                            </span>
                        </div>

                        <div className="vr text-secondary mx-1 d-none d-lg-block opacity-25"></div>

                        <Dropdown align="end">
                            <Dropdown.Toggle as="div" className="d-flex align-items-center gap-3" style={{ cursor: 'pointer' }}>
                                
                                <div className="text-end d-none d-sm-block select-none">
                                    <div className="text-dark fw-semibold" style={{ fontSize: '0.95rem' }}>
                                        Usuario Temporal
                                    </div>
                                    <Badge bg="primary" bg-opacity="10" className="fw-medium text-uppercase px-2" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>
                                        Sector
                                    </Badge>
                                </div>

                                <div className="bg-light text-secondary rounded-circle d-flex align-items-center justify-content-center border icon-hover" style={{ width: '40px', height: '40px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </div>

                            </Dropdown.Toggle>

                            <Dropdown.Menu className="shadow-lg border-light-subtle rounded-3 mt-2 py-2" style={{ minWidth: '160px' }}>
                                <Dropdown.Item as={Link} to="/perfil" className="py-2 px-3 text-dark fw-medium" style={{ fontSize: '0.9rem' }}>
                                    Mi Perfil
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/configuracion" className="py-2 px-3 text-dark fw-medium" style={{ fontSize: '0.9rem' }}>
                                    Ajustes
                                </Dropdown.Item>
                                <Dropdown.Divider className="my-1 opacity-50" />
                                <Dropdown.Item className="py-2 px-3 text-danger fw-semibold" style={{ fontSize: '0.9rem' }}>
                                    Cerrar Sesión
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
