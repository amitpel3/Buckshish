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
    <>
      <PatternBackground />
      <LanguageSwitcher />
      <main id="main">
        <Hero />
        <About />
        <Banner />
        <Members />
        <Gallery />
      </main>
      <Contact />
    </>
  );
}
