// InternshipList.js
import  { useState, useEffect } from 'react';
import Pagination from './Pagination';

const allInternships = [
  {
    id: 1,
    title: 'Software Development Intern',
    company: 'Tech Innovations Inc.',
    country: 'USA',
    duration: '3 Months',
    stipend: '$3000/month',
    description:
      'Join our dynamic software development team and work on cutting-edge projects. You will gain hands-on experience in full-stack development, participate in code reviews, and contribute to real-world applications. Requirements: Proficient in JavaScript, React, Node.js.',
    fullDescription:
      'This internship offers an unparalleled opportunity to immerse yourself in the fast-paced world of software development at Tech Innovations Inc. Interns will be responsible for developing new features, maintaining existing code, and collaborating with senior engineers. We emphasize a culture of learning and mentorship, providing resources for professional growth. Ideal candidates will have completed relevant coursework, possess strong problem-solving skills, and be eager to learn new technologies. This role is perfect for students pursuing a degree in Computer Science or a related field.',
  },
  {
    id: 2,
    title: 'Marketing Specialist Intern',
    company: 'Global Brands Co.',
    country: 'UK',
    duration: '6 Months',
    stipend: '£1800/month',
    description:
      'Assist our marketing team in developing and executing digital campaigns. Learn about market research, content creation, and social media strategy. Requirements: Strong communication skills, basic understanding of digital marketing.',
    fullDescription:
      'At Global Brands Co., our marketing interns play a crucial role in shaping our brand presence. You will contribute to various aspects of our marketing strategy, including social media management, email campaigns, SEO optimization, and analytics reporting. This is a highly collaborative role, offering exposure to different marketing channels and tools. We are looking for creative and analytical individuals who can bring fresh perspectives to our team. Experience with marketing tools like Google Analytics or HubSpot is a plus.',
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    company: 'Data Insights Ltd.',
    country: 'Canada',
    duration: '4 Months',
    stipend: '$2500/month',
    description:
      'Work with large datasets to identify trends and provide actionable insights. Utilize tools like Python, R, and SQL. Requirements: Strong analytical skills, experience with data manipulation.',
    fullDescription:
      'Become a part of our data science team at Data Insights Ltd. and help us unlock the power of data. Interns will be involved in data collection, cleaning, analysis, and visualization. You will work on real business problems, helping departments make data-driven decisions. This internship provides an excellent foundation in data analytics, with opportunities to learn advanced statistical methods and machine learning concepts. Candidates should be comfortable with programming and have a keen eye for detail.',
  },
  {
    id: 4,
    title: 'UX/UI Design Intern',
    company: 'Creative Solutions',
    country: 'Germany',
    duration: '5 Months',
    stipend: '€1500/month',
    description:
      'Contribute to user research, wireframing, prototyping, and user testing for our digital products. Requirements: Portfolio showcasing design skills, proficiency in Figma/Sketch.',
    fullDescription:
      'Creative Solutions is looking for a talented UX/UI Design Intern to join our product development team. You will participate in all stages of the design process, from initial user research and concept generation to high-fidelity prototyping and user testing. This role offers the chance to work on challenging and impactful projects, collaborating closely with product managers and engineers. A strong understanding of user-centered design principles and a passion for creating intuitive user experiences are essential.',
  },
  {
    id: 5,
    title: 'Financial Analyst Intern',
    company: 'Capital Investments',
    country: 'USA',
    duration: '6 Months',
    stipend: '$3500/month',
    description:
      'Assist in financial modeling, market research, and preparing investment reports. Requirements: Strong understanding of finance principles, Excel proficiency.',
    fullDescription:
      'Join Capital Investments as a Financial Analyst Intern and gain invaluable experience in the financial services industry. You will support our team in conducting in-depth financial analysis, evaluating investment opportunities, and preparing presentations for clients. This internship provides exposure to various financial instruments and markets, offering a steep learning curve for aspiring finance professionals. Candidates should have a solid academic record in finance or economics and possess excellent analytical and communication skills.',
  },
  {
    id: 6,
    title: 'Cybersecurity Intern',
    company: 'SecureNet',
    country: 'Australia',
    duration: '4 Months',
    stipend: 'AUD 2800/month',
    description:
      'Help protect our systems and data from cyber threats. Learn about network security, vulnerability assessment, and incident response. Requirements: Basic understanding of networking and security concepts.',
    fullDescription:
      'At SecureNet, our Cybersecurity Interns are on the front lines of defense against digital threats. You will assist in monitoring security systems, conducting vulnerability scans, analyzing security incidents, and implementing security protocols. This is a hands-on role that will provide practical experience in various cybersecurity domains. We are looking for individuals who are detail-oriented, have a strong interest in cybersecurity, and are eager to learn about advanced threat detection and prevention techniques.',
  },
  {
    id: 7,
    title: 'HR Intern',
    company: 'People First Solutions',
    country: 'UK',
    duration: '3 Months',
    stipend: '£1500/month',
    description:
      'Support the HR department with recruitment, onboarding, and employee relations. Requirements: Excellent organizational and interpersonal skills.',
    fullDescription:
      'People First Solutions is seeking an enthusiastic HR Intern to support our Human Resources team. You will be involved in a wide range of HR activities, including recruitment coordination, maintaining employee records, assisting with onboarding processes, and supporting various HR projects. This internship offers a comprehensive introduction to human resource management in a supportive and collaborative environment. Ideal candidates will be pursuing a degree in HR or a related field and possess strong communication and administrative skills.',
  },
  {
    id: 8,
    title: 'Research & Development Intern',
    company: 'Innovate Labs',
    country: 'Germany',
    duration: '6 Months',
    stipend: '€1800/month',
    description:
      'Contribute to groundbreaking research projects in materials science. Requirements: Background in chemistry/physics, laboratory experience.',
    fullDescription:
      'Join Innovate Labs as a Research & Development Intern and contribute to cutting-edge scientific discoveries. You will work alongside experienced scientists on projects related to new material development, experimental design, and data analysis. This internship is perfect for students with a strong academic background in chemistry, physics, or materials science who are passionate about scientific research and innovation. Hands-on laboratory experience and proficiency in scientific software are highly valued.',
  },
  {
    id: 9,
    title: 'Environmental Consultant Intern',
    company: 'Green Earth Group',
    country: 'Canada',
    duration: '5 Months',
    stipend: '$2200/month',
    description:
      'Assist in environmental impact assessments and sustainability projects. Requirements: Degree in environmental science or related field.',
    fullDescription:
      'Green Earth Group is looking for an Environmental Consultant Intern to join our team dedicated to sustainable solutions. You will support our consultants in conducting environmental assessments, preparing reports, and engaging with clients on various sustainability initiatives. This internship offers practical experience in environmental consulting, providing exposure to regulatory frameworks and industry best practices. Candidates should have a strong interest in environmental protection and a solid understanding of ecological principles.',
  },
  {
    id: 10,
    title: 'Public Relations Intern',
    company: 'Brand Builders',
    country: 'USA',
    duration: '3 Months',
    stipend: '$2000/month',
    description:
      'Help manage media relations, create press releases, and develop communication strategies. Requirements: Excellent writing and communication skills.',
    fullDescription:
      'At Brand Builders, our Public Relations Interns play a key role in shaping our clients\' public image. You will assist in drafting press releases, media alerts, and social media content, as well as monitoring media coverage and researching industry trends. This internship provides hands-on experience in public relations, offering insights into strategic communication and brand management. We are looking for articulate and creative individuals with a passion for storytelling and a keen eye for detail.',
  },
  {
    id: 11,
    title: 'Supply Chain Intern',
    company: 'Logistics Hub',
    country: 'USA',
    duration: '6 Months',
    stipend: '$2800/month',
    description:
      'Support logistics operations, inventory management, and process optimization. Requirements: Strong analytical skills, interest in logistics.',
    fullDescription:
      'Logistics Hub is offering a Supply Chain Intern position for individuals interested in the intricacies of global logistics. You will assist in various aspects of our supply chain operations, including demand planning, inventory control, vendor management, and process improvement initiatives. This internship provides a comprehensive overview of supply chain management, from sourcing to delivery. Ideal candidates will have a background in supply chain, business, or engineering and possess strong problem-solving abilities.',
  },
  {
    id: 12,
    title: 'Graphic Design Intern',
    company: 'Visual Arts Studio',
    country: 'UK',
    duration: '4 Months',
    stipend: '£1600/month',
    description:
      'Create visual content for marketing materials, websites, and social media. Requirements: Proficiency in Adobe Creative Suite, portfolio.',
    fullDescription:
      'Visual Arts Studio is seeking a talented Graphic Design Intern to join our creative team. You will be responsible for designing engaging visual content for a variety of platforms, including websites, social media, print materials, and presentations. This internship offers the opportunity to work on diverse projects and expand your design portfolio. We are looking for creative individuals with a strong aesthetic sense, attention to detail, and proficiency in industry-standard design software like Adobe Photoshop, Illustrator, and InDesign.',
  },
  {
    id: 13,
    title: 'IT Support Intern',
    company: 'Connect Solutions',
    country: 'Canada',
    duration: '3 Months',
    stipend: '$2000/month',
    description:
      'Provide technical assistance to employees, troubleshoot hardware/software issues. Requirements: Basic IT knowledge, good communication skills.',
    fullDescription:
      'Connect Solutions is looking for an IT Support Intern to assist our internal IT team. You will be the first point of contact for technical queries, providing support for hardware, software, and network issues. This internship offers practical experience in IT service management, system administration, and user support. Ideal candidates will have a foundational understanding of IT systems, strong problem-solving skills, and a customer-focused approach.',
  },
  {
    id: 14,
    title: 'Biotech Research Intern',
    company: 'BioHealth Innovations',
    country: 'Germany',
    duration: '6 Months',
    stipend: '€2000/month',
    description:
      'Assist in laboratory experiments and data analysis in biotechnology. Requirements: Background in biology/biochemistry, lab experience.',
    fullDescription:
      'BioHealth Innovations is offering a Biotech Research Intern position for aspiring scientists. You will work alongside our research team on projects aimed at developing new biotechnological solutions, conducting experiments, and analyzing results. This internship provides hands-on experience in a research laboratory setting, with exposure to advanced scientific techniques and methodologies. Candidates should have a strong academic background in biology, biochemistry, or a related field, and be passionate about scientific discovery.',
  },
  {
    id: 15,
    title: 'Legal Intern',
    company: 'Justice Law Firm',
    country: 'USA',
    duration: '4 Months',
    stipend: '$2500/month',
    description:
      'Support lawyers with legal research, document preparation, and case management. Requirements: Law student, strong research skills.',
    fullDescription:
      'Justice Law Firm is seeking a Legal Intern to assist our team of attorneys. You will gain practical experience in legal research, drafting legal documents, preparing case summaries, and assisting with various administrative tasks. This internship offers valuable insight into the daily operations of a law firm and the legal profession. We are looking for motivated law students with excellent research, writing, and analytical skills.',
  },
];

