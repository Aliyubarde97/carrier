import React from 'react';

const SopBuildingGuide = () => {
  const steps = [
    {
      id: 1,
      title: 'Step 1: Understand the Prompt & Research',
      description: 'Thoroughly read the scholarship SOP prompt. What are they looking for? Research the institution, program, and scholarship values. Tailor your SOP to align with their mission and what makes you a good fit.',
      example: 'Example: If the scholarship emphasizes leadership, brainstorm specific examples of your leadership roles and achievements.'
    },
    {
      id: 2,
      title: 'Step 2: Craft a Compelling Opening (The Hook)',
      description: 'Your introduction must grab the reader\'s attention immediately. Start with a vivid anecdote, a strong statement of purpose, or a compelling reason for your chosen path. Clearly state what you\'re applying for.',
      example: 'Example: "From tinkering with circuit boards as a child, my fascination with renewable energy has only intensified, driving my ambition to pursue an M.Sc. in Sustainable Engineering at your esteemed university."'
    },
    {
      id: 3,
      title: 'Step 3: Detail Your Academic & Professional Journey',
      description: 'Connect your past experiences (academics, projects, work) to your future aspirations. Explain *why* you made certain choices and what you learned. Focus on achievements, challenges overcome, and lessons that shaped your goals.',
      example: 'Example: "My research project on AI ethics during my undergraduate studies at [University Name] honed my analytical skills and solidified my commitment to socially responsible technology development."'
    },
    {
      id: 4,
      title: 'Step 4: Articulate Your Future Goals & Why THIS Scholarship/Program',
      description: 'Clearly define your short-term and long-term career goals. Explain how this specific scholarship and program will help you achieve them. Be specific about courses, faculty, research opportunities, or resources that appeal to you.',
      example: 'Example: "The advanced robotics lab and Professor [Name]\'s pioneering work in haptics are precisely what I need to develop my expertise in surgical robotics, aligning perfectly with my ambition to innovate medical technology."'
    },
    {
      id: 5,
      title: 'Step 5: Showcase Your Unique Qualities & Contributions',
      description: 'Go beyond your resume. Highlight soft skills (e.g., resilience, teamwork, problem-solving, cultural awareness) with specific examples. How will you contribute to the program and the wider community? What makes you unique?',
      example: 'Example: "My experience volunteering with underserved communities in Ghana instilled in me a deep appreciation for cross-cultural collaboration, a value I believe will enrich the diverse cohort at [University Name]."'
    },
    {
      id: 6,
      title: 'Step 6: Write a Strong Conclusion',
      description: 'Reiterate your enthusiasm for the program and scholarship. Briefly summarize your main points and reaffirm why you are an ideal candidate. End with a confident and forward-looking statement.',
      example: 'Example: "I am confident that my passion for [field], coupled with the unparalleled resources at [University Name] and the support of this scholarship, will enable me to make a significant impact in [future goal]."'
    },
    {
      id: 7,
      title: 'Step 7: Edit, Proofread, and Get Feedback',
      description: 'Critical step! Polish your SOP for clarity, conciseness, grammar, and spelling errors. Read it aloud. Get feedback from mentors, professors, or peers. Ensure it flows logically and tells a coherent story.',
      example: 'Example: Check for repetition, weak verbs, and ensure every sentence contributes to your overall message.'
    },
    {
        id: 8,
        title: 'Step 8: Adhere to Length & Formatting Guidelines',
        description: 'Crucially, respect all length requirements. A typical SOP should be concise, ideally one page, and almost never more than two pages (unless explicitly stated). Ensure proper formatting, legible font, and professional presentation.',
        example: 'Example: If the prompt specifies 500 words, prioritize impact and cut any unnecessary fluff to stay within the limit.'
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4 animate-fadeInUp">
            Craft a Powerful SOP for Scholarships
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            A compelling Statement of Purpose can be the key to securing your dream scholarship. Master each step.
          </p>
        </div>

        {/* Updated grid for potentially 4 columns on large screens for a tighter fit, or maintain 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Changed to lg:grid-cols-4 for 8 steps */}
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center">
                <span className="text-green-400 mr-3 text-3xl">{step.id}.</span> {step.title}
              </h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
              <p className="text-sm text-gray-400 italic border-l-4 border-yellow-500 pl-3">
                {step.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SopBuildingGuide;