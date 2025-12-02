import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary shadow-lg shadow-bg-secondary/50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-[1200px]">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#home" className="flex items-center no-underline" onClick={closeMobileMenu}>
                        <img src="/images/omni.png" alt="mubas Logo" className="w-12 mr-3" />
                        <span className="text-2xl font-bold text-accent-green">
                            Design<span className="text-text-dark">Studio</span>
                        </span>
                    </a>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6 items-center">
                    <a href="#benefits" className="text-accent-biege font-medium hover:text-accent-green-hover transition-colors">Benefits</a>
                    <a href="#services" className="text-accent-biege font-medium hover:text-accent-green-hover transition-colors">Services</a>
                    <a href="#membership" className="text-accent-biege font-medium hover:text-accent-green-hover transition-colors">Membership</a>
                    <a href="#about" className="text-accent-biege font-medium hover:text-accent-green-hover transition-colors">About</a>
                    <a href="#components" className="text-accent-biege font-medium hover:text-accent-green-hover transition-colors">Components</a>
                    <a href="#team" className="text-accent-biege font-medium hover:text-accent-green-hover transition-colors">Team</a>
                </div>

                {/* Auth Buttons & Hamburger */}
                <div className="flex items-center gap-4">
                    <a href="/auth/signup.html" className="hidden md:inline-block bg-accent-green text-white font-semibold px-4 py-2 rounded-full hover:bg-accent-biege hover:text-accent-green-hover transition-colors">
                        Register
                    </a>
                    <a href="/auth/login.html" className="hidden md:inline-block bg-text-primary text-bg-primary border border-text-primary font-semibold px-4 py-2 rounded-full hover:bg-accent-green hover:text-white transition-colors">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </a>

                    <button
                        className="md:hidden text-2xl text-accent-green cursor-pointer bg-transparent border-none"
                        onClick={toggleMobileMenu}
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[9999] bg-bg-primary/95 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full relative">
                    <button
                        className="absolute top-8 right-8 text-accent-biege text-4xl bg-transparent border-none cursor-pointer"
                        onClick={closeMobileMenu}
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    <nav className="flex flex-col items-center justify-center mt-20 w-full">
                        <a href="#benefits" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">Benefits</a>
                        <a href="#services" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">Services</a>
                        <a href="#membership" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">Membership</a>
                        <a href="#about" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">About</a>
                        <a href="#components" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">Components</a>
                        <a href="#team" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">Team</a>
                        <a href="/auth/signup.html" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold border-b border-border hover:bg-accent-green hover:text-white transition-colors">Register</a>
                        <a href="/auth/login.html" onClick={closeMobileMenu} className="block w-full text-center py-6 text-2xl text-accent-biege font-semibold hover:bg-accent-green hover:text-white transition-colors">Login</a>
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
