import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'


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
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/home"  className="hover:text-gray-300 mb-2">Home</Link ></li>
              <li className="mb-2"><Link to="/Jobs" className="hover:text-gray-300 mb-2">Jobs</Link></li>
              <li className="mb-2"><Link to="/SchoolarShip" className="hover:text-gray-300 mb-2">Scholarship</Link></li>
              <li className="mb-2"><Link to="/Internship" className="hover:text-gray-300 mb-2">Internship</Link></li>
              <li className="mb-2"><Link to="/Mentorship" className="hover:text-gray-300 mb-2">MentorShip</Link></li>
            </ul>
          </div>

          {/* More Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Your Complete Guide</h3>
            <ul>
              <li className="mb-2"><Link to="/home"  className="hover:text-gray-300 mb-2">Winning CV</Link ></li>
              <li className="mb-2"><Link to="/Jobs" className="hover:text-gray-300 mb-2">Powerful SOP</Link></li>
              <li className="mb-2"><Link to="/SchoolarShip" className="hover:text-gray-300 mb-2">Successful Internship</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
           
           
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