const internshipsPerPage = 5;

function InternshipList({ onSelectInternship }:any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCountry, setFilterCountry] = useState('All');
  const [filteredInternships, setFilteredInternships] = useState(allInternships);

  useEffect(() => {
    const filtered =
      filterCountry === 'All'
        ? allInternships
        : allInternships.filter((internship) => internship.country === filterCountry);
    setFilteredInternships(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filterCountry]);

  const totalPages = Math.ceil(filteredInternships.length / internshipsPerPage);

  const startIndex = (currentPage - 1) * internshipsPerPage;
  const endIndex = startIndex + internshipsPerPage;
  const currentInternships = filteredInternships.slice(startIndex, endIndex);

  const countries = [
    'All',
    ...new Set(allInternships.map((internship) => internship.country)),
  ].sort();

  return (
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Available Internships</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="country-filter" className="text-gray-700 font-medium">
            Filter by Country:
          </label>
          <select
            id="country-filter"
            className="border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {currentInternships.length > 0 ? (
          currentInternships.map((internship) => (
            <div
              key={internship.id}
              className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-700">
                  {internship.title}
                </h3>
                <p className="text-gray-600">
                  <span className="font-semibold">{internship.company}</span> -{' '}
                  {internship.country}
                </p>
                <p className="text-gray-500 mt-1">{internship.description}</p>
                <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-x-4">
                  <span>Duration: {internship.duration}</span>
                  <span>Stipend: {internship.stipend}</span>
                </div>
              </div>
              <button
                onClick={() => onSelectInternship(internship)}
                className="ml-0 md:ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            No internships found for the selected country.
          </p>
        )}
      </div>

      {filteredInternships.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default InternshipList;