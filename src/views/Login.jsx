import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from '../css/Login.module.css';
import logoGrafico from '../assets/logo-grafico.png';
import { AdminContext } from '../context/AdminContext';

export const Login = () => {
    const { iniciarSesion } = useContext(AdminContext);
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');
    const [validated, setValidated] = useState(false);
    const [recordar, setRecordar] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            iniciarSesion({ nombre, sector, recordar });
            navigate('/dashboard')
        }

        setValidated(true);
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={nombre}
                            autoFocus
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresá un nombre.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Sector de la Empresa:</Form.Label>
                        <Form.Select
                            required
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                        >
                            <option value="">Elige un sector</option>
                            <option value="Gerencia">Gerencia</option>
                            <option value="Soporte">Soporte</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Por favor seleccioná un sector.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 form-check">
                        <Form.Check
                            type="checkbox"
                            id="checkRecordar"
                            label="Recordar sesión"
                            checked={recordar}
                            onChange={(e) => setRecordar(e.target.checked)}
                        />
                    </Form.Group>
                    <Button className={style.botonLogin} type="submit">Ingresar</Button>
                </Form>
            </main>
        </div>
    )
}
