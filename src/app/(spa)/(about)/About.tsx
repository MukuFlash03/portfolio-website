import Header from '@/app/common/Header'
import Hero from '@/app/(spa)/(about)/Hero'
import Footer from '@/app/common/Footer'

const About: React.FC = () => {
  return (
    <main id="about" className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}

export default About;