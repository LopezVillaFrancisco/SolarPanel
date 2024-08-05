'use client';
import React, { useEffect } from 'react';
import Script from 'next/script';

const ContactUsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white">Contact Us</h3>
        <p className="text-lg text-white mt-4">
          We&apos;re here to help you with any questions or concerns. Reach out to us today!
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start mt-8">
          <form className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-bold py-3 px-6 rounded hover:bg-yellow-700"
            >
              Send Message
            </button>
          </form>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/franlopezvilla"
              style={{ minWidth: '320px', height: '400px' }}
            ></div>
          </div>
        </div>

        <p className="text-lg text-white mt-4">
          Or reach us directly at{' '}
          <a
            href="mailto:info@solarpanelpro.com"
            className="text-white underline hover:text-yellow-500"
          >
            info@solarpanelpro.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactUsSection;
