import { Project } from "@/app/lib/types/project";

const projectData: Project[] = [
  {
    title: 'Personal Portfolio',
    date: 'JULY 2024',
    info: 'Responsive portfolio website for a developer showcasing experience, projects, skills',
    tags: ['TypeScript', 'React.js', 'Next.js', 'TailwindCSS', 'Figma'],
    url: 'https://github.com/MukuFlash03/portfolio-website',
    image: '/projects/portfolioWebsite.png',
  },
  {
    title: 'Django E-commerce Platform',
    date: 'DECEMBER 2024',
    info: "E-commerce platform with user/guest checkout and dynamic cart management for various product types.",
    tags: ["Python", "Django", "HTML", "JavaScript", "SQLite", "PayPal SDK"],
    url: 'https://github.com/MukuFlash03/django-ecommerce-website',
    image: '/projects/djangoEcommerce.png',
  },
  {
    title: 'Flask ORM CRUD App',
    date: 'DECEMBER 2024',
    info: "Flask application demonstrating database operations using SQLAlchemy ORM with a REST API interface.",
    tags: ["Python", "Flask", "SQLAlchemy", "HTML", "JavaScript"],
    url: 'https://github.com/MukuFlash03/crud-flask-orm',
    image: '/projects/flaskSqlAlchemyOrm.png',
  },
  {
    title: 'TiaMatrix: Multi-modal Intelligence Feed',
    date: 'NOVEMBER 2024',
    info: "Integrates real-time data from several sources and classifies them to analyze dynamic geopolitical events.",
    tags: ["Python", "FastApi", "Streamlit", "AssemblyAI", "OpenAI", "OpenBabylon", "Restack AI"],
    url: 'https://github.com/MukuFlash03/defense-tech-audio-analysis',
    image: '/projects/tiamatrix.png',
  },
  {
    title: 'Permit Pilot: Turbo Tax for Permits',
    date: 'NOVEMBER 2024',
    info: "Simplify the permitting process for users by reducing form completion time and error rates.",
    tags: ["Python", "Next.js", "Meta Llama 3.2", "Together.ai", "FastAPI"],
    url: 'https://github.com/MukuFlash03/permitpilot',
    image: '/projects/permitPilot.png',
  },
  {
    title: 'Documentary Film Suite',
    date: 'OCTOBER 2024',
    info: "An easy-to-use cost-effective toolkit for documentary film creators to enable widespread and impactful distribution of large content in the form of microcontent packages.",
    tags: ["Python", "Streamlit", "AssemblyAI", "Claude 3.5 Sonnet"],
    url: 'https://github.com/MukuFlash03/docu-film-suite',
    image: '/projects/documentaryFilmToolSuite.png',
  },
  {
    title: 'Recruit AI: Connecting Talent and Opportunity',
    date: 'OCTOBER 2024',
    info: "Optimize the recruiter screening process using AI agents to represent both recruiters and candidates. ",
    tags: ["Python", "Next.js", "OpenAI", "Groq", "FastAPI", "Supabase", "Vercel"],
    url: 'https://github.com/MukuFlash03/recruiter-ai-agent',
    image: '/projects/recruitAI.png',
  },
  {
    title: 'BookWise AI: Second Brain for Readers',
    date: 'OCTOBER 2024',
    info: "Your go-to Second Brain for book readers for Capturing and Organizing notes, annotations from physical books and e-books.",
    tags: ["React", "TypeScript", "NextJS", "Python", "FastAPI", "Supabase", "Claude 3.5 Sonnet"],
    url: 'https://github.com/MukuFlash03/bookwise_ai',
    image: '/projects/bookwiseAI.jpeg',
  },
  {
    title: 'Microservices Video to MP3 Converter',
    date: 'SEPTEMBER 2024',
    info: "Distributed system for converting video files to MP3 format using microservices architecture",
    tags: ["Python", "Docker", "Kubernetes", "RabbitMQ", "MongoDB", "MySQL", "Flask", "JWT"],
    url: 'https://github.com/MukuFlash03/microservices-video2mp3-converter',
    image: '/projects/microservicesv2m.png',
  },
  {
    title: 'Kafka Confluent Cloud Pub-Sub',
    date: 'SEPTEMBER 2024',
    info: 'Multi-language implementation of Apache Kafka producers and consumers using Confluent Cloud',
    tags: ['Apache Kafka', 'Confluent Cloud', 'Java', 'Spring Boot', 'Python', 'Go', 'Node.js', 'Docker'],
    url: 'https://github.com/MukuFlash03/kafka-confluent-tutorial',
    image: '/projects/kafkaConfluentCloud.png'
  },
  {
    title: 'Classic To-Do List on AWS',
    date: 'AUGUST 2024',
    info: 'Full-stack to-do list web application that implements CRUD operations',
    tags: ['React', 'Go', 'GraphQL', 'AWS (EC2, Amplify, RDS)', 'Postgres'],
    url: 'https://github.com/MukuFlash03/crud-react-go-graphql-aws',
    image: '/projects/crudTasksGoGQL.png'
  },
  {
    title: 'Go-GQL Backend API',
    date: 'AUGUST 2024',
    info: 'Backend API for Hackernews clone with link creation and user authentication',
    tags: ['Go', 'GraphQL', 'Postgres', 'Docker', 'JWT', 'Gqlgen'],
    url: 'https://github.com/MukuFlash03/tutorial-go-graphql',
    image: '/projects/goGqlBackend.png'
  },
  {
    title: 'Hackernews Clone',
    date: 'AUGUST 2024',
    info: 'Link-sharing platform with real-time updates and voting.',
    tags: ['React', 'GraphQL', 'Apollo Client/Server', 'Prisma ORM'],
    url: 'https://github.com/MukuFlash03/tutorial-react-apollo-graphql',
    image: '/projects/hackernewsGQL.png'
  },
  {
    title: 'Voice AI Interviewer Agent',
    date: 'AUGUST 2024',
    info: 'Multimodal Voice AI assistant for conducting interviews and evaluating candidates',
    tags: ['TypeScript', 'NextJS', 'Groq', 'Supabase', 'Vapi', 'GenAI'],
    url: 'https://github.com/MukuFlash03/ai-agent-interview/',
    image: '/projects/aiInterviewer.png'
  },
  {
    title: 'MultiOn - Easy ApplAI',
    date: 'JULY 2024',
    info: 'Multimodal Voice AI assistant for automatically applying to saved jobs',
    tags: ['Python', 'MultiOn', 'AgentOps', 'Groq', 'Wordware', 'Deepgram', 'ElevenLabs', 'GenAI'],
    url: 'https://github.com/MukuFlash03/easy-applAI',
    image: '/projects/multionautoApply.jpg'
  },
  {
    title: 'MultiOn - Self Buy AI Agent',
    date: 'JUNE 2024',
    info: 'AI-powered online shopping assistant using image input, LLMs, and automated browser actions',
    tags: ['Python', 'Claude Opus LLM', 'MultiOn', 'GenAI'],
    url: 'https://github.com/MukuFlash03/multion-photo-op',
    image: '/projects/multionautoBuy.jpg'
  },
  {
    title: 'YouTube Conversationalist',
    date: 'JUNE 2024',
    info: 'Video search and conversation app using GenAI, audio transcription, and vector search',
    tags: ['Python', 'GenAI', 'RAG Chain', 'MongoDB Atlas Vector Search', 'Streamlit', 'Together.ai', 'Deepgram'],
    url: 'https://github.com/achintyasanjay/Youtube-Conversationalist-Extension',
    image: '/projects/youtubeChatbot.png',
  },
  {
    title: 'Product Catalog',
    date: 'JUNE 2024',
    info: 'Full-stack CRUD application for product inventory management',
    tags: ['TypeScript', 'React.js', 'Next.js', 'Express.js', 'Node.js', 'PostgreSQL'],
    url: 'https://github.com/MukuFlash03/data-catalog-web-app',
    image: '/projects/productCatalog.png',
  },
  {
    title: 'AWS Video Image Recognition',
    date: 'APRIL 2023',
    info: 'Scalable hybrid cloud solution for video processing and face recognition',
    tags: ['AWS', 'Python', 'Docker', 'Flask', 'OpenStack'],
    url: 'https://github.com/MukuFlash03/CSE546-Project2-Image-Recognition',
    image: '/projects/awsImageRecognition.png',
  },
];

export default projectData