const SupportSection = () => {
    return (
        <section id="support" className="py-20 bg-bg-secondary text-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6 text-accent-biege">
                    Have <span className="text-text-dark">Questions</span>? We Can Help
                </h2>
                <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-lg">
                    Our dedicated team is available 24/7 to assist with your needs. Contact us via phone, email, or visit our office in Blantyre.
                </p>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-8">
                    <div className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <i className="fas fa-phone text-4xl text-accent-green mb-5"></i>
                        <h3 className="text-xl font-semibold mb-3 text-accent-biege">Call</h3>
                        <p className="text-text-secondary text-base">
                            +265-883 65 91 202
                        </p>
                    </div>
                    <div className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <i className="fas fa-envelope text-4xl text-accent-green mb-5"></i>
                        <h3 className="text-xl font-semibold mb-3 text-accent-biege">Email</h3>
                        <p className="text-text-secondary text-base">
                            Reach out to us at <a href="mailto:designstudio@mubas.ac.mw" className="text-text-dark hover:underline">designstudio@mubas.ac.mw</a>.
                        </p>
                    </div>
                    <div className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <i className="fas fa-map-marker-alt text-4xl text-accent-green mb-5"></i>
                        <h3 className="text-xl font-semibold mb-3 text-accent-biege">Visit</h3>
                        <p className="text-text-secondary text-base">
                            MUBAS Main Campus, <br />Blantyre
                        </p>
                    </div>
                </div>
                <a href="mailto:designstudio@mubas.ac.mw" className="inline-block px-8 py-3 rounded-full font-semibold bg-accent-green text-white hover:bg-accent-biege hover:text-accent-green-hover transition-colors mt-8">
                    Contact Support <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>
    );
};

export default SupportSection;
