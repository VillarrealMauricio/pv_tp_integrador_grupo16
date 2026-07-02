import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/dashboard.css';
import TarjetasMetricas from '../components/dashboard/TarjetasMetricas';
import RegistroActividad from '../components/dashboard/RegistroActividad';
import EstadoServidor from '../components/dashboard/EstadoServidor';
import { ModalProyectos, ModalTareas, ModalAlertas } from '../components/dashboard/ModalesDashboard';

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

            <TarjetasMetricas 
                cargandoClientes={cargandoClientes}
                totalClientes={totalClientes}
                proyectosCount={proyectos.length}
                tareasPendientesCount={tareasPendientesCount}
                alertasActivasCount={alertasActivasCount}
                onNavigateClientes={() => navigate('/clientes')}
                onShowProyectos={() => setShowProyectos(true)}
                onShowTareas={() => setShowTareas(true)}
                onShowAlertas={() => setShowAlertas(true)}
            />

            <Row className="g-4">
                <Col xs={12} lg={8}>
                    <RegistroActividad />
                </Col>
                <Col xs={12} lg={4}>
                    <EstadoServidor alertasActivasCount={alertasActivasCount} />
                </Col>
            </Row>
            <ModalProyectos show={showProyectos} onHide={() => setShowProyectos(false)} proyectos={proyectos} />
            <ModalTareas show={showTareas} onHide={() => setShowTareas(false)} tareas={tareas} toggleTarea={toggleTarea} />
            <ModalAlertas show={showAlertas} onHide={() => setShowAlertas(false)} alertas={alertas} resolverAlerta={resolverAlerta} />

        </Container>
    );
};

export default DashboardPrincipal;