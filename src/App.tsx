import { Hero } from "./sections/Hero";
import { StampNav } from "./sections/StampNav";
import { About } from "./sections/About";
import { Problems } from "./sections/Problems";
import { Building } from "./sections/Building";
import { Publications } from "./sections/Publications";
import { FreeValue } from "./sections/FreeValue";
import { Inspires } from "./sections/Inspires";
import { Footer } from "./sections/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
    <main>
      <Hero />

      <StampNav />

      <About />

      <Problems />

      <Building />

      <Publications />

      <FreeValue />

      <Inspires />
    </main>
    <Footer />
    </>
  );
}
