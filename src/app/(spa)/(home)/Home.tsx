import Header from '@/app/common/Header'
import Hero from '@/app/(spa)/(home)/Hero'
import Footer from '@/app/common/Footer'


const Home: React.FC = () => {
  return (
    <main id="home" className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}

export default Home;
