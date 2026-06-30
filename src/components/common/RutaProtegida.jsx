import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

const RutaProtegida = () => {
    const { admin } = useContext(AdminContext);

    if (admin === null) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default RutaProtegida;