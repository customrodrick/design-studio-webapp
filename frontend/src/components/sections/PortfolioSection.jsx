const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-20 bg-bg-secondary">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <img src="/images/background.jpg" alt="Innovation Hub Team" className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4 text-accent-biege">
                        About <span className="text-text-dark">Our Innovation Hub</span>
                    </h2>
                    <p className="text-text-secondary mb-8 text-lg">
                        We are a community-driven Innovation Hub empowering students, entrepreneurs, and creators to bring their ideas to life.
                        Through access to modern facilities, mentorship, and collaborative spaces, we nurture innovation that drives real-world change.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-bg-primary rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-2 text-accent-biege">Our Mission</h3>
                            <p className="text-text-secondary text-base">
                                To inspire and equip young innovators with the tools, knowledge, and mentorship they need to solve real-world problems.
                            </p>
                        </div>
                        <div className="bg-bg-primary rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-2 text-accent-biege">Our Vision</h3>
                            <p className="text-text-secondary text-base">
                                To be Malawi’s leading center of innovation and creativity — fostering a future driven by technology, collaboration, and entrepreneurship.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2 text-accent-biege">What Sets Us Apart</h3>
                        <ul className="text-text-secondary mb-6 list-disc list-inside text-base space-y-2">
                            <li><i className="fa fa-rocket mr-2 text-accent-green"></i> State-of-the-art innovation labs and co-working spaces</li>
                            <li><i className="fa-solid fa-handshake mr-2 text-accent-green"></i> Strong network of mentors, experts, and investors</li>
                            <li><i className="fa-solid fa-lightbulb mr-2 text-accent-green"></i> Hands-on learning through workshops and hackathons</li>
                            <li><i className="fa-solid fa-earth-africa mr-2 text-accent-green"></i> Inclusive community supporting students and entrepreneurs alike</li>
                        </ul>
                        <a href="#membership" className="inline-block px-8 py-3 rounded-full font-semibold bg-accent-green text-white hover:bg-accent-biege hover:text-accent-green-hover transition-colors">
                            Learn More <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
