import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    
    const sesionGuardada = localStorage.getItem("admin_sesion");

    const [admin, setAdmin] = useState(sesionGuardada ? JSON.parse(sesionGuardada) : null);

    const iniciarSesion = (datosAdmin) => {
        setAdmin(datosAdmin);
    };

     //Botón del Header (borra todo y expulsa al /login)
    const cerrarSesion = () => {
        localStorage.removeItem("admin_sesion");
        setAdmin(null);
    };

    useEffect(() => {
        if (admin) {
            localStorage.setItem("admin_sesion", JSON.stringify(admin));
        }
    }, [admin]); // Se activa automáticamente cada vez que 'admin' cambia

    return (
        <AdminContext.Provider value={{ admin, iniciarSesion, cerrarSesion }}>
            {children}
        </AdminContext.Provider>
    );
};