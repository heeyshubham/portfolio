'use client'; //Extra

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect, useState } from "react"; //Extra
import { AnimatePresence } from 'framer-motion'; //Extra
import Preloader from '../components/Preloader'; //Extra

export default function Home() {

  //Extra
  const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    //Extra End


  return (
    <main className="flex flex-col items-center px-4">
      
      <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
