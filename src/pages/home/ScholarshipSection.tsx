// src/components/ScholarshipSection.js
import { AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

// Data for the scholarship cards. Easy to manage and update.
const scholarshipData = [
  {
    id: 1,
    schoolName: 'Northwood University',
    scholarshipName: 'Presidential Merit Scholarship',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    packages: [
      'Full Tuition Coverage',
      '$5,000 Annual Stipend',
      'On-Campus Housing Grant',
      'Guaranteed Research Position',
    ],
    detailsLink: '/scholarships/northwood-presidential',
  },
  {
    id: 2,
    schoolName: 'Oakland State College',
    scholarshipName: 'Dean\'s Engineering Award',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    packages: [
      '75% Tuition Discount',
      '$2,500 for Lab Equipment',
      'Paid Internship with Tech Partner',
      'Mentorship Program',
    ],
    detailsLink: '/scholarships/oakland-engineering',
  },
  {
    id: 3,
    schoolName: 'Bridgeport Arts Institute',
    scholarshipName: 'Creative Visionary Grant',
    imageUrl: 'https://images.unsplash.com/photo-1607237138185-e894ee31b2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    packages: [
      'Full Tuition Coverage',
      '$3,000 Art Supply Budget',
      'Solo Exhibition Opportunity',
      'Studio Space Access',
    ],
    detailsLink: '/scholarships/bridgeport-arts',
  },
];

const ScholarshipSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <AcademicCapIcon className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Scholarships
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Discover exclusive opportunities to fund your education at prestigious institutions.
          </p>
        </div>

        {/* Scholarship Cards Grid */}
        <div className="mt-12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {scholarshipData.map((scholarship) => (
            <div
              key={scholarship.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={scholarship.imageUrl} alt={`Campus of ${scholarship.schoolName}`} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">{scholarship.schoolName}</p>
                  <div className="block mt-2">
                    <p className="text-xl font-bold text-gray-900">{scholarship.scholarshipName}</p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800 mb-2">Package Includes:</p>
                      <ul className="space-y-2">
                        {scholarship.packages.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={scholarship.detailsLink}
                    className="w-full text-center inline-block bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    Learn More & Apply
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" Button at the bottom */}
        <div className="mt-16 text-center">
          <a
            href="/all-scholarships" // Link to a page with all scholarships
            className="inline-block bg-transparent text-blue-700 font-semibold px-8 py-4 rounded-lg border-2 border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 text-lg"
          >
            View More Scholarships
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;