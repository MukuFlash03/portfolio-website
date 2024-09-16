import languageLogos from '@/app/assets/skills/languages'
import genAILogos from '@/app/assets/skills/genAI'
import frameworkLogos from '@/app/assets/skills/frameworks'
import devToolsLogos from '@/app/assets/skills/devTools';
import devOpsLogos from '@/app/assets/skills/devOps';
import databaseLogos from '@/app/assets/skills/databases';
import cloudLogos from '@/app/assets/skills/cloud';

import { SkillCategory } from '@/app/lib/types/skills';

const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', logo: languageLogos.python },
      { name: 'C++', logo: languageLogos.cpp },
      { name: 'Java', logo: languageLogos.java },
      { name: 'HTML', logo: languageLogos.html },
      { name: 'CSS', logo: languageLogos.css },
      { name: 'JavaScript', logo: languageLogos.javascript },
      { name: 'TypeScript', logo: languageLogos.typescript },
      { name: 'SQL', logo: languageLogos.sql },
      { name: 'YAML', logo: languageLogos.yaml },
      { name: 'Go', logo: languageLogos.golang },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'REST', logo: frameworkLogos.rest },
      { name: 'Express', logo: frameworkLogos.express },
      { name: 'React', logo: frameworkLogos.react },
      { name: 'Node.js', logo: frameworkLogos.node },
      { name: 'Next.js', logo: frameworkLogos.next },
      { name: 'Flask', logo: frameworkLogos.flask },
      { name: 'Spring Boot', logo: frameworkLogos.spring },
      { name: 'GraphQL', logo: frameworkLogos.graphql },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', logo: databaseLogos.postgres },
      { name: 'MongoDB', logo: databaseLogos.mongodb },
      { name: 'Oracle', logo: databaseLogos.oracle },
      { name: 'DynamoDB', logo: databaseLogos.dynamodb },
      { name: 'Supabase', logo: databaseLogos.supabase },
      { name: 'Prisma', logo: databaseLogos.prisma },
    ],
  },
  {
    category: 'Generative AI',
    skills: [
      { name: 'Anthropic', logo: genAILogos.anthropic },
      { name: 'OpenAI', logo: genAILogos.openai },
      { name: 'Streamlit', logo: genAILogos.streamlit },
      { name: 'Deepgram', logo: genAILogos.deepgram },
      { name: 'Langchain', logo: genAILogos.langchain },
      { name: 'Multion', logo: genAILogos.multion },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'OpenStack', logo: cloudLogos.openstack },
      { name: 'AWS', logo: cloudLogos.aws },
      { name: 'Amplify', logo: cloudLogos.amplify },
      { name: 'Cloudwatch', logo: cloudLogos.cloudwatch },
      { name: 'EC2', logo: cloudLogos.ec2 },
      { name: 'ECR', logo: cloudLogos.ecr },
      { name: 'IAM', logo: cloudLogos.iam },
      { name: 'Inspector', logo: cloudLogos.inspector },
      { name: 'Lambda', logo: cloudLogos.lambda },
      { name: 'SQS', logo: cloudLogos.sqs },
      { name: 'S3', logo: cloudLogos.s3 },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', logo: devOpsLogos.docker },
      { name: 'GitHub', logo: devOpsLogos.github },
      { name: 'GitHub Actions', logo: devOpsLogos.ghActions },
      { name: 'Kubernetes', logo: devOpsLogos.kubernetes },
      { name: 'Kafka', logo: devOpsLogos.kafka },
      { name: 'RabbitMQ', logo: devOpsLogos.rabbitmq },
    ],
  },
  {
    category: 'Dev Tools',
    skills: [
      { name: 'Bash', logo: devToolsLogos.bash },
      { name: 'Git', logo: devToolsLogos.git },
      { name: 'Ubuntu', logo: devToolsLogos.ubuntu },
      { name: 'Postman', logo: devToolsLogos.postman },
      { name: 'VS Code', logo: devToolsLogos.vscode },
      { name: 'Figma', logo: devToolsLogos.figma },
    ],
  },
];

export default skillsData