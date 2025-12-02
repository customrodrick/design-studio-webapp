import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// Placeholder Auth Pages
const Login = () => (
    <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-accent-green mb-4">Login</h1>
        <p className="text-text-secondary">Login page coming soon...</p>
    </div>
);

const Register = () => (
    <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-accent-green mb-4">Register</h1>
        <p className="text-text-secondary">Registration page coming soon...</p>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="auth/login.html" element={<Login />} />
                    <Route path="auth/signup.html" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
