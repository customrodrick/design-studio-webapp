import { membershipItems } from '../../data';

const MembershipSection = () => {
    return (
        <section id="membership" className="py-20 bg-bg-card text-text-primary">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4 text-accent-biege">
                    Innovation Hub <span className="text-text-dark">Memberships</span>
                </h2>
                <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-lg">
                    Join our Innovation Hub and unlock resources, mentorship, and tools to grow your ideas.
                    Choose the membership that best fits your journey — whether you're an internal student, external student, or a passionate innovator.
                </p>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    {/* Internal Student */}
                    <div className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-accent-green transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-accent-green mb-2">Internal Student</h3>
                        <p className="text-accent-biege mb-4">Full Access • <span className="text-accent-green">Best Value</span></p>
                        <ul className="text-left mb-6 max-w-xs text-text-secondary text-base leading-relaxed space-y-2">
                            {membershipItems.premium.map((item, index) => (
                                <li key={index}><i className="far fa-check-circle text-accent-green mr-2"></i> {item.listItem}</li>
                            ))}
                        </ul>
                        <a href="#" className="w-full py-3 rounded-full font-semibold bg-accent-green text-white hover:bg-accent-biege hover:text-accent-green-hover transition-colors">Join Now</a>
                    </div>

                    {/* External Student */}
                    <div className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-bg-secondary transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-accent-green mb-2">External Student</h3>
                        <p className="text-accent-biege mb-4">Expanded Access</p>
                        <ul className="text-left mb-6 max-w-xs text-text-secondary text-base leading-relaxed space-y-2">
                            {membershipItems.standard.map((item, index) => (
                                <li key={index}><i className="far fa-check-circle text-accent-green mr-2"></i> {item.listItem}</li>
                            ))}
                        </ul>
                        <a href="#" className="w-full py-3 rounded-full font-semibold bg-accent-green text-white hover:bg-accent-biege hover:text-accent-green-hover transition-colors">Join Now</a>
                    </div>

                    {/* Non-Student */}
                    <div className="bg-bg-primary rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-accent-biege transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-accent-green mb-2">Non-Student</h3>
                        <p className="text-accent-biege mb-4">Community Access</p>
                        <ul className="text-left mb-6 max-w-xs text-text-secondary text-base leading-relaxed space-y-2">
                            {membershipItems.basic.map((item, index) => (
                                <li key={index}><i className="far fa-check-circle text-accent-green mr-2"></i> {item.listItem}</li>
                            ))}
                        </ul>
                        <a href="#" className="w-full py-3 rounded-full font-semibold bg-accent-green text-white hover:bg-accent-biege hover:text-accent-green-hover transition-colors">Join Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipSection;
