// ScholarshipOverview.tsx
import React, { useState, useMemo } from 'react';
import { Scholarship, scholarshipData } from './scholarshipData'; // Adjust path as needed

interface ScholarshipOverviewProps {
  // You can add props here if you need to pass initial data or callbacks
}

const ScholarshipsOverview: React.FC<ScholarshipOverviewProps> = () => {
  const [selectedScholarshipId, setSelectedScholarshipId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCountry, setFilterCountry] = useState<string>('All');
  const scholarshipsPerPage = 5;

  // Extract unique countries for filter options
  const uniqueCountries = useMemo(() => {
    const countries = new Set<string>();
    scholarshipData.forEach(sch => countries.add(sch.country));
    return ['All', ...Array.from(countries).sort()];
  }, []);

  // Filter and paginate scholarships
  const filteredScholarships = useMemo(() => {
    return scholarshipData.filter(sch =>
      filterCountry === 'All' ? true : sch.country === filterCountry
    );
  }, [filterCountry]);

  const totalPages = Math.ceil(filteredScholarships.length / scholarshipsPerPage);
  const indexOfLastScholarship = currentPage * scholarshipsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - scholarshipsPerPage;
  const currentScholarships = filteredScholarships.slice(indexOfFirstScholarship, indexOfLastScholarship);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCountryFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCountry(event.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleApplyClick = (scholarshipId: string) => {
    setSelectedScholarshipId(scholarshipId);
  };

  const handleBackToList = () => {
    setSelectedScholarshipId(null);
  };

  const selectedScholarship = useMemo(() => {
    return scholarshipData.find(sch => sch.id === selectedScholarshipId);
  }, [selectedScholarshipId]);

  if (selectedScholarship) {
    // Detailed Scholarship View
    return (
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <button
          onClick={handleBackToList}
          className="mb-6 flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Scholarships
        </button>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{selectedScholarship.title}</h1>
        <p className="text-lg text-gray-600 mb-6">Country: <span className="font-semibold">{selectedScholarship.country}</span></p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{selectedScholarship.overview}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{selectedScholarship.description}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Eligibility</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {selectedScholarship.eligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {selectedScholarship.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="text-center">
          <a
            href={selectedScholarship.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md"
          >
            Apply Now
          </a>
        </div>
      </div>
    );
  }

  // Scholarship List View
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Scholarship Opportunities</h1>

      {/* Filter */}
      <div className="mb-6 flex justify-end">
        <label htmlFor="country-filter" className="sr-only">Filter by Country</label>
        <select
          id="country-filter"
          className="block w-full md:w-auto p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
          value={filterCountry}
          onChange={handleCountryFilterChange}
        >
          {uniqueCountries.map(country => (
            <option key={country} value={country}>
              {country === 'All' ? 'All Countries' : country}
            </option>
          ))}
        </select>
      </div>

      {/* Scholarship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentScholarships.length > 0 ? (
          currentScholarships.map(scholarship => (
            <div
              key={scholarship.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-100 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{scholarship.title}</h2>
                <p className="text-md text-gray-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 1.586l-4 4V14a2 2 0 002 2h2a2 2 0 002-2V5.586l-4-4zM2 6a2 2 0 012-2h3.586l-4 4H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1.586l-4-4H16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                  {scholarship.country}
                </p>
                <p className="text-gray-700 text-base mb-4 line-clamp-3">{scholarship.overview}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Eligibility Highlights:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {scholarship.eligibility.slice(0, 2).map((item, index) => ( // Show first 2 for brevity
                      <li key={index}>{item}</li>
                    ))}
                    {scholarship.eligibility.length > 2 && <li>...and more</li>}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleApplyClick(scholarship.id)}
                  className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Details & Apply
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No scholarships found for the selected criteria.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex justify-center mt-8">
          <ul className="flex items-center space-x-2">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors duration-200`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ScholarshipsOverview;