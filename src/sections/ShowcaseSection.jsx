import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const portfolioRef = useRef(null);
  const festnitrRef = useRef(null);
  const codehuntRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [portfolioRef.current, festnitrRef.current, codehuntRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Things I’ve Worked On"
          sub="💼 My Projects"
        />
        <div className="app-showcase">
          <div className="w-full">
            <div className="showcaselayout">
              <div ref={portfolioRef} className="first-project-wrapper">
                <div className="image-wrapper">
                  <a href="https://Amanjeet-07.github.io/3d-portfolio/">
                    <img src="/images/project1.png" alt="Portfolio Website Interface" />
                  </a>
                </div>
                <div className="text-content">
                  <h2>
                    <a className="github-link" href="https://github.com/Amanjeet-07/3d-portfolio/">
                      Personal Portfolio Website to showcase my Projects, Skills & Experience.
                    </a>
                  </h2>
                  <p className="text-white-50 md:text-xl">
                    Tech Stacks used - React.js, Three.js, & Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={festnitrRef}>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <a href="https://github.com/Amanjeet-07/frontend">
                      <img src="/images/project3.png" alt="FESTNITR Website Interface" />
                    </a>
                  </div>
                  <a className="github-link" href="https://github.com/Amanjeet-07/frontend">
                    <h2>FESTNITR - Institute's Fest's Official Website</h2>
                  </a>
                </div>

                <div className="project" ref={codehuntRef}>
                  <div className="image-wrapper bg-[#FFE7EB]">
                    <a href="https://github.com/Amanjeet-07/CODEHUNT-frontend">
                      <img src="/images/project2.png" alt="CODEHUNT Website Interface"/>
                    </a>
                  </div>
                  <a className="github-link" href="https://github.com/Amanjeet-07/CODEHUNT-frontend">
                    <h2>CODEHUNT - Coding Treasure Hunt Event Website</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
