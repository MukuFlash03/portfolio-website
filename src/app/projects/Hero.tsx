import React from 'react'
import ProjectContainer from './ProjectContainer'
import projectsData from '@/app/lib/data/project'
import Title from '@/app/common/Title'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-2 md:px-24">
        <div className="w-full flex-grow flex-col flex justify-center items-center">
          <Title title="Projects" />
          <ProjectContainer projectsData={projectsData} />
        </div>
      </div>
    </section >
  )
}

export default Hero
