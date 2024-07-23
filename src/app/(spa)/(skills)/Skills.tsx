import Header from '@/app/common/Header'
import Hero from '@/app/(spa)/(skills)/Hero'
import Footer from '@/app/common/Footer'

const Skills: React.FC = () => {
  return (
    <main id="skills" className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

export default Skills;
