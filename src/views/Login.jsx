import { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from '../css/Login.module.css';
import logoGrafico from '../assets/logo-grafico.png';
import { AdminContext } from '../context/AdminContext';

export const Login = () => {
    const { iniciarSesion } = useContext(AdminContext);

    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        iniciarSesion({ nombre, sector });
        navigate('/dashboard');
    };

    return (
        <div className={style.login}>
            <main className={style.mainLogin}>
                <img
                    src={logoGrafico}
                    alt="Logo Administrador"
                    className={style.imgLogin}
                />
                <h3 className={style.tituloH3}>Te damos la bienvenida</h3>
                <h5 className={style.tituloH5}>Ingresa tus credenciales.</h5>
                <Form 
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label className={style.credenciales}>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Pepe"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className={style.credenciales}>Sector de la Empresa:</Form.Label>
                        <Form.Select value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            id="selectSector" aria-label="Selecciona un sector"
                        >
                            <option value="">Elige un sector</option>
                            <option value="Gerencia">Gerencia</option>
                            <option value="Soporte">Soporte</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 form-check">
                        <Form.Check
                            type="checkbox"
                            id="checkRecordar"
                            label="Recordar sesión"
                        />
                    </Form.Group>
                    <button type="submit" className={`${style.botonLogin} btn btn-primary`}>
                        Ingresar
                    </button>
                </Form>
            </main>
        </div>
    )
}