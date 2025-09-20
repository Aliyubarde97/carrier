// src/components/CoverLetterGuide.jsx
import React, { useState } from 'react';

const coverLetterTypes = [
  {
    id: 'job',
    title: 'Job Application Cover Letter',
    description: 'Tailored for professional job applications.',
    steps: [
      {
        heading: '1. Your Contact Information & Date',
        content: 'Place your full name, address, phone number, and email at the top. Below that, add the current date.',
      },
      {
        heading: '2. Hiring Manager\'s Contact Information',
        content: 'If possible, find the specific name of the hiring manager. If not, use "Hiring Manager" or "Recruiting Team". Include their title, company name, and address.',
      },
      {
        heading: '3. Salutation',
        content: 'Address the letter formally: "Dear Mr./Ms. [Last Name]" or "Dear Hiring Manager,".',
      },
      {
        heading: '4. Opening Paragraph: The Hook',
        content: 'State the position you\'re applying for and where you saw the advertisement. Briefly express your enthusiasm and a key reason why you\'re a great fit (e.g., specific skill or experience).',
      },
      {
        heading: '5. Body Paragraphs: Showcase Your Value',
        content: 'Choose 2-3 of your most relevant skills, experiences, and achievements that directly align with the job description. Use quantifiable results whenever possible. Connect your past successes to the company\'s needs.',
      },
      {
        heading: '6. Closing Paragraph: Call to Action',
        content: 'Reiterate your interest and enthusiasm. Express confidence in your qualifications and state your desire for an interview. Thank them for their time and consideration.',
      },
      {
        heading: '7. Professional Closing',
        content: 'Use a formal closing like "Sincerely," or "Regards,".',
      },
      {
        heading: '8. Your Signature & Typed Name',
        content: 'Leave space for a handwritten signature, then type your full name.',
      },
    ],
  },
  {
    id: 'scholarship',
    title: 'Scholarship Application Cover Letter',
    description: 'Focused on academic achievements and future aspirations.',
    steps: [
      {
        heading: '1. Your Contact Information & Date',
        content: 'Your full name, address, phone number, and email. Below, the current date.',
      },
      {
        heading: '2. Scholarship Committee Contact Information',
        content: 'Address the letter to the specific scholarship committee or individual responsible, if known. Include the organization\'s name and address.',
      },
      {
        heading: '3. Salutation',
        content: 'Typically, "Dear Scholarship Committee," or "To the [Scholarship Name] Selection Committee,".',
      },
      {
        heading: '4. Opening Paragraph: State Your Intent',
        content: 'Clearly state that you are applying for the specific scholarship and briefly mention your academic program/goals and why this scholarship is important to you.',
      },
      {
        heading: '5. Body Paragraphs: Highlight Achievements & Need',
        content: 'Discuss your academic achievements, extracurricular activities, leadership roles, and community involvement. Connect these experiences to your passion for your field of study. Explain your financial need and how the scholarship will enable you to pursue your education without undue burden.',
      },
      {
        heading: '6. Future Aspirations',
        content: 'Articulate your long-term educational and career goals. Explain how this scholarship will directly contribute to achieving those goals and how you plan to "give back" or make an impact.',
      },
      {
        heading: '7. Closing Paragraph: Express Gratitude',
        content: 'Reiterate your strong interest and appreciation for their consideration. Express readiness to provide any further information required.',
      },
      {
        heading: '8. Professional Closing',
        content: '"Sincerely," or "Respectfully,".',
      },
      {
        heading: '9. Your Signature & Typed Name',
        content: 'Space for signature, then your typed full name.',
      },
    ],
  },
  {
    id: 'internship',
    title: 'Internship Application Cover Letter',
    description: 'Emphasizes learning, potential, and skill development.',
    steps: [
      {
        heading: '1. Your Contact Information & Date',
        content: 'Your full name, address, phone number, and email. Below, the current date.',
      },
      {
        heading: '2. Internship Coordinator/Hiring Manager Contact',
        content: 'If possible, find the name of the internship coordinator. Otherwise, "Dear Internship Coordinator" or "Dear [Company Name] Team". Include company name and address.',
      },
      {
        heading: '3. Salutation',
        content: '"Dear Mr./Ms. [Last Name]", "Dear Internship Coordinator,".',
      },
      {
        heading: '4. Opening Paragraph: Express Interest & Position',
        content: 'State the specific internship you are applying for and where you learned about it. Express your genuine interest in the company and the learning opportunity.',
      },
      {
        heading: '5. Body Paragraphs: Highlight Relevant Skills & Courses',
        content: 'Discuss relevant coursework, academic projects, extracurricular activities, or volunteer work that demonstrates transferable skills (e.g., teamwork, problem-solving, research, specific software). Explain how your skills and enthusiasm make you a valuable asset to their team, even as a learner.',
      },
      {
        heading: '6. What You Hope to Gain & Contribute',
        content: 'Articulate what you hope to learn from the internship and how you believe you can contribute to their projects and goals. Show that you\'ve researched the company and understand their mission.',
      },
      {
        heading: '7. Closing Paragraph: Call to Action & Availability',
        content: 'Reiterate your enthusiasm and express your eagerness for an interview to discuss how your skills and dedication can benefit their team. Mention your availability for the internship period. Thank them for their time.',
      },
      {
        heading: '8. Professional Closing',
        content: '"Sincerely," or "Best regards,".',
      },
      {
        heading: '9. Your Signature & Typed Name',
        content: 'Space for signature, then your typed full name.',
      },
    ],
  },
];

const CoverLetterGuide = () => {
  const [selectedType, setSelectedType] = useState(coverLetterTypes[0].id);

  const currentGuide = coverLetterTypes.find((type) => type.id === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden ">
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 sm:p-8 text-center mt-20">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
            Crafting a Winning Cover Letter
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Your comprehensive guide to effective applications
          </p>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Choose Your Application Type:
            </h2>
            <div className="flex flex-wrap gap-3">
              {coverLetterTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-5 py-2 rounded-full text-base font-semibold transition-all duration-300 ease-in-out
                    ${selectedType === type.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
                    }`}
                >
                  {type.title}
                </button>
              ))}
            </div>
          </div>

          {currentGuide && (
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-inner border border-gray-100 animate-fade-in">
              <h3 className="text-3xl font-bold text-blue-700 mb-3">
                {currentGuide.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {currentGuide.description}
              </p>

              <div className="space-y-6">
                {currentGuide.steps.map((step, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex-shrink-0 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">
                        {step.heading}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default CoverLetterGuide;