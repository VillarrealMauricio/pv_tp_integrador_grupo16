import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [admin, setAdmin] = useState(() => {
        const sesionGuardada = localStorage.getItem("admin_sesion");
        return sesionGuardada ? JSON.parse(sesionGuardada) : null;
    });

    const iniciarSesion = (datosAdmin) => {
        setAdmin(datosAdmin);
    };

    const cerrarSesion = () => {
        setAdmin(null);
    };

    useEffect(() => {
        if (admin === null) {
            localStorage.removeItem("admin_sesion");
        } else if (admin.recordar) {
            localStorage.setItem("admin_sesion", JSON.stringify(admin));
        }
    }, [admin]);

    return (
        <AdminContext.Provider value={{ admin, iniciarSesion, cerrarSesion }}>
            {children}
        </AdminContext.Provider>
    );
};