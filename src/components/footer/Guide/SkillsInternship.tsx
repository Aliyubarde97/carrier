import React from 'react';

const InternshipGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4 mt-3">
          Your Ultimate Internship Journey
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Charting Your Path to Tech Prowess or Leadership Excellence
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Section 1: Introduction & Mindset */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Welcome, Future Leader/Innovator!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This guide is your roadmap to a successful and impactful internship experience. Whether your ambition lies in mastering cutting-edge technical skills or honing your leadership abilities in any domain, the principles outlined here will empower you to make the most of this invaluable opportunity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Embrace curiosity, be proactive, and remember that every challenge is a chance to learn and grow. Your journey starts now!
          </p>
        </div>

        {/* Section 2: Defining Your Goals */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            1. Define Your Internship Goals
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before you even begin, clearly articulate what you want to achieve. This will shape your focus and drive during the internship.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Technical Skills:</span> Identify specific technologies, languages, or tools you want to become proficient in (e.g., React, Python, AWS, data analysis).
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Leadership Skills:</span> Pinpoint areas like project management, team communication, strategic thinking, conflict resolution, or mentorship.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Industry Knowledge:</span> What insights do you want to gain about the specific industry or company culture?
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Networking:</span> Set goals for the number and types of connections you want to make.
            </li>
          </ul>
        </div>

        {/* Section 3: Pre-Internship Preparation */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            2. Pre-Internship Preparation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A little preparation goes a long way in setting yourself up for success.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Research the Company:</span> Understand their mission, products/services, and recent news.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Understand Your Role:</span> Clarify expectations, reporting structure, and initial projects with your manager.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Brush Up on Basics:</span> If it's a tech role, review fundamental concepts. For leadership, consider reading up on relevant methodologies (e.g., Agile).
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Prepare Questions:</span> Have a list of questions ready for your first few days to show engagement.
            </li>
          </ul>
        </div>

        {/* Section 4: Excelling in Technical Skills */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            3. Excelling in Technical Skills (Tech Focus)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For those aiming to sharpen their technical edge:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Be a Sponge:</span> Absorb everything. Ask "why" and "how."
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Code Reviews:</span> Actively participate in code reviews, both as a reviewer and a reviewee. Learn from feedback.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Side Projects (if allowed):</span> If you have downtime, explore related tech or automate a small task.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Documentation:</span> Understand and contribute to technical documentation.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Seek Mentorship:</span> Identify senior engineers who can guide you.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Learn to Debug:</span> This is a critical skill. Practice identifying and solving problems efficiently.
            </li>
          </ul>
        </div>

        {/* Section 5: Developing Leadership Skills */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            4. Developing Leadership Skills (Any Field Focus)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For those aspiring to lead and influence:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Proactive Communication:</span> Keep stakeholders informed. Practice clear, concise articulation of ideas.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Take Initiative:</span> Volunteer for tasks, even if outside your direct scope, to show commitment and expand your understanding.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Problem Solving:</span> Don't just identify problems; propose solutions.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Active Listening:</span> Pay attention to team dynamics, client needs, and feedback.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Time Management:</span> Efficiently manage your tasks and deadlines, demonstrating reliability.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Collaborate Effectively:</span> Learn to work well with diverse personalities and skill sets.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Seek Feedback:</span> Actively ask for feedback on your leadership style and impact.
            </li>
          </ul>
        </div>

        {/* Section 6: General Internship Best Practices */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            5. General Internship Best Practices (All Interns)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Ask Questions:</span> Don't be afraid to ask, but try to find answers first.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Take Notes:</span> Document key information, processes, and feedback.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Network Actively:</span> Connect with colleagues, attend company events, and schedule informational interviews.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Be Proactive:</span> Look for opportunities to contribute beyond your assigned tasks.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Seek Feedback:</span> Regularly check in with your manager and team for constructive criticism.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Show Enthusiasm:</span> A positive attitude is contagious and makes you a valuable team member.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Professionalism:</span> Maintain punctuality, respect, and a professional demeanor.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Document Your Work:</span> Keep a log of your projects, achievements, and lessons learned. This is invaluable for future interviews!
            </li>
          </ul>
        </div>

        {/* Section 7: Maximizing Your Learning */}
        <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            6. Maximizing Your Learning & Impact
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Set Weekly Goals:</span> Review your progress against your initial goals.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Reflect Regularly:</span> Take time to think about what you're learning and how you can apply it.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Deliver Value:</span> Strive to make a tangible contribution, no matter how small.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Prepare for Your Exit:</span> In your final weeks, thank your team, document your work, and prepare a presentation if expected.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Stay Connected:</span> Keep in touch with mentors and colleagues after the internship.
            </li>
          </ul>
        </div>

        {/* Section 8: Visual Element */}
       
      </section>

      <footer className="text-center mt-16 text-gray-600 text-lg">
        
      </footer>
    </div>
  );
};

export default InternshipGuide;