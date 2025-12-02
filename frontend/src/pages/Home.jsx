import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import ServicesSection from '../components/sections/ServicesSection';
import MembershipSection from '../components/sections/MembershipSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ComponentsSection from '../components/sections/ComponentsSection';
import SupportSection from '../components/sections/SupportSection';
import TeamSection from '../components/sections/TeamSection';

import AboutSection from '../components/sections/AboutSection';

const Home = () => {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <BenefitsSection />
            <ServicesSection />
            <MembershipSection />
            <PortfolioSection />
            <ComponentsSection />

            {/* <TeamSection /> */}
            <AboutSection />
        </div>
    );
};

export default Home;
