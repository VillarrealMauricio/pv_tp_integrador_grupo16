import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AjustesApariencia from '../components/configuration/AjustesApariencia';
import AjustesNotificaciones from '../components/configuration/AjustesNotificaciones';
import AjustesSeguridad from '../components/configuration/AjustesSeguridad';

const Configuracion = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode; 
        setIsDarkMode(newMode);    
        
        const newThemeString = newMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newThemeString);
        localStorage.setItem('theme', newThemeString);
    };

    return (
        <Container className="py-4 px-4 max-w-4xl">
            <div className="mb-4 d-flex align-items-center gap-3">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-cogs text-secondary fs-4"></i>
                </div>
                <div>
                    <h2 className="fw-bold text-dark mb-0">Ajustes del Sistema</h2>
                    <p className="text-secondary mb-0">Administrá tus preferencias y la seguridad de tu cuenta.</p>
                </div>
            </div>
            
            <Row className="g-4">
                <Col lg={12}>
                    <AjustesApariencia isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

                    <AjustesNotificaciones />

                    <AjustesSeguridad />
                </Col>
            </Row>
        </Container>
    );
};

export default Configuracion;