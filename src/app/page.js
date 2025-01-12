import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
