import { Experience } from "@/app/lib/types/experience";

const experienceData: Experience[] = [
  {
    company: 'National Renewable Energy Laboratory (NREL)',
    title: 'Software Engineer Intern',
    role: 'Python Developer, DevOps Engineer, Site Reliability Engineer',
    duration: 'AUG 2023 - JUL 2024',
    location: "Golden, CO",
    skills: ['Python', 'Docker', 'MongoDB', 'Git', 'GitHub Actions', 'AWS Cloudwatch', 'AWS ECR', 'AWS Inspector'],
    description: [
      'Refined data processing in model build and analysis pipeline in a distributed system for transforming raw data to inferred values followed by end-to-end manual and automated unit testing and integration tests.',
      'Did scaling and performance optimization to address scalability requirements by optimizing time complexity.',
      'Diagnosed and remedied model build pipeline failures in staging and production environments using Cloudwatch logs.',
      'Automated deployment DevOps process by restructuring CI/CD workflows using GitHub Actions.',
    ],
    url: 'https://www.nrel.gov/',
  },
  {
    company: 'Oracle Financial Services Software ',
    title: 'Associate Technical Consultant',
    role: 'PL/SQL Developer',
    duration: 'JUL 2021 - MAY 2022',
    location: "Bangalore, India",
    skills: ['PL/SQL', 'ETL Processes', 'Oracle DB', 'Oracle OFSAA', 'Data Pipelines', 'Bash Scripting', 'XML'],
    description: [
      'Implemented OFSAA LLFP fintech solutions in SIT, UAT and provided post-implementation support in Production environments for 2 international financial banking firms.',
      'Engineered 6 GUI based workflow runs for ETL pipelines with numerous tasks and integrated them with backend scripts to process data from Pre-staging to end-user report generation stage.',
      'Enhanced UI for Individual Assessment (IA) module based on XML Forms Framework by customizing 4 UI Forms and 8 PL/SQL scripts to process over 300k customer records by proposing to debug existing legacy code.',
      'Generated PL/SQL scripts for data manipulation and validation to automate manual tasks for filtering source data that helped reduce execution times by 20% while generating end-user reports containing customer data for over 6 months.',
      'Documented technical designs and deployed code packages across environments via WinSCP/PuTTY client-server apps.',
    ],
    url: 'https://en.wikipedia.org/wiki/Oracle_Financial_Services_Software',
  },
  {
    company: 'Inter-University Accelerator Centre (IUAC) ',
    title: 'Software Engineer Intern',
    role: 'Embedded C++ Developer',
    duration: 'MAY 2020 - AUG 2020',
    location: "New Delhi, India",
    skills: ['C', 'C++', 'Microcontrollers', 'RPC Protocols'],
    description: [
      'Summer Research Internship in Machine Learning and Embedded Systems.',
      'Worked under Dr. Joby Antony (MS Kent State University, Ohio, USA), Formerly Visiting Scientist, CERN, Geneva.',
      'Designed software modules for ARM Cortex-M3 embedded server sensor device to measure subzero temperatures.',
      'Troubleshooted bugs and optimized the system to handle real-time sensor data via RPC transfer protocols.',
    ],
    url: 'https://www.iuac.res.in/'
  },
  {
    company: 'College of Engineering Pune (COEP)',
    title: 'Software Engineer Intern',
    role: 'Python Developer',
    duration: 'MAY 2019 - JUL 2019',
    location: "Pune, India",
    skills: ['Python', 'Pandas', 'Matplotlib', 'Rough Set Theory'],
    description: [
      'Rough Set Theory Python Library Development',
      'Worked under the guidance of Ms. Vanita Agarwal, Assistant Professor, Department of Electronics & Telecommunication Engineering, College of Engineering, Pune.',
      'Successfully modeled discrete mathematical Rough Set Theory concepts for Sensor Data Mining using Python.',
      'Designed custom-built library to process 65,536 objects in 2 minutes with accuracy of 95% using linear regression.',
    ],
    url: 'https://www.coep.org.in/'
  },
];

export default experienceData;