import React from 'react'
import { FaFacebook, FaInstagram,} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-950  text-gray-400 pb-2">
    <div className="container mx-auto text-center">
      <div className="">
        <p className="text-sm">&copy; 2024 SolarPanelPro. All rights reserved.</p>
      </div>
      <div className="">
        <p className="text-sm">
          <a href="#privacy-policy" className="hover:underline">Privacy Policy</a> | 
          <a href="#terms-of-service" className="hover:underline">Terms of Service</a>  
        </p>
      </div>
      <div className="flex flex-col items-center mb-2 ">
        <p className="text-sm mb-2">Follow us on social media:</p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <div>
        <p className="text-sm">Contact us at <a href="mailto:info@solarpanelpro.com" className="text-yellow-500 underline">info@solarpanelpro.com</a></p>
      </div>
      <div>
        <p className="text-sm">Designed and Developed by <a href="mailto:info@solarpanelpro.com" className="text-yellow-500 underline">Francisco López Villa</a></p>
      </div>
    </div>
  </footer>
  
  
  )
}

export default Footer
