// Archivo: src/views/PerfilAdmin.jsx
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AdminContext } from '../context/AdminContext';

// Importamos tus nuevos componentes modularizados
import TarjetaPerfil from '../components/Perfil/TarjetaPerfil';
import MetricasActividad from '../components/Perfil/MetricasActividad';
import ModulosSupervision from '../components/Perfil/ModulosSupervision';

const PerfilAdmin = () => {
    const { admin } = useContext(AdminContext);

    const nombreAdmin = admin?.nombre || "Usuario Invitado";
    const sectorAdmin = admin?.sector || "Gerencia";

    const getPrivilegios = (sector) => {
        const sectorMinuscula = (sector || '').toLowerCase();
        if (sectorMinuscula.includes('soporte')) {
            return { color: 'info', icono: 'fas fa-tools', texto: 'Soporte Técnico (Acceso Nivel 2)' };
        } else if (sectorMinuscula.includes('gerencia')) {
            return { color: 'success', icono: 'fas fa-shield-alt', texto: 'Control Total (Root / Admin)' };
        } else {
            return { color: 'secondary', icono: 'fas fa-user-lock', texto: 'Acceso Estándar (Solo Lectura)' };
        }
    };

    const privilegios = getPrivilegios(sectorAdmin);

    return (
        <Container className="py-4 px-4">
            <div className="mb-4 d-flex align-items-center gap-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', color: '#0369a1' }}>
                    <i className="fas fa-user-shield fs-4"></i>
                </div>
                <div>
                    <h2 className="fw-bold text-dark mb-0">Mi Perfil Administrativo</h2>
                    <p className="text-secondary mb-0">Credenciales oficiales, nivel de acceso y rendimiento en el sistema.</p>
                </div>
            </div>

            <Row className="g-4">
                <Col xs={12} lg={5}>
                    <TarjetaPerfil nombreAdmin={nombreAdmin} sectorAdmin={sectorAdmin} privilegios={privilegios} />
                </Col>

                <Col xs={12} lg={7}>
                    <MetricasActividad />
                    
                    <ModulosSupervision />
                </Col>
            </Row>
        </Container>
    );
};

export default PerfilAdmin;