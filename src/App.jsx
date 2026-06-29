import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout'; 
import DashboardPrincipal from './views/DashboardPrincipal'; 
import ListaClientes from './views/ListaClientes';
import DetalleCliente from './views/DetalleCliente';
import { Login } from './views/Login';
import PerfilAdmin from './views/PerfilAdmin';
import Configuracion from './views/Configuracion';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPrincipal />} />
        <Route path="/clientes" element={<ListaClientes />} />
        <Route path="/clientes/:id" element={<DetalleCliente/>} />  
        <Route path="/perfil" element={<PerfilAdmin />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Route>
    </Routes>
  );
}

export default App;