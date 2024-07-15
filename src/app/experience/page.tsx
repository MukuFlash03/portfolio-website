import Image from "next/image";
import Header from '@/app/common/Header'
import Hero from '@/app/experience/Hero'
import Footer from '@/app/common/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}