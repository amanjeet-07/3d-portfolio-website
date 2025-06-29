import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/Skills";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import StudyTimeline from "./sections/Education";
import ShowcaseSection from "./sections/Projects";
import LogoShowcase from "./sections/LogoShowcase";
import Hobbies from "./sections/Hobbies";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <StudyTimeline />
    <TechStack />
    <LogoShowcase />
    <ShowcaseSection />
    <Experience />
    <Hobbies />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
