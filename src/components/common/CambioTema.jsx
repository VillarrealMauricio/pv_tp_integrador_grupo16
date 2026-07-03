import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <Button 
            onClick={toggleTheme}
            className="rounded-circle shadow-lg d-flex justify-content-center align-items-center"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '55px',
                height: '55px',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                backgroundColor: theme === 'light' ? '#212529' : '#f8f9fa',
                borderColor: theme === 'light' ? '#212529' : '#f8f9fa',
                color: theme === 'light' ? '#f8f9fa' : '#212529'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title={theme === 'light' ? 'Activar Modo Oscuro' : 'Activar Modo Claro'}
        >
            {theme === 'light' ? (
                <i className="fas fa-moon fs-4"></i>
            ) : (
                <i className="fas fa-sun fs-4"></i>
            )}
        </Button>
    );
};

export default ThemeToggle;