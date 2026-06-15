import Hero from "./components/Hero";
import LanguageSwitcher from "./components/LanguageSwitcher";
import PatternBackground from "./components/PatternBackground";
import {
  About,
  Banner,
  Members,
  Gallery,
  Contact,
} from "./components/Sections";

export default function Home() {
  return (
    <main>
      <PatternBackground />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Banner />
      <Members />
      <Gallery />
      <Contact />
    </main>
  );
}
