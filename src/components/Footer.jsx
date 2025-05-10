import { useState } from "react";
import { Menu, X } from "lucide-react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#060919] sticky top-0 z-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <img src="./icon/spam_icon.svg" alt="Spam Icon" className="w-24 h-24" />

            {/* Text Container */}
            <div className="flex flex-col items-start">
              <div className="text-3xl font-black text-white">SPAM</div>
              <p className="text-lg text-white">Smart Power Meter Measurement </p>
              <p className="text-lg text-white">and Monitoring</p>
            </div>
          </div>
                  
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold">
            <a href="#Home" className="text-white hover:text-teal-500">Home</a>
            <a href="#About" className="text-white hover:text-teal-500">About Us</a>
            <a href="#Device" className="text-white hover:text-teal-500">Device</a>
            <a href="#Feature" className="text-white hover:text-teal-500">Feature</a>
            <a href="#contact" className="text-white hover:text-teal-500">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
            <a href="#Home" className="text-white hover:text-teal-700">Home</a>
            <a href="#About" className="text-white hover:text-teal-700">About Us</a>
            <a href="#Device" className="text-white hover:text-teal-700">Device</a>
            <a href="#Feature" className="text-white hover:text-teal-700">Feature</a>
            <a href="#contact" className="text-white hover:text-teal-700">Contact</a>
        </div>
      )}

      <div className="py-8">
        <h2 className="max-w-7xl h-0.5 my-4 mx-auto bg-white opacity-40 rounded-md"></h2>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-white pb-8">
        <p className="text-xl font-extralight">&copy;Designed by Raindra Pramathana</p>
      </div>
    </nav>
  );
};

export default Footer;
