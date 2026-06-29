import { Form, InputGroup, Button } from 'react-bootstrap';

const BuscadorClientes = ({ busqueda, setBusqueda, disabled }) => {
    return (
        <InputGroup className="search-container shadow-sm py-1">
            <InputGroup.Text className="bg-transparent border-0 text-primary ps-4">
                <i className="fas fa-search opacity-75"></i>
            </InputGroup.Text>
            <Form.Control 
                type="text" 
                placeholder="Buscar por apellido o ciudad..." 
                className="border-0 shadow-none py-2 search-input text-dark fw-medium" 
                value={busqueda} 
                onChange={(e) => setBusqueda(e.target.value)} 
                disabled={disabled} 
            />
            {busqueda && (
                <Button 
                    variant="link" 
                    className="border-0 text-secondary pe-4 text-decoration-none btn-clear-search" 
                    onClick={() => setBusqueda('')}
                >
                    <i className="fas fa-times-circle fs-5"></i>
                </Button>
            )}
        </InputGroup>
    );
};

export default BuscadorClientes;