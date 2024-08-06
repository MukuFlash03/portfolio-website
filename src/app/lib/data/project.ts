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