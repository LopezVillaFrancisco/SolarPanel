import React from 'react'
import { FaFacebook, FaInstagram,} from 'react-icons/fa';

const Header = () => {
  return (
    <div>
            <header className="text-white py-2 bg-opacity-70 flex flex-col items-center justify-center fade-in-top">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Follow us on</span>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-yellow-500 hover:text-yellow-600" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-yellow-500 hover:text-yellow-600" />
            </a>
          </div>
          <div className="text-right">
            <span>Give us a call: <a href="tel:+1234567890" className="text-yellow-500 hover:text-yellow-600">+1 (234) 567-890</a></span>
          </div>
        </div>
      </header>

      <header className="text-white py-4 flex items-center justify-center fade-in-top">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">SolarPanelPro</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="nav-link">About</a>
              </li>
              <li>
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li>
                <a href="#team" className="nav-link">Team</a>
              </li>
              <li>
                <a href="#testimonials" className="nav-link">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
