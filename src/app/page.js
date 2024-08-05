'use client'
import TestimonialsSlider from '../components/TestimonialSlider'; 
import AboutSection from '@/components/AboutUsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection'; 
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ContactUsSection from '@/components/ContactUsSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div>


      <main className='bg-green-950'>
        <Header/>
        <HeroSection />
        <div className='bg-green-950'>
          <AboutSection />
          <WhyChooseUsSection />
          <ServicesSection />
          <TeamSection />
          <TestimonialsSlider />
          <ProjectsSection/>
          <ContactUsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
