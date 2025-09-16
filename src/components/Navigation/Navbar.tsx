import { List, X } from "phosphor-react";
import { Link } from 'react-router-dom';
import {useState} from "react";
import Logo from "../../assets/logo.png"
const Navbar = () => {

     const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  }
  return (
    <>
    
     <nav className="bg-gray-900 p-5 text-white">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-white font-bold text-xl">
          <Link to="/home"><img src={Logo} alt="logo"  className="[w-50px] h-20"   /></Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="text-gray-300 text-[20px] font-semibold hover:border-b-2 border-white">Home</Link>
          <Link to="/Jobs" className="text-gray-300 text-[20px] font-semibold  hover:border-b-2 border-white">Jobs</Link>
          <Link to="/SchoolarShip" className="text-gray-300 text-[20px] font-semibold hover:border-b-2 border-white">Scholarships</Link>
          <Link to="/Internship" className="text-gray-300 text-[20px] font-semibold hover:border-b-2 border-white">Internships</Link>
          <Link to="/Mentorship" className="text-gray-300 text-[20px] font-semibold hover:border-b-2 border-white">Mentorship</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <X size={32} className="h-6 w-6" />   : <List size={32} className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="/" className="block text-gray-300 text-[20px] font-semibold hover:border-b-2 w-1/2 md:w-full border-white py-2">Home</a>
          <a href="/about" className="block text-gray-300 text-[20px] font-semibold hover:border-b-2 w-1/2 md:w-full border-white py-2">About</a>
          <a href="/services" className="block text-gray-300 text-[20px] font-semibold hover:border-b-2 w-1/2 md:w-full border-white py-2">Services</a>
          <a href="/contact" className="block text-gray-300 text-[20px] font-semibold hover:border-b-2 w-1/2 md:w-full border-white py-2">Contact</a>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar