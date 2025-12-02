import { benefitItems } from '../../data';

const BenefitsSection = () => {
    return (
        <section id="benefits" className="py-20 bg-bg-card text-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-biege flex items-center justify-center">
                    Why <span className="text-text-dark ml-2">Joining</span> Us?
                </h2>
                <p className="text-text-secondary mb-10 text-lg">
                    What's in it for you
                </p>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    {benefitItems.map((item, index) => (
                        <div key={index} className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                            <i className={`fas fa-${item.icon} text-4xl text-accent-green mb-5`}></i>
                            <h3 className="text-xl font-semibold mb-3 text-accent-biege">{item.title}</h3>
                            <p className="text-text-secondary text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
