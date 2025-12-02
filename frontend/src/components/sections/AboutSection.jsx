const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-slate-800 text-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 text-accent-biege">
                    About <span className="text-text-dark">Design</span>Studio
                </h2>
                <p className="text-text-secondary mb-6 text-lg max-w-3xl mx-auto">
                    The MUBAS Design Studio is a place for engineers and entrepreneurs to come and build solutions to real-world problems in Malawi.
                </p>
                <p className="text-text-secondary mb-8 text-base max-w-3xl mx-auto">
                    Members are welcome to use our equipment (3D printers, laser cutter, PCB printer, etc.) and borrow materials.
                </p>
                <div className="mb-8 flex justify-center gap-4">
                    <a href="https://x.com/mubas_ds/" target="_blank" rel="noreferrer" className="text-text-primary text-2xl hover:text-accent-green transition-colors">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/mubasds/" target="_blank" rel="noreferrer" className="text-text-primary text-2xl hover:text-accent-green transition-colors">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/mubas_ds/" target="_blank" rel="noreferrer" className="text-text-primary text-2xl hover:text-accent-green transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <p className="text-text-secondary mb-8 text-sm">
                    MUBAS DesignStudio, Blantyre, Malawi. © 2025 DesignStudio. All rights reserved.
                </p>
                <a href="mailto:designstudio@mubas.ac.mw" className="inline-block px-8 py-3 rounded-full font-semibold bg-accent-green text-white hover:bg-accent-biege hover:text-accent-green-hover transition-colors">
                    Reach Out Today <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
