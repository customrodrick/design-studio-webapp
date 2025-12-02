import { serviceItems } from '../../data';

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-bg-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-accent-biege">
                    These are Our <span className="text-text-dark">Services</span>
                </h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="bg-bg-card rounded-2xl shadow-md p-8 flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                            <img src={`/images/${item.media}`} alt={item.desc} className="w-full h-[25vh] object-cover rounded-xl mb-5" />
                            <p className="text-accent-biege text-lg text-center font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
