import React from 'react';
import { Briefcase, GraduationCap, Users, BookOpen, UserCircle, Lightbulb } from 'phosphor-react';

const AboutUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4 mt-3">
            About CareeDoor
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your trusted partner in career development and talent acquisition across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Statement */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              At CareeDoor, we are dedicated to efficiently connecting  candidates with outstanding companies at all levels. 
              We actively develop both ends of the marketplace in diverse functional areas, solving Africa's fundamental employment challenge concerning employer-employee quality and discovery.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We've made traditional job hunting obsolete, going a step further to thoroughly prepare candidates for open positions and the modern workplace. CareeDoor is more than just a job listing platform or an HR company; we are a comprehensive career partner leveraging technology to address human resources and educational needs across Africa, thereby enhancing profitability for both individuals and corporations.
            </p>
          </div>

          {/* Image/Illustration */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            {/* You can replace this with an actual image or illustration */}
            <div className="w-full max-w-md bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-lg shadow-xl text-white text-center">
              <Lightbulb size={64} weight="fill" className="mx-auto mb-4" />
              <p className="text-xl font-semibold">"Unlocking Africa's Talent Potential."</p>
            </div>
            {/* Placeholder for an image representing connection and growth */}
            {/* You would typically use a responsive image here:
            <img src="/path/to/your/career-growth-illustration.png" alt="CareeDoor - Connecting Talent" className="rounded-lg shadow-lg" />
            */}
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">What We Do</h3>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            For every candidate, CareeDoor is your complete career companion, offering tailored support from the first step to your dream role.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service Card 1: Job Discovery */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <Briefcase size={48} weight="fill" className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Personalized Job Discovery</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Connecting you with the perfect job opportunities tailored to your skills and aspirations, from entry-level to executive roles.
              </p>
            </div>

            {/* Service Card 2: Scholarships */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <GraduationCap size={48} weight="fill" className="mx-auto mb-4 text-purple-600 dark:text-purple-400" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Scholarship & Internship Matching</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Access to the latest local and international scholarships and internships to fuel your academic and professional growth.
              </p>
            </div>

            {/* Service Card 3: Mentorship */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <Users size={48} weight="fill" className="mx-auto mb-4 text-green-600 dark:text-green-400" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Latest Mentorship Sessions</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Engage with industry leaders and experienced professionals through our curated mentorship programs.
              </p>
            </div>

            {/* Service Card 4: CV Building */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <BookOpen size={48} weight="fill" className="mx-auto mb-4 text-red-600 dark:text-red-400" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Expert CV & SOP Building</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Receive professional guidance on crafting winning CVs, SOPs, and application essays.
              </p>
            </div>

            {/* Service Card 5: Interview Prep */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <UserCircle size={48} weight="fill" className="mx-auto mb-4 text-orange-600 dark:text-orange-400" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Job & Scholarship Interview Prep</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Comprehensive coaching and mock interviews to ensure you excel in competitive job and scholarship interviews.
              </p>
            </div>

            {/* Service Card 6: Career Counseling */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <Lightbulb size={48} weight="fill" className="mx-auto mb-4 text-cyan-600 dark:text-cyan-400" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Career Counseling & Training</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Personalized career counseling and advanced training to equip you with future-proof skills.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;