import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary font-sans">
            <Navbar />
            <main className="flex-grow pt-18">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
