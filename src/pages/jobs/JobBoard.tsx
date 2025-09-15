import React, { useState, useMemo } from 'react';
import { mockJobs, Job } from './MoreJobs'; // Assuming data.ts is in the same directory

// --- Sub-components for better organization within this file ---

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null; // Don't show pagination if only one page or less

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex list-none">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === number ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};


interface JobListingCardProps {
  job: Job;
  onViewDetails: (jobId: string) => void;
}

const JobListingCard: React.FC<JobListingCardProps> = ({ job, onViewDetails }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{job.company} &bull; {job.location}</p>
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">{job.type}</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">{job.arrangement}</span>
      </div>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
        {job.description}
      </p>
      <button
        onClick={() => onViewDetails(job.id)}
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
      >
        View Details
      </button>
    </div>
  );
};

interface JobDetailViewProps {
  job: Job;
  onBackToList: () => void;
}

const JobDetailView: React.FC<JobDetailViewProps> = ({ job, onBackToList }) => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{job.title}</h1>
      <p className="text-2xl text-gray-700 mb-2">{job.company}</p>
      <p className="text-lg text-gray-600 mb-6">{job.location} &bull; <span className="font-semibold">{job.type}</span> &bull; <span className="font-semibold">{job.arrangement}</span></p>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Job Description</h2>
        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">{job.description}</p>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
          {job.requirements.map((req, index) => (
            <li key={index} className="leading-relaxed">{req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 w-full sm:w-auto">
          Apply Now
        </button>
        <button
          onClick={onBackToList}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg flex items-center gap-1 w-full sm:w-auto justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Job Listings
        </button>
      </div>
    </div>
  );
};


// --- Main JobBoard Component ---

const JobBoard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);
  const [filterType, setFilterType] = useState<'All' | Job['type']>('All');
  const [filterArrangement, setFilterArrangement] = useState<'All' | Job['arrangement']>('All');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesType = filterType === 'All' || job.type === filterType;
      const matchesArrangement = filterArrangement === 'All' || job.arrangement === filterArrangement;
      return matchesType && matchesArrangement;
    });
  }, [filterType, filterArrangement]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Optional: Scroll to top of the job list when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (jobId: string) => {
    setSelectedJobId(jobId);
    // Optional: Scroll to top of the detail page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedJobId(null);
    // Optional: Scroll to top of the job list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedJob = useMemo(() => {
    return selectedJobId ? mockJobs.find((job) => job.id === selectedJobId) : null;
  }, [selectedJobId]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {selectedJob ? (
        // Job Detail View
        <JobDetailView job={selectedJob} onBackToList={handleBackToList} />
      ) : (
        // Job List View
        <div className="container mx-auto p-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Job Openings</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Type Filter */}
            <div className="flex flex-col">
              <label htmlFor="filterType" className="text-sm font-medium text-gray-700 mb-1 sr-only sm:not-sr-only">Category:</label>
              <select
                id="filterType"
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-gray-400 transition-colors"
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value as 'All' | Job['type']);
                  setCurrentPage(1); // Reset to first page on filter change
                }}
              >
                <option value="All">All Categories</option>
                <option value="NGO">NGO</option>
                <option value="Government">Government</option>
                <option value="Corporate">Corporate</option>
              </select>
            </div>

            {/* Arrangement Filter */}
            <div className="flex flex-col">
              <label htmlFor="filterArrangement" className="text-sm font-medium text-gray-700 mb-1 sr-only sm:not-sr-only">Arrangement:</label>
              <select
                id="filterArrangement"
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-gray-400 transition-colors"
                value={filterArrangement}
                onChange={(e) => {
                  setFilterArrangement(e.target.value as 'All' | Job['arrangement']);
                  setCurrentPage(1); // Reset to first page on filter change
                }}
              >
                <option value="All">All Arrangements</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => <JobListingCard key={job.id} job={job} onViewDetails={handleViewDetails} />)
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg py-10">No jobs found matching your criteria.</p>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default JobBoard;