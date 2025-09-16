import Banner from './Banner'
import InternshipSection from './InternshipSection'
import Mentorship from './Mentorship'
import ScholarshipSection from './ScholarshipSection'
import WorkSection from './WorkSection'
import Hero from "../../assets/hero.png"

const home = () => {
  return (
    <>
       <section className="bg-gray-900 text-white-900 p-5">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight mb-4">
              You Need a Job?
            </h1>
            <p className="text-lg text-white-600 dark:text-gray-300 mb-8">
              Let Find a your Dream Job
            </p>
            <p className="text-lg text-white-600 dark:text-gray-300 mb-8">
              We post New Job Update Here Everyday, we guide you to find a new Job for you
            </p>
          
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 lg:w-3/5 mt-12 md:mt-0 flex justify-center">
            <img 
              src={Hero} className='bg-none' // Replace with your actual image URL
              alt="Hero Illustration" 
              // className="rounded-lg shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
    
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