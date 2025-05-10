import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#51495B] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="./icon/spam_icon.svg" alt="" className="w-12 h-12"/>
            <div className="text-3xl font-black text-white">SPAM</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 font-bold">
            <Link to="/" className="text-white hover:bg-teal-600 hover:text-stone-100 rounded-lg px-4 py-2 transition-all duration-300">Home</Link>
            <a href="#device" className="text-white hover:bg-teal-600 hover:text-stone-100 rounded-lg px-4 py-2 transition-all duration-300">Device</a>
            <a href="#aboutus" className="text-white hover:bg-teal-600 hover:text-stone-100 rounded-lg px-4 py-2 transition-all duration-300">About Us</a>
            <a href="#monitoring" className="text-white hover:bg-teal-600 hover:text-stone-100 rounded-lg px-4 py-2 transition-all duration-300">Feature</a>
            <a href="#contact" className="text-white hover:bg-teal-600 hover:text-stone-100 rounded-lg px-4 py-2 transition-all duration-300">Contact</a>
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
    </nav>
  );
};

export default Navbar;
