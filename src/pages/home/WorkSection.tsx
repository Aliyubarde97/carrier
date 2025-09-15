// src/components/JobAccordionSection.js

import { useState } from 'react';
import { ChevronDownIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

// Expanded data source with six distinct job roles.
const jobPostings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    summary: 'Lead the development of our next-generation user interfaces using modern technologies.',
    details: 'In this role, you will be responsible for the entire frontend stack, from architecture to implementation, collaborating closely with UI/UX designers and backend engineers.',
    detailsLink: '/careers/frontend-developer',
    applicationLink: '/apply/frontend-developer',
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    summary: 'Design, build, and maintain our scalable and secure cloud infrastructure on AWS.',
    details: 'Manage our infrastructure-as-code, CI/CD pipelines, and monitoring systems. Experience with Kubernetes, Terraform, and AWS is essential.',
    detailsLink: '/careers/cloud-engineer',
    applicationLink: '/apply/cloud-engineer',
  },
  {
    id: 3,
    title: 'Product Designer (UI/UX)',
    location: 'San Francisco, CA',
    type: 'Full-time',
    summary: 'Create intuitive, accessible, and beautiful user experiences across our entire product suite.',
    details: 'You will be involved in every step of the design process, from user research and wireframing to creating high-fidelity prototypes. A strong portfolio is required.',
    detailsLink: '/careers/product-designer',
    applicationLink: '/apply/product-designer',
  },
  {
    id: 4,
    title: 'Data Scientist',
    location: 'Remote',
    type: 'Contract',
    summary: 'Analyze large datasets to extract meaningful insights that drive business decisions.',
    details: 'The ideal candidate will have a strong background in statistical analysis, machine learning models, and data visualization tools like Python (Pandas, Scikit-learn) and SQL.',
    detailsLink: '/careers/data-scientist',
    applicationLink: '/apply/data-scientist',
  },
  {
    id: 5,
    title: 'Marketing Manager',
    location: 'Austin, TX',
    type: 'Full-time',
    summary: 'Develop and execute marketing strategies to increase brand awareness and drive user acquisition.',
    details: 'This role requires a creative and analytical mindset to manage campaigns across digital channels, including SEO, SEM, and social media. Experience with marketing automation is a plus.',
    detailsLink: '/careers/marketing-manager',
    applicationLink: '/apply/marketing-manager',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    summary: 'Automate and streamline our operations and processes to improve reliability and efficiency.',
    details: 'You will be responsible for building and maintaining our CI/CD pipelines, managing deployments, and ensuring system uptime and performance. Strong scripting skills are a must.',
    detailsLink: '/careers/devops-engineer',
    applicationLink: '/apply/devops-engineer',
  },
];

const JobAccordionSection = () => {
  const [openJobId, setOpenJobId] = useState(null);

  const handleToggle = (jobId:any) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Find Your Next Opportunity
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We are a passionate team on a mission to innovate. Explore our open roles below.
          </p>
        </div>

        {/* Updated grid for 1, 2, and 3 column layouts */}
        <div className="mt-12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobPostings.map((job) => {
            const isOpen = openJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => handleToggle(job.id)}
                  className="w-full text-left p-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center"><BriefcaseIcon className="h-4 w-4 mr-1.5 text-gray-400" />{job.type}</span>
                        <span className="flex items-center"><MapPinIcon className="h-4 w-4 mr-1.5 text-gray-400" />{job.location}</span>
                      </div>
                      <p className="mt-3 text-gray-700">{job.summary}</p>
                    </div>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-gray-500 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                      <p className="text-gray-600">{job.details}</p>
                      
                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <a
                          href={job.applicationLink}
                          className="inline-block bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                        >
                          Apply Now
                        </a>
                        <a
                          href={job.detailsLink}
                          className="inline-block bg-transparent text-blue-700 font-semibold px-5 py-2.5 rounded-lg border border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobAccordionSection;