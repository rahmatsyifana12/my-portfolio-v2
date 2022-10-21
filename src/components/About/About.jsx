import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutSection from "./AboutSection";

function About() {
    return (
        <div>
            <Navbar />
            <AboutSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default About;