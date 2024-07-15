import React from 'react'
import Image from 'next/image'
import avatar from '@/app/assets/avatar_1.svg'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start space-y-10 px-5 py-10">
            <div className="w-full flex-grow flex flex-col items-center space-y-5">
              <h2 className="w-full text-center text-[32px] leading-[40px] font-semibold text-[#E3E3E3]">
                Get To Know Me 👨🏻‍💻
              </h2>
              {/* <div className="w-[84px] h-[3px] bg-[#E3E3E3] relative">
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 border-l-3 border-b-3 border-[#E3E3E3]"></div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 border-r-3 border-t-3 border-[#E3E3E3]"></div>
              </div> */}
            </div>
            <div className="w-full flex-grow flex justify-center items-center">
              <div className="w-full h-full flex flex-col justify-center items-start space-y-6 px-5 py-5">
                <span className="w-full h-full text-[#E3E3E3] text-base leading-6 space-y-2 font-medium">
                  {/* I&apos;m a passionate Full Stack Developer with a strong foundation in computer science and a keen interest in cutting-edge technologies. My journey in the tech world has equipped me with a diverse skill set, allowing me to tackle complex problems and create innovative solutions. */}
                  <div className="flex justify-center w-full">
                    <strong>👋 About Me</strong><br />
                  </div>
                  <ul className="w-full h-full text-left list-disc list-outside space-y-2">
                    {/* <ul className="w-full text-left text-[20px] leading-[40px] font-medium text-[#E3E3E3] list-disc list-outside space-y-4"> */}
                    <li>Recent Computer Science Master&apos;s graduate with a passion for backend applications and a keen interest in CI/CD, DevOps, Cloud technologies, and Full-stack development, including integrating Large Language Models (LLMs) for Generative AI applications.</li>
                    <li>Proficient in Python, TypeScript, C++, Java, and adept at leveraging a wide array of frameworks and tools to drive innovative solutions.</li>
                    <li>Experienced in scaling systems, optimizing performance, and automating deployment processes.</li>
                  </ul>
                </span>
                <span className="w-full h-full text-[#E3E3E3] text-base leading-6 space-y-2 font-medium">
                  {/* With expertise in both front-end and back-end development, I strive to build seamless, user-centric applications that make a real impact. I'm always eager to learn and adapt to new technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape. */}
                  <div className="flex justify-center w-full">
                    <strong>🛠️ Technical Skills</strong><br />
                  </div>
                  {/* <strong className='flex justify-center w-full'>🛠️ Technical Skills</strong><br /> */}
                  <ul className="w-full h-full text-left list-disc list-outside space-y-2">
                    <li>From Java, Python, C++, TypeScript to Express and Flask, I thrive in diverse tech environments.</li>
                    <li>Proficient in handling databases like Oracle SQL and MongoDB, and adept at architecting REST APIs, Microservices.</li>
                    <li>Comfortable navigating Cloud platforms such as AWS and Kubernetes, and well-versed in developer tools like Git, Docker.</li>
                    <li>Exploring the world of full-stack development and integrating RAG chain LLMs for building Generative AI applications.</li>
                  </ul>
                </span>
                <span className="w-full h-full text-[#E3E3E3] text-base leading-6 space-y-2 font-medium">
                  {/* With expertise in both front-end and back-end development, I strive to build seamless, user-centric applications that make a real impact. I'm always eager to learn and adapt to new technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape. */}
                  <div className="flex justify-center w-full">
                    <strong>💡 Beliefs</strong><br />
                  </div>
                  <ul className="w-full h-full text-left list-disc list-outside space-y-2">
                    <li>I&apos;m driven by a curiosity to understand not only “how” but “why” things work.</li>
                    <li>I embrace the challenge of the unknown and the unknowable and learning to prioritize efficiency and task completion over perfection.</li>
                    <li>I value accountability and ownership in both professional work experience and personal life, taking responsibility for my actions and striving to deliver high-quality work while continuously learning and improving.</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero
