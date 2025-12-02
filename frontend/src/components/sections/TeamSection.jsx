const TeamSection = () => {
    const team = [
        { name: 'Ethan Mwale', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6' },
        { name: 'Chikondi Phiri', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6' },
        { name: 'Grace Banda', role: 'Software Developer', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39' },
        { name: 'Linda Jere', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },
        { name: 'Brian Nkhoma', role: 'Hardware Specialist', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36' },
        { name: 'Esther Chirwa', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    ];

    return (
        <section id="team" className="py-20 bg-bg-card text-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-10 text-accent-biege">Meet Our Team</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, index) => (
                        <div key={index} className="bg-bg-primary rounded-2xl shadow-lg p-6 flex flex-col items-center">
                            <img src={member.image} alt={member.name} className="w-full h-56 object-cover rounded-xl mb-4" />
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-1 text-accent-biege">{member.name}</h3>
                                <p className="text-text-dark font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
