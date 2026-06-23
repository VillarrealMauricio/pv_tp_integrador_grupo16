import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout'; 
import DashboardPrincipal from './views/DashboardPrincipal'; 
import ListaClientes from './views/ListaClientes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPrincipal />} />
        <Route path="clientes" element={<ListaClientes />} />
      </Route>
    </Routes>
  );
}

export default App;