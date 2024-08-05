import Image from 'next/image'
import React from 'react'
Image
const HeroSection = () => {
  return (
    <section className="flex items-center justify-between pt-20">
    <div className="text-white w-full lg:w-1/2 px-8 lg:px-16 flex flex-col justify-items-center fade-in-left">
      <h2 className="text-5xl font-bold">Harness the Power of the Sun</h2>
      <p className="text-2xl mt-4">Professional solar panel installation services</p>
      <a href="#contact" className="custom-button mt-8 text-center inline-block text-green-950 font-bold py-3 px-1 rounded">
        <span className="relative z-10">Get a Quote</span>
      </a>
    </div>
    <div className="px-4 fade-in-right">
      <Image 
        src="/evgeniy-alyoshin-2ASQyjafflo-unsplash.jpg" 
        alt="Solar Panels"
        objectFit="cover" 
        className="rounded-xl"
        width={800}
        height={800}
      />
    </div>
  </section>

  )
}

export default HeroSection
