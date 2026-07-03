import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer'; 

const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light" style={{ backgroundColor: '#f8f9fa' }}>
            
            <Header />
            <main className="flex-grow-1 position-relative">
                <Outlet />
            </main>

            <Footer />
            
        </div>
    );
};

export default Layout;