// types.ts
export interface Scholarship {
  id: string;
  title: string;
  country: string;
  overview: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  applicationLink: string;
}

// scholarshipData.ts (or wherever you store your data)
export const scholarshipData: Scholarship[] = [
  {
    id: 'sch001',
    title: 'Global Excellence Scholarship',
    country: 'USA',
    overview: 'A prestigious scholarship for international students demonstrating academic excellence.',
    description: 'The Global Excellence Scholarship aims to support outstanding students from around the world who wish to pursue higher education in the United States. This scholarship covers tuition fees and provides a living stipend.',
    eligibility: [
      'Must be an international student.',
      'Minimum GPA of 3.8 or equivalent.',
      'Proficiency in English (TOEFL/IELTS scores required).',
      'Demonstrated leadership potential.'
    ],
    requirements: [
      'Completed application form.',
      'Two letters of recommendation.',
      'Personal statement.',
      'Academic transcripts.'
    ],
    applicationLink: 'https://example.com/apply/sch001'
  },
  {
    id: 'sch002',
    title: 'European Union Research Grant',
    country: 'Germany',
    overview: 'Funding for master and PhD students focusing on research within the EU.',
    description: 'This grant supports innovative research projects that align with the European Union\'s strategic goals. It is open to students pursuing master\'s or PhD degrees in eligible fields.',
    eligibility: [
      'Must be a citizen of an EU member state or a collaborating country.',
      'Enrolled in a master\'s or PhD program.',
      'Research proposal required.'
    ],
    requirements: [
      'Detailed research proposal.',
      'Curriculum Vitae.',
      'Letter of acceptance from a university.',
      'Supervisor\'s recommendation.'
    ],
    applicationLink: 'https://example.com/apply/sch002'
  },
  {
    id: 'sch003',
    title: 'Asia-Pacific Development Scholarship',
    country: 'Australia',
    overview: 'Supporting students from developing countries in the Asia-Pacific region.',
    description: 'The Asia-Pacific Development Scholarship aims to foster talent and contribute to the development of the region by providing opportunities for higher education in Australia.',
    eligibility: [
      'Citizen of an eligible Asia-Pacific developing country.',
      'Demonstrated commitment to their home country\'s development.',
      'Undergraduate or postgraduate studies.'
    ],
    requirements: [
      'Proof of citizenship.',
      'Development impact statement.',
      'Academic transcripts.',
      'Proof of English proficiency.'
    ],
    applicationLink: 'https://example.com/apply/sch003'
  },
  {
    id: 'sch004',
    title: 'North American Indigenous Scholarship',
    country: 'Canada',
    overview: 'Dedicated to supporting Indigenous students pursuing post-secondary education.',
    description: 'This scholarship provides financial assistance and support for First Nations, Inuit, and Métis students to achieve their educational goals.',
    eligibility: [
      'Must be of Indigenous heritage (First Nations, Inuit, or Métis).',
      'Enrolled or accepted into an accredited post-secondary institution in Canada.',
      'Minimum academic standing required.'
    ],
    requirements: [
      'Proof of Indigenous ancestry.',
      'Letter of enrollment/acceptance.',
      'Personal essay outlining educational goals.',
      'Community involvement verification.'
    ],
    applicationLink: 'https://example.com/apply/sch004'
  },
  {
    id: 'sch005',
    title: 'Latin American Cultural Exchange Grant',
    country: 'Brazil',
    overview: 'Promoting cultural understanding through academic exchange programs in Latin America.',
    description: 'This grant facilitates academic and cultural exchange for students interested in Latin American studies, language, and culture. It supports travel and living expenses for short-term programs.',
    eligibility: [
      'Open to students worldwide.',
      'Interest in Latin American culture and languages.',
      'Enrollment in a relevant academic program.',
    ],
    requirements: [
      'Statement of purpose.',
      'Letter of recommendation.',
      'Program acceptance letter.',
    ],
    applicationLink: 'https://example.com/apply/sch005'
  },
  {
    id: 'sch006',
    title: 'African STEM Initiative Scholarship',
    country: 'South Africa',
    overview: 'Supporting African students in Science, Technology, Engineering, and Mathematics fields.',
    description: 'The African STEM Initiative aims to empower the next generation of African innovators and leaders by providing scholarships for STEM degrees at leading institutions in South Africa.',
    eligibility: [
      'Citizen of an African country.',
      'Accepted into a STEM program at a South African university.',
      'Strong academic record in science and mathematics.',
    ],
    requirements: [
      'Academic transcripts from high school/previous degree.',
      'University acceptance letter.',
      'Essay on future contributions to STEM in Africa.',
    ],
    applicationLink: 'https://example.com/apply/sch006'
  },
  {
    id: 'sch007',
    title: 'Oceania Research Fellowship',
    country: 'New Zealand',
    overview: 'Postgraduate research funding for environmental and marine sciences in Oceania.',
    description: 'This fellowship supports advanced research focused on the unique environmental and marine ecosystems of the Oceania region, promoting sustainable practices and scientific discovery.',
    eligibility: [
      'Open to postgraduate students globally.',
      'Research proposal focused on Oceania\'s environment/marine science.',
      'Affiliation with a university in New Zealand or a Pacific Island nation.',
    ],
    requirements: [
      'Detailed research proposal.',
      'CV and academic references.',
      'Proof of university affiliation.',
    ],
    applicationLink: 'https://example.com/apply/sch007'
  },
  {
    id: 'sch008',
    title: 'Middle East Cultural Heritage Grant',
    country: 'Egypt',
    overview: 'Supporting studies and research in the rich cultural heritage of the Middle East.',
    description: 'This grant encourages academic and artistic projects that explore, preserve, and promote the diverse cultural heritage of the Middle East, including archaeology, history, and arts.',
    eligibility: [
      'Open to scholars and students worldwide.',
      'Project proposal related to Middle Eastern cultural heritage.',
      'Affiliation with an academic or cultural institution.',
    ],
    requirements: [
      'Project proposal and budget.',
      'Letters of support.',
      'Portfolio for artistic projects, if applicable.',
    ],
    applicationLink: 'https://example.com/apply/sch008'
  },
  {
    id: 'sch009',
    title: 'South Asian Academic Excellence',
    country: 'India',
    overview: 'A scholarship for high-achieving students from South Asian countries.',
    description: 'This scholarship aims to empower bright minds from South Asia to pursue higher education, fostering academic excellence and regional development.',
    eligibility: [
      'Citizen of a South Asian country (e.g., India, Pakistan, Bangladesh, Sri Lanka).',
      'Exceptional academic record.',
      'Enrollment in an undergraduate or postgraduate program.',
    ],
    requirements: [
      'Academic transcripts.',
      'Personal statement describing academic aspirations.',
      'Two letters of recommendation.',
    ],
    applicationLink: 'https://example.com/apply/sch009'
  },
  {
    id: 'sch010',
    title: 'Pan-African Leadership Scholarship',
    country: 'Nigeria',
    overview: 'Developing future leaders across various sectors in Africa through education.',
    description: 'This scholarship targets promising young African leaders who are committed to making a significant impact in their communities and continent. It supports studies in various disciplines.',
    eligibility: [
      'Citizen of an African country.',
      'Demonstrated leadership potential and community involvement.',
      'Accepted into a recognized university program.',
    ],
    requirements: [
      'Leadership essay.',
      'Proof of community service/leadership roles.',
      'Academic references.',
    ],
    applicationLink: 'https://example.com/apply/sch010'
  },
];