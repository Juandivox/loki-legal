import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Approach />
      <Contact />
    </main>
  );
}
