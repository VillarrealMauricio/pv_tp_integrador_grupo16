import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<h2 className="text-center mt-5">Pantalla de Login (En construcción por otro equipo)</h2>} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        <Route path="dashboard" element={<h2 className="container">Dashboard Principal</h2>} />
        <Route path="clientes" element={<h2 className="container">Lista de Clientes (Módulo B)</h2>} />
        <Route path="clientes/:id" element={<h2 className="container">Ficha Profunda del Cliente (Módulo D)</h2>} />
      </Route>
    </Routes>
  );
}

export default App;