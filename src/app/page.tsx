import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/sections/contact";
import { Process } from "@/components/sections/process";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProblemSolution />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
