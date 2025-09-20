import React from 'react';

const InternshipForScholarshipGuide = () => {
  const steps = [
    {
      id: 1,
      title: 'Step 1: Define Your Goals & Research Scholarships',
      description: 'Before applying for internships, clarify what kind of scholarships you target. Research their requirements and preferred experiences. This will help you identify internships that directly align with your scholarship criteria.',
      example: 'Example: If a scholarship values leadership in STEM, look for internships with project management or team lead responsibilities in tech companies.'
    },
    {
      id: 2,
      title: 'Step 2: Target Relevant Internship Opportunities',
      description: 'Seek internships that offer practical experience in your field of study and, crucially, opportunities to develop skills valued by scholarship committees (e.g., research, leadership, community engagement, specific technical skills).',
      example: 'Example: An aspiring medical researcher should prioritize lab assistant internships over general office admin roles, even if both are available.'
    },
    {
      id: 3,
      title: 'Step 3: Craft a Scholarship-Focused Application',
      description: 'When applying for internships, articulate how this experience will contribute to your long-term academic and scholarship goals in your cover letter and interviews. Frame your enthusiasm in terms of personal and professional growth.',
      example: 'Example: "I am eager to contribute to [Company X] while gaining the research skills essential for my future pursuit of the [Specific Scholarship Name] and a Ph.D. in [Field]."'
    },
    {
      id: 4,
      title: 'Step 4: Maximize Learning & Skill Development',
      description: 'Once in the internship, actively seek out learning opportunities. Volunteer for challenging tasks, ask questions, and take initiative. Document new skills acquired and projects completed; these will be crucial for scholarship essays.',
      example: 'Example: Keep a journal of daily tasks, new software learned, problems solved, and feedback received.'
    },
    {
      id: 5,
      title: 'Step 5: Build Strong Professional Relationships',
      description: 'Network with your supervisor, mentors, and colleagues. Seek out their advice, and maintain good communication. Strong recommendations from these professionals can be invaluable for scholarship applications.',
      example: 'Example: Schedule informational interviews with senior staff to learn about their career paths and ask for advice on your own goals.'
    },
    {
      id: 6,
      title: 'Step 6: Seek Quantifiable Achievements & Impact',
      description: 'Focus on making a measurable contribution. How did your work benefit the company or project? Quantify your achievements whenever possible (e.g., "improved process efficiency by 10%", "assisted in launching a campaign that reached 500 new users").',
      example: 'Example: Instead of "Did data entry," write "Streamlined data entry process for client records, reducing processing time by 20%." '
    },
    {
      id: 7,
      title: 'Step 7: Reflect & Articulate Your Experience for SOPs/Essays',
      description: 'After the internship, critically reflect on your experience. How did it shape your career goals? What challenges did you overcome? How did you grow? These insights are gold for scholarship essays and interviews.',
      example: 'Example: "My internship at [Company] taught me the critical importance of agile development, directly influencing my decision to apply for the [Scholarship Name] to further my studies in software project management."'
    },
    {
      id: 8,
      title: 'Step 8: Request Strong Letters of Recommendation',
      description: 'If you excelled, ask your supervisor or a mentor for a letter of recommendation. Provide them with your resume, the scholarship requirements, and specific examples of your contributions to help them write a powerful, tailored letter.',
      example: 'Example: Provide your recommender with a bulleted list of your key achievements and how they relate to the scholarship criteria.'
    },
  ];

  const bonusTip = {
    title: 'A Key Insight for All Internships:',
    description: 'While all internships should ideally be paid for your time and effort, approach every opportunity with a primary focus on learning, skill development, and gaining valuable experience, rather than immediate compensation. Your genuine curiosity and eagerness to learn will shine through in your cover letters and interviews, making you a more attractive candidate and leading to more impactful experiences. Prioritize growth, and the rewards (including future paid opportunities and scholarships) will follow.',
    icon: (
      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
      </svg>
    )
  };

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-4 animate-fadeInUp">
            Secure a Winning Internship for Scholarship Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Strategically leverage internships to strengthen your scholarship applications and stand out from the crowd.
          </p>
        </div>



        <div className="mt-16 mb-16 bg-gray-800 rounded-lg shadow-xl p-8 max-w-3xl mx-auto border-t-4 border-yellow-500 animate-fadeInUp animation-delay-1500">
          <div className="flex items-center mb-4">
            {bonusTip.icon}
            <h3 className="text-3xl font-bold text-yellow-400 ml-4">{bonusTip.title}</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {bonusTip.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              <h3 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
                <span className="text-purple-400 mr-3 text-3xl">{step.id}.</span> {step.title}
              </h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
              <p className="text-sm text-gray-400 italic border-l-4 border-indigo-500 pl-3">
                {step.example}
              </p>
            </div>
          ))}
        </div>

        {/* New Bonus Tip Section */}
        

      </div>
    </div>
  );
};

export default InternshipForScholarshipGuide;