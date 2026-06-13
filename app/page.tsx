import Hero from "./components/Hero";
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
      <Hero />
      <About />
      <Banner />
      <Members />
      <Gallery />
      <Contact />
    </main>
  );
}
