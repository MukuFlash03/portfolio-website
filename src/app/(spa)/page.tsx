import Home from '@/app/(spa)/(home)/Home'
import About from '@/app/(spa)/(about)/About'
import Projects from '@/app/(spa)/(projects)/Projects'
import Experience from '@/app/(spa)/(experience)/Experience'
import Skills from '@/app/(spa)/(skills)/Skills'

export default function SPA() {
  return (
    <main className="flex flex-col min-h-screen">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
