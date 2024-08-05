import { useEffect, useRef, useState } from 'react';
import { FaHome, FaBuilding, FaTools, FaBolt, FaGlobe, FaWrench } from 'react-icons/fa';

const ServicesSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;

      const elementInView = elementsRef.current.some((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      });

      if (elementInView) {
        setHasAnimated(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section id="services" className="py-20 bg-green-950">
      <div className="container mx-auto text-center text-white">
        <h3 className={`text-3xl font-bold ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}>Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            { icon: <FaHome size={44} color='#d69e2e' />, title: 'Residential Installations', description: 'Custom solar solutions for your home.' },
            { icon: <FaBuilding size={44} color='#d69e2e' />, title: 'Commercial Installations', description: 'Scalable solutions for businesses.' },
            { icon: <FaTools size={44} color='#d69e2e' />, title: 'Maintenance & Repair', description: 'Keep your system running smoothly.' },
            { icon: <FaBolt size={44} color='#d69e2e' />, title: 'Energy Storage Solutions', description: 'Store energy for later use.' },
            { icon: <FaGlobe size={44} color='#d69e2e' />, title: 'Sustainability Consulting', description: 'Expert advice on sustainability practices.' },
            { icon: <FaWrench size={44} color='#d69e2e' />, title: 'Custom Solar Solutions', description: 'Tailored solar systems for unique needs.' },
          ].map((service, index) => (
            <div 
              key={index} 
              ref={(el) => el && elementsRef.current.push(el)}
              className={`p-6 bg-white text-center text-green-950 rounded-xl transform transition-transform duration-300 ${hasAnimated ? 'fade-in-up' : 'opacity-0'} hover:scale-105 hover:shadow-2xl hover:shadow-yellow-200`}
            >
              <div className="flex justify-center mb-4">
                <div className="text-6xl">{service.icon}</div>
              </div>
              <h4 className="text-2xl font-bold mt-4">{service.title}</h4>
              <p className="mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-2xl font-semibold">Want to get more information about our services?</p>
          <button className="custom-button mt-8 w-72 text-center inline-block text-green-950 font-bold py-3 px-2 rounded">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
