import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { FaCertificate, FaRecycle, FaUserCheck, FaLightbulb, FaShieldAlt, FaHandHoldingHeart } from 'react-icons/fa';
import { GrForwardTen } from 'react-icons/gr';

function AboutSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  return (
    <section id="about" className="pt-20 px-20 bg-green-950">
      <h3
        ref={(el) => el && elementsRef.current.push(el)}
        className={`text-4xl font-bold text-center mb-8 text-white ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
      >
        What is Solar Panel Pro?
      </h3>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-black">
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`md:col-span-3 flex justify-center items-center p-8 bg-gradient-to-b from-yellow-500 to-yellow-700 shadow-lg rounded-xl ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <h3 className="text-4xl font-bold text-center">About Us</h3>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-1 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <GrForwardTen className="text-black mr-2" size={38}/>
            <p className="text-lg">Decade of experience.</p>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-1 md:row-span-2 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <FaCertificate className="text-black mr-2" size={38}/>
            <p className="text-lg">Certified professionals.</p>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-2 md:row-span-2 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <FaRecycle className="text-black mr-2" size={38}/>
            <p className="text-lg">Renewable energy for all.</p>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-2 md:row-span-2 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <FaHandHoldingHeart className="text-black mr-2" size={38}/>
            <p className="text-lg">Comprehensive services.</p>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-1 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <FaLightbulb className="text-black mr-2" size={38}/>
            <p className="text-lg">Harness the sun&apos;s power.</p>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-1 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <FaShieldAlt className="text-black mr-2" size={38}/>
            <p className="text-lg">Guiding you every step.</p>
          </div>
          <div
            ref={(el) => el && elementsRef.current.push(el)}
            className={`p-6 bg-gradient-to-bl from-yellow-500 to-yellow-700 shadow-lg rounded-xl flex items-center md:col-span-1 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
          >
            <FaUserCheck className="text-black mr-2 text-right" size={38}/>
            <p className="text-lg ">Customer-centric approach.</p>
          </div>
        </div>
      </div> 
      <section
        ref={(el) => el && elementsRef.current.push(el)}
        className={`text-center text-white bg-green-950 py-16 border border-green-950 ${hasAnimated ? 'fade-in-up' : 'opacity-0'}`}
      >
        <h3 className="text-4xl font-bold mb-4">
          Join <span className='text-yellow-600'>+<CountUp end={1000} duration={2} /></span> Satisfied Customers with Just One Click
        </h3>
        <p className="text-lg text-white">Experience the benefits of solar energy and join a growing community of satisfied clients.</p>
        <a href="#contact" className="custom-button mt-4 inline-block text-green-950 text-center font-bold py-3 px-6 rounded">
          <span className="relative z-10">Get Started!</span>
        </a>
      </section>
    </section>
  );
}

export default AboutSection;
