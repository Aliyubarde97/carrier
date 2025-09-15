export interface Job {
  id: string;
  title: string;
  company: string;
  type: 'NGO' | 'Government' | 'Corporate';
  arrangement: 'Remote' | 'Hybrid' | 'Onsite';
  location: string;
  description: string;
  requirements: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    type: 'Corporate',
    arrangement: 'Remote',
    location: 'Anywhere',
    description:
      'We are looking for a highly skilled Senior Software Engineer to join our innovative team. You will be responsible for designing, developing, and maintaining complex software systems.',
    requirements: [
      '5+ years of experience in software development.',
      'Proficiency in React, Node.js, and TypeScript.',
      'Strong understanding of cloud platforms (AWS, Azure, GCP).',
      'Excellent problem-solving skills.',
    ],
  },
  {
    id: '2',
    title: 'Project Manager',
    company: 'Global Aid NGO',
    type: 'NGO',
    arrangement: 'Hybrid',
    location: 'New York, USA',
    description:
      'Global Aid NGO is seeking an experienced Project Manager to oversee our humanitarian projects. The ideal candidate will have a passion for making a difference and excellent leadership skills.',
    requirements: [
      '3+ years of experience in project management, preferably in the non-profit sector.',
      'Strong organizational and communication skills.',
      'Ability to manage multiple projects simultaneously.',
      'PMP certification is a plus.',
    ],
  },
  {
    id: '3',
    title: 'Data Analyst',
    company: 'Government Statistics Office',
    type: 'Government',
    arrangement: 'Onsite',
    location: 'Washington D.C., USA',
    description:
      'Join the Government Statistics Office as a Data Analyst. You will be responsible for collecting, analyzing, and interpreting large datasets to inform public policy.',
    requirements: [
      'Bachelor\'s degree in Statistics, Mathematics, Economics, or related field.',
      'Proficiency in statistical software (R, Python, SAS).',
      'Experience with data visualization tools (Tableau, Power BI).',
      'Ability to obtain a security clearance.',
    ],
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    company: 'Creative Digital Agency',
    type: 'Corporate',
    arrangement: 'Remote',
    location: 'Anywhere',
    description:
      'We are looking for a talented UX/UI Designer to create intuitive and aesthetically pleasing user interfaces for our clients. You will work closely with developers and product managers.',
    requirements: [
      '3+ years of experience in UX/UI design.',
      'Proficiency in design tools like Figma, Sketch, or Adobe XD.',
      'Strong portfolio showcasing your design process and solutions.',
      'Understanding of user-centered design principles.',
    ],
  },
  {
    id: '5',
    title: 'Environmental Scientist',
    company: 'Green Earth Foundation',
    type: 'NGO',
    arrangement: 'Onsite',
    location: 'San Francisco, USA',
    description:
      'The Green Earth Foundation is hiring an Environmental Scientist to conduct research and develop solutions for environmental conservation. This is an exciting opportunity to contribute to a sustainable future.',
    requirements: [
      'Master\'s degree in Environmental Science or related field.',
      'Experience with field research and data collection.',
      'Knowledge of environmental regulations and policies.',
      'Strong analytical and problem-solving skills.',
    ],
  },
  {
    id: '6',
    title: 'Cloud Engineer',
    company: 'Cloud Innovations Ltd.',
    type: 'Corporate',
    arrangement: 'Hybrid',
    location: 'London, UK',
    description:
      'We need a skilled Cloud Engineer to manage and optimize our cloud infrastructure. You will work with cutting-edge technologies and ensure the reliability and scalability of our services.',
    requirements: [
      '4+ years of experience with cloud platforms (AWS, Azure, GCP).',
      'Proficiency in infrastructure as code (Terraform, CloudFormation).',
      'Experience with containerization (Docker, Kubernetes).',
      'Strong scripting skills (Python, Bash).',
    ],
  },
  {
    id: '7',
    title: 'Public Health Specialist',
    company: 'Ministry of Health',
    type: 'Government',
    arrangement: 'Onsite',
    location: 'Ottawa, Canada',
    description:
      'The Ministry of Health is seeking a Public Health Specialist to develop and implement public health programs. You will play a crucial role in improving community well-being.',
    requirements: [
      'Master\'s degree in Public Health or related field.',
      'Experience in public health program planning and evaluation.',
      'Strong understanding of epidemiology and biostatistics.',
      'Excellent communication and collaboration skills.',
    ],
  },
  {
    id: '8',
    title: 'Frontend Developer',
    company: 'Startup X',
    type: 'Corporate',
    arrangement: 'Remote',
    location: 'Anywhere',
    description:
      'Join our fast-paced startup as a Frontend Developer. You will build responsive and engaging user interfaces for our innovative web applications.',
    requirements: [
      '2+ years of experience with React, Vue, or Angular.',
      'Proficiency in HTML, CSS, and JavaScript.',
      'Experience with state management libraries (Redux, Zustand).',
      'Familiarity with testing frameworks (Jest, React Testing Library).',
    ],
  },
  {
    id: '9',
    title: 'Community Outreach Coordinator',
    company: 'Local Charity Hub',
    type: 'NGO',
    arrangement: 'Onsite',
    location: 'Dublin, Ireland',
    description:
      'Local Charity Hub is looking for a passionate Community Outreach Coordinator to engage with the community and promote our initiatives. You will be the face of our organization.',
    requirements: [
      '1+ year of experience in community outreach or related role.',
      'Excellent interpersonal and communication skills.',
      'Ability to organize and lead events.',
      'Strong organizational skills.',
    ],
  },
  {
    id: '10',
    title: 'Cybersecurity Analyst',
    company: 'National Security Agency',
    type: 'Government',
    arrangement: 'Hybrid',
    location: 'Fort Meade, USA',
    description:
      'The National Security Agency is hiring a Cybersecurity Analyst to protect critical government systems from cyber threats. This role requires a strong understanding of cybersecurity principles.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity, Computer Science, or related field.',
      'Experience with security information and event management (SIEM) tools.',
      'Knowledge of network protocols and security architectures.',
      'Relevant certifications (CompTIA Security+, CISSP) are a plus.',
    ],
  },
  {
    id: '11',
    title: 'Product Manager',
    company: 'Innovate Solutions',
    type: 'Corporate',
    arrangement: 'Remote',
    location: 'Anywhere',
    description:
      'Innovate Solutions is seeking an experienced Product Manager to drive the development of our next-generation products. You will define product roadmaps and work closely with engineering and design teams.',
    requirements: [
      '5+ years of experience in product management.',
      'Strong understanding of the software development lifecycle.',
      'Excellent communication and leadership skills.',
      'Experience with Agile methodologies.',
    ],
  },
  {
    id: '12',
    title: 'Research Assistant',
    company: 'University Research Lab',
    type: 'Government',
    arrangement: 'Onsite',
    location: 'Cambridge, USA',
    description:
      'Join our University Research Lab as a Research Assistant. You will support ongoing scientific research projects, perform experiments, and analyze data.',
    requirements: [
      'Bachelor\'s degree in a scientific field (Biology, Chemistry, Physics).',
      'Experience with laboratory techniques and equipment.',
      'Strong attention to detail and organizational skills.',
      'Ability to work independently and as part of a team.',
    ],
  },
];