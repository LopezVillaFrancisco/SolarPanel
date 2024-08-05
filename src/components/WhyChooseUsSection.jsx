import { useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const WhyChooseUsSection = () => {
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
        // Remove event listener after animation is triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section className="bg-green-950 py-16">
      <div className="container flex flex-col lg:flex-row items-center justify-around">
        <div
          ref={(el) => el && elementsRef.current.push(el)}
          className={`lg:w-1/2 ${hasAnimated ? 'fade-in-left' : 'opacity-0'}`}
        >
          <h3 className="text-3xl font-bold text-center text-yellow-500 lg:text-left">Why Choose SolarPanelPro?</h3>
          <ul className="mt-8 text-lg space-y-6">
            <li className="flex items-center">
              <FaCheckCircle color='#d69e2e' size={32} className='mr-2' />
              <span className='font-semibold text-white text-2xl'>Rapid Support</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle color='#d69e2e' size={32} className='mr-2' />
              <span className='font-semibold text-white text-2xl'>Incredible Prices</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle color='#d69e2e' size={32} className='mr-2' />
              <span className='font-semibold text-white text-2xl'>High-Quality Installations</span>
            </li>
          </ul>
        </div>
        <div
          ref={(el) => el && elementsRef.current.push(el)}
          className={`${hasAnimated ? 'fade-in-right' : 'opacity-0'}`}
        >
          <Image src="/benjamin-jopen-p2GuLUu79Rg-unsplash.jpg" alt="Why Choose Us" className="rounded-lg shadow-lg" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
