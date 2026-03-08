import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import OurWork from '../components/home/OurWork';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASectio';
import ServicesPreview from '../components/home/ServicesPreview';
import ServicesChecklist from '../components/home/ServicesChecklist';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden bg-white min-h-screen">
      <HeroSection />
      <OurWork />
      <TestimonialsSection />
      <CTASection 
        title="Ready to Transform Your Space?"
        subtitle="Let's create something beautiful together"
        buttonText="I WANT TO PROCEED"
        secondaryText="Click the button to watch a free tutorial"
        darkBackground={true}
      />
      <ServicesPreview />
      <ServicesChecklist />
      {/* <CTASection 
        title="Let's Start Your Design Journey"
        subtitle="Schedule a free consultation with our team"
        buttonText="GET IN TOUCH"
        secondaryText="No obligation, just a conversation about your dreams"
        darkBackground={false}
      /> */}
    </div>
  );
};

export default Home;