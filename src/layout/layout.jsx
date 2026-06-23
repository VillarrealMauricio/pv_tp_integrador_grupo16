import Header from './Header';
import Footer from './Footer'; 
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-vh-100 d-flex flex-column bg-light" style={{ backgroundColor: '#f8f9fa' }}>
            <Header />
            
            <main className="flex-grow-1">
                <Outlet /> 
            </main>

            <Footer />
        </div>
    );
};

export default Layout;