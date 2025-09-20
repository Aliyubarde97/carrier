import React, { useState } from 'react';

const CvBuildingGuide = () => {
  const [openStep, setOpenStep] = useState(null); // State to manage which step is open if using accordion

  const steps = [
    {
      id: 1,
      title: 'Step 1: Choose the Right Format',
      description: 'Selecting an appropriate CV format is crucial. Consider chronological (most common), functional (skills-focused), or combination formats based on your experience and career stage. A clean, professional layout is always best.',
      example: 'Example: For recent graduates, a chronological format highlighting education and internships is ideal. For career changers, a functional CV emphasizes transferable skills.'
    },
    {
      id: 2,
      title: 'Step 2: Craft a Compelling Personal Statement/Summary',
      description: 'This is your elevator pitch – a concise 2-4 sentence summary of your skills, experience, and career goals. Tailor it to each job application, highlighting why you are a perfect fit.',
      example: 'Example: "Highly motivated Software Engineer with 3+ years of experience in JavaScript and React, seeking to leverage front-end expertise to build innovative solutions at TechCorp."'
    },
    {
      id: 3,
      title: 'Step 3: Detail Your Work Experience',
      description: 'List your work history in reverse chronological order. For each role, include your job title, company name, location, and dates of employment. Use action verbs and quantifiable achievements to describe your responsibilities and impact.',
      example: 'Example: "Managed a portfolio of 50+ key client accounts, consistently exceeding sales targets by 15% each quarter." (Instead of "Responsible for sales")'
    },
    {
      id: 4,
      title: 'Step 4: Highlight Education and Qualifications',
      description: 'Include your highest degree first, followed by other relevant qualifications. Mention the institution, major/program, graduation date (or expected date), and any notable achievements like honors or relevant coursework.',
      example: 'Example: "B.Sc. Computer Science, University of XYZ, 2020 (Magna Cum Laude)"'
    },
    {
      id: 5,
      title: 'Step 5: Showcase Your Skills',
      description: 'Create a dedicated section for your skills, dividing them into technical skills (e.g., programming languages, software) and soft skills (e.g., communication, teamwork, problem-solving). Be specific and relevant to the jobs you\'re applying for.',
      example: 'Example: "Technical Skills: Python, SQL, AWS, Tableau | Soft Skills: Project Management, Data Analysis, Client Relations"'
    },
    {
      id: 6,
      title: 'Step 6: Add Optional Sections (If Relevant)',
      description: 'Depending on your field and experience, consider adding sections like Projects, Certifications, Awards, Publications, or Volunteer Work. Only include what adds value and is relevant to the job.',
      example: 'Example: "Projects: Developed an e-commerce platform using MERN stack, increasing conversion rates by 10%." '
    },
    {
      id: 7,
      title: 'Step 7: Proofread and Tailor!',
      description: 'This is critical! Thoroughly proofread for any typos or grammatical errors. Finally, always tailor your CV to each job description, using keywords from the posting to ensure it passes ATS (Applicant Tracking Systems) and stands out to recruiters.',
      example: 'Example: If the job description emphasizes "customer service excellence," ensure your CV uses similar phrasing where appropriate.'
    },
  ];


  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4 animate-fadeInUp">
            Build Your Winning CV, Step by Step
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Craft a professional CV that gets noticed and opens doors to new opportunities. Follow our comprehensive guide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              <h3 className="text-2xl font-bold text-teal-400 mb-3 flex items-center">
                <span className="text-blue-400 mr-3 text-3xl">{step.id}.</span> {step.title}
              </h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
              <p className="text-sm text-gray-400 italic border-l-4 border-blue-500 pl-3">
                {step.example}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Accordion style if preferred over cards, uncomment and adjust */}
        {/*
        <div className="space-y-4 max-w-4xl mx-auto mt-12">
          {steps.map((step) => (
            <div key={step.id} className="bg-gray-800 rounded-lg shadow-lg">
              <button
                className="flex justify-between items-center w-full p-6 text-xl font-semibold text-teal-400 focus:outline-none"
                onClick={() => toggleStep(step.id)}
              >
                <span>{step.id}. {step.title}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openStep === step.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openStep === step.id && (
                <div className="p-6 pt-0 border-t border-gray-700">
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-400 italic border-l-4 border-blue-500 pl-3">
                    {step.example}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        */}

      </div>
    </div>
  );
};

export default CvBuildingGuide;