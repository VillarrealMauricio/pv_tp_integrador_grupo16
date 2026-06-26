import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout'; 
import DashboardPrincipal from './views/DashboardPrincipal'; 
import ListaClientes from './views/ListaClientes';
import DetalleCliente from './views/DetalleCliente';
import { Login } from './views/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='login' element={<Login />} />
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPrincipal />} />
        <Route path="clientes" element={<ListaClientes />} />
        <Route path="clientes/:id" element={<DetalleCliente/>} />  
      </Route>
    </Routes>
  );
}

export default App;