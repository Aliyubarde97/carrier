import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import X from '../../assets/X.svg'
import {EnvelopeSimple, WhatsappLogo } from "phosphor-react"


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white p-10">
      <div className="mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="col-span-1 md:col-span-1">
             <Link to="/home"><img src={Logo} alt="logo"  className="[w-50px] h-20"   /></Link>
            <p className="text-gray-300">
             Bridging ambition and opportunity.
            </p>
            <p className="text-gray-300 mt-2">
              We post verified jobs, scholarships, internships, and mentorship programs
            </p>
            <p className="text-gray-300 mt-2">
             Contact Us
            </p> 
            <a href="careerdoor0@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:underline"><EnvelopeSimple size={24} weight="bold" /><span>careerdoor0@gmail.com</span></a>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/home"  className="hover:text-gray-300 mb-2">Home</Link ></li>
              <li className="mb-2"><Link to="/Jobs" className="hover:text-gray-300 mb-2">Jobs</Link></li>
              <li className="mb-2"><Link to="/SchoolarShip" className="hover:text-gray-300 mb-2">Scholarship</Link></li>
              <li className="mb-2"><Link to="/SchoolarShip" className="hover:text-gray-300 mb-2">Internship</Link></li>
              <li className="mb-2"><Link to="/AboutUs" className="hover:text-gray-300 mb-2">About us</Link></li>
              <li className="mb-2"><Link to="/Terms" className="hover:text-gray-300 mb-2">Terms</Link></li>
              <li className="mb-2"><Link to="/Privacy" className="hover:text-gray-300 mb-2">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* More Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Your Complete Guide</h3>
            <ul>
              <li className="mb-2"><Link to="/CoverLetter" className="hover:text-gray-300 mb-2"> Winning Cover Letter</Link></li>
              <li className="mb-2"><Link to="/CvPage"  className="hover:text-gray-300 mb-2">Winning CV</Link ></li>
              <li className="mb-2"><Link to="/SOP" className="hover:text-gray-300 mb-2">Powerful SOP</Link></li>
              <li className="mb-2"><Link to="/IntershipGuide" className="hover:text-gray-300 mb-2">Scholarship Internship</Link></li>
              <li className="mb-2"><Link to="/SkillsInternship" className="hover:text-gray-300 mb-2">Skills Internship</Link></li>
              <li className="mb-2"><Link to="/Contact_us" className="hover:text-gray-300 mb-2">Contact US</Link></li>
               
            </ul>
          </div>

          {/* Social Media Section */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>

           
           
          </div> */}
          <div className="bg-gray-100 py-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h2>
        <p className="text-gray-600 mb-6">Stay connected with us on social media!</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com" // Replace with your actual X profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black-500 transition-colors duration-300"
            aria-label="Follow us on X"
          >
          <img src={X} alt=""  className="w-8"/>
          </a>
          <a
            href="https://wa.me/yourphonenumber" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-500 transition-colors duration-300"
            aria-label="Contact us on WhatsApp"
          >
            <WhatsappLogo size={32} weight="fill" />
          </a>
          <a
            href="mailto:youremail@example.com" // Replace with your actual email address
            className="text-gray-700 hover:text-red-600 transition-colors duration-300" // Gmail hover color
            aria-label="Email us"
          >
            <EnvelopeSimple size={32} weight="fill" />
          </a>
        </div>
      </div>
    </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CareerDoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
