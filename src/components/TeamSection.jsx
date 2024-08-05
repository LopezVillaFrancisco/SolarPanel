import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section id="team" ref={sectionRef} className="pb-20">
      <div className="container mx-auto text-center">
        <h3
          className={`text-3xl font-bold text-white transition-opacity duration-700 ${
            hasAnimated ? 'opacity-100 fade-in-up' : 'opacity-0'
          }`}
        >
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            { name: 'John Doe', role: 'Founder & CEO', image: '/userprofile.jpg' },
            { name: 'Jane Smith', role: 'Chief Engineer', image: '/userprofile.jpg' },
            { name: 'Emily Johnson', role: 'Customer Service Manager', image: '/userprofile.jpg' }
          ].map((member, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 transition-opacity duration-700 ${
                hasAnimated ? 'opacity-100 fade-in-up' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }} 
            >
              <Image
                src={member.image}
                alt={`Team Member ${index + 1}`}
                className="rounded-full mx-auto"
                width={150}
                height={150}
              />
              <h4 className="text-2xl font-bold mt-4 text-green-950">{member.name}</h4>
              <p className="mt-2 text-yellow-500 font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
