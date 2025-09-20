import { Link } from 'react-router-dom'
import Banner from './Banner'
import InternshipSection from './InternshipSection'
import Mentorship from './Mentorship'
import ScholarshipSection from './ScholarshipSection'
import WorkSection from './WorkSection'
// import Hero from "../../assets/hero.png"

const home = () => {
  return (
    <>
      
   
    <div className="relative bg-gray-900 h-screen flex items-center justify-center overflow-hidden">
      {/* Background shapes for visual interest - adjusted for dark theme */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center text-white p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp">
          Unlock Your Future: Jobs, Scholarships & Internships Await
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fadeInUp animation-delay-500">
          Discover a world of opportunities tailored just for you. Whether you're seeking your dream job, funding for your education, or valuable internship experience, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp animation-delay-1000">
          <Link to ="Jobs"><button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
            Explore Jobs
          </button></Link>
          <Link to="SchoolarShip"><button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 shadow-lg">
            Find Scholarships
          </button></Link>
          <Link to="Internship"><button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300 shadow-lg">
            Discover Internships
          </button></Link>
        </div>
      </div>
    </div>
  


    
    <WorkSection/>
    <ScholarshipSection/>
    <InternshipSection/>
    <Banner/>
    <Mentorship/>

    {/* JOBS section */}

    </>
  )
}

export default home