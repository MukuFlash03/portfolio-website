import Header from '@/app/common/Header'
import Hero from '@/app/(spa)/(projects)/Hero'
import Footer from '@/app/common/Footer'

const Projects: React.FC = () => {
  return (
    <main id="projects" className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}

export default Projects;