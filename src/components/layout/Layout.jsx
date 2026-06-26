import Header from './Header'; 
import Footer from './Footer'; 
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../common/CambioTema'; 

const Layout = () => {
    return (
        <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
            <Header />
            
            <main className="flex-grow-1">
                <Outlet /> 
            </main>

            <Footer />
            <ThemeToggle />
        </div>
    );
};

export default Layout;