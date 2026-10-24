import Hero from '../components/Hero';
import TrustMarquee from '../components/TrustMarquee';
import ITServices from '../components/ITServices';
import ProductsEcosystem from '../components/ProductsEcosystem';
import IndustriesWeServe from '../components/IndustriesWeServe';
import TechStacksWeUse from '../components/TechStacksWeUse';
import ProjectEstimator from '../components/ProjectEstimator';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import { useNavigate } from 'react-router-dom';
import { CTASection } from '../components/ui';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <div className="relative z-10 bg-[var(--background)]">
        <TrustMarquee />
        <ProductsEcosystem />
        <ITServices />
        <CTASection
          title="Ready to Transform Your Business? Contact Us Today!"
          description="We are here to help you achieve your goals. Contact us today to get started."
          buttonText="Contact Us"
          buttonSecondary="Explore Services"
          onButtonClick={() => navigate('/company')}
          onSecondaryClick={() => navigate('/services')}
        />
        <IndustriesWeServe />
        <TechStacksWeUse />
        <ProjectEstimator />
        <CaseStudies />
        <Testimonials />
        <Blog />
      </div>
    </>
  );
}
