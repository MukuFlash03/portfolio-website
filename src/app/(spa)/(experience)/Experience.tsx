import Header from '@/app/common/Header'
import Hero from '@/app/(spa)/(experience)/Hero'
import Footer from '@/app/common/Footer'

const Experience: React.FC = () => {
  return (
    <main id="experience" className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}

export default Experience;