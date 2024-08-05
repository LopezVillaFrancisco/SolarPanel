'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaSolarPanel, FaDollarSign } from 'react-icons/fa';
import SwiperCore, { Pagination } from 'swiper';
import Image from 'next/image';

SwiperCore.use([Pagination]);

const projects = [
  {
    image: '/project1.jpg',
    title: 'Project Alpha',
    description: 'A description of Project Alpha.',
    panels: 20,
    savings: '$2,000',
    images: ['/project1.jpg', '/project2.jpg'], 
  },
  {
    image: '/project2.jpg',
    title: 'Project Beta',
    description: 'A description of Project Beta.',
    panels: 30,
    savings: '$3,500',
    images: ['/project1.jpg', '/project2.jpg'], 
  },
  {
    image: '/project2.jpg',
    title: 'Project Charlie',
    description: 'A description of Project Charlie.',
    panels: 30,
    savings: '$3,500',
    images: ['/project1.jpg', '/project2.jpg'], 
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-8">Our Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-yellow-500 text-lg font-bold">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h4 className="text-2xl font-bold mb-4 text-center">{selectedProject.title}</h4>
            <p className="mb-4 text-center">{selectedProject.description}</p>
            <div className="mb-4">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full"
              >
                {selectedProject.images?.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image src={img} alt={`${selectedProject.title} image`} className="w-full h-96 object-cover rounded-lg" width={500} height={350} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-4">
              <div className="flex items-center mb-2 lg:mb-0">
                <FaSolarPanel className="text-yellow-500 mr-2" size={32}/>
                <span>{selectedProject.panels} Panels Installed</span>
              </div>
              <div className="flex items-center">
                <FaDollarSign className="text-yellow-500 mr-2" size={32}/>
                <span>Saved {selectedProject.savings}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
