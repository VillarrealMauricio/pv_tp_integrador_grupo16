import { Form } from 'react-bootstrap';
import style from '../css/Login.module.css';
import logoGrafico from '../assets/logo-grafico.png';

export const Login = () => {
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
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className={style.credenciales}>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputNombre"
                            placeholder="Pepe"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className={style.credenciales}>Sector de la Empresa:</Form.Label>
                        <Form.Select id="selectSector" aria-label="Selecciona un sector">
                            <option>Elige un sector</option>
                            <option value="1">Gerencia</option>
                            <option value="2">Soporte</option>
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