const ComponentsSection = () => {
    const components = [
        {
            category: 'tools',
            title: 'Tools & Workshop',
            desc: 'Construction, assembly, and testing tools for projects and hardware.',
            image: '/images/background.jpg'
        },
        {
            category: 'computing',
            title: 'Computing & Core Equipment',
            desc: 'Digital devices, networking gear, and essential software.',
            image: '/images/background.jpg'
        },
        {
            category: 'electronics',
            title: 'Electronic Components',
            desc: 'Microcontrollers, sensors, actuators, and circuit components.',
            image: '/images/background.jpg'
        },
        {
            category: 'materials',
            title: 'Materials & Consumables',
            desc: 'Prototyping materials, fasteners, and office supplies.',
            image: '/images/background.jpg'
        }
    ];

    return (
        <section id="components" className="py-20 bg-bg-card text-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-biege">
                    Components, Materials & <span className="text-text-dark">Equipment</span>
                </h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
                    {components.map((item, index) => (
                        <div key={index} className="bg-bg-primary rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-accent-biege">{item.title}</h3>
                            <p className="text-text-secondary text-base">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComponentsSection;
