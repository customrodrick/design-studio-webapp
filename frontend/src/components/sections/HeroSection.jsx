const HeroSection = () => {
    return (
        <section id="home" className="relative flex items-center justify-center text-center min-h-screen pt-32 pb-12 bg-cover bg-center bg-fixed bg-no-repeat text-text-primary overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(31, 42, 68, 0.8), rgba(45, 59, 85, 0.8)), url('/images/background.jpg')" }}>
            {/* Backdrop blur effect */}
            <div className="absolute inset-0 backdrop-blur-[6px] z-0"></div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-bg-card shadow-2xl rounded-3xl p-10 flex flex-col items-center">
                    <img src="/images/omni.png" alt="Mubas Logo" className="w-32 mb-8" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-accent-green">
                        MUBAS <span className="text-text-dark">Design</span> Studio
                    </h1>
                    <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                        <b>Your <span className="text-text-dark">Innovative</span> Place - </b>
                        This is where imagination meets execution, ideas become impact, and collaboration fuels creation. Here, visionaries transform possibilities into groundbreaking realities. Innovate. Inspire. Ignite.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                        <a href="/auth/signup.html" className="min-w-[120px] px-8 py-3 text-base rounded-full font-semibold text-center bg-accent-green text-white hover:bg-accent-green-hover transition-colors">
                            Register
                        </a>
                        <a href="/auth/login.html" className="min-w-[120px] px-8 py-3 text-base rounded-full font-semibold text-center bg-transparent border-2 border-accent-green text-accent-green hover:bg-accent-green-hover hover:text-white transition-colors">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
