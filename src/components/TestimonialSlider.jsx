'use client'

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const testimonials = [
  { text: "SolarPanelPro provided an excellent service from start to finish. The installation was smooth and professional, and we are already seeing the benefits of solar energy.", name: "Michael Brown", title: "Homeowner", source: "Google", rating: 5 },
  { text: "Their team was incredibly knowledgeable and efficient. We couldn't be happier with the result. Highly recommend for any commercial solar needs.", name: "Sarah Williams", title: "Business Owner", source: "Facebook", rating: 5 },
  { text: "We had an amazing experience with SolarPanelPro. The team was professional, and the installation process was seamless. Highly recommended!", name: "John Doe", title: "Homeowner", source: "Facebook", rating: 5 },
  { text: "SolarPanelPro exceeded our expectations. Their customer service is top-notch, and we are thrilled with our new solar system.", name: "Jane Smith", title: "Business Owner", source: "Google", rating: 5 },
  { text: "Great service and excellent products. Our energy bills have dropped significantly.", name: "Emily Davis", title: "Homeowner", source: "Facebook", rating: 5 },
  { text: "SolarPanelPro is the best in the business. Professional, efficient, and reliable.", name: "Robert Wilson", title: "Homeowner", source: "Google", rating: 5 },
  { text: "Amazing experience from start to finish. Highly recommend SolarPanelPro.", name: "Mary Johnson", title: "Homeowner", source: "Facebook", rating: 5 },
  { text: "Very satisfied with the service and the solar panels. Great investment.", name: "James Anderson", title: "Homeowner", source: "Facebook", rating: 5 },
  { text: "Top quality service and products. We are very happy with our solar panels.", name: "Patricia Brown", title: "Homeowner", source: "Google", rating: 5 },
  { text: "Professional team and excellent customer service. Highly recommend.", name: "Linda Taylor", title: "Homeowner", source: "Facebook", rating: 5 },
  { text: "SolarPanelPro made the process easy and stress-free. Great company.", name: "Barbara Martinez", title: "Homeowner", source: "Google", rating: 5 },
  { text: "Excellent installation and support. Our solar system works perfectly.", name: "William Hernandez", title: "Homeowner", source: "Facebook", rating: 5 },
];

const TestimonialsSlider = () => {
  const [grabbing, setGrabbing] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isInView && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial para verificar si la sección está en vista

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div>
      <h2 className='text-3xl text-white font-bold text-center'>Hear What Our Customers Have To Say</h2>
      <section id="testimonials" className="w-full py-10 bg-green-950 flex items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          pagination={{ clickable: true }}
          onMouseDown={() => setGrabbing(true)}
          onMouseUp={() => setGrabbing(false)}
          onMouseLeave={() => setGrabbing(false)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className={`swiper-container ${grabbing ? 'grabbing' : ''}`}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`flex justify-center items-center transform transition-transform duration-700 ${hasAnimated ? 'slide-in-left' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-semibold text-gray-500">{testimonial.source}</span>
                    <div className="ml-2 flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gray-300">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-md font-semibold mb-4">{testimonial.text}</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-yellow-500">{testimonial.name}</p>
                  <p className="text-lg font-bold">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default TestimonialsSlider;
