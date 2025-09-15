// src/components/FeaturedInternships.js


import { BriefcaseIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

// Data for the two featured internship cards.
const internshipData = [
  {
    id: 1,
    companyName: 'Innovate Inc.',
    internshipTitle: 'Software Engineering Intern',
    logoUrl: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
    location: 'Remote',
    duration: '3 Months (Summer 2024)',
    responsibilities: [
      'Develop and test new user-facing features.',
      'Collaborate with senior engineers on our core platform.',
      'Participate in the full software development lifecycle.',
    ],
    detailsLink: '/internships/innovate-swe',
  },
  {
    id: 2,
    companyName: 'QuantumLeap AI',
    internshipTitle: 'Data Science Intern',
    logoUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
    location: 'New York, NY',
    duration: '12 Weeks',
    responsibilities: [
      'Analyze large datasets to find actionable insights.',
      'Build and train machine learning models.',
      'Create data visualizations and present findings.',
    ],
    detailsLink: '/internships/quantumleap-data',
  },
];

const FeaturedInternships = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <BriefcaseIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Internships
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Gain real-world experience and kickstart your career with these exciting opportunities.
          </p>
        </div>

        {/* Internship Cards Grid - max-w-5xl centers the two cards nicely */}
        <div className="mt-12 max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
          {internshipData.map((internship) => (
            <div
              key={internship.id}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <img className="h-10 w-auto flex-shrink-0" src={internship.logoUrl} alt={`${internship.companyName} logo`} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{internship.internshipTitle}</h3>
                    <p className="text-sm font-medium text-gray-600">{internship.companyName}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    {internship.duration}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 flex-grow flex flex-col">
                <p className="font-semibold text-gray-800 mb-2">What you'll do:</p>
                <ul className="space-y-2 flex-grow">
                  {internship.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRightIcon className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href={internship.detailsLink}
                    className="w-full text-center inline-block bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" Button at the bottom */}
        <div className="mt-16 text-center">
          <a
            href="/all-internships" // Link to a page with all internship listings
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 text-lg"
          >
            View All Internships
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInternships;