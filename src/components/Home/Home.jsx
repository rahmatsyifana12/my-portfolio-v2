import AboutSection from "../About/AboutSection";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PortfolioSection from "../Portfolio/PortfolioSection";
import Skill from "../Skill/Skill";
import HomeSection from "./HomeSection";

function Home() {
    return (
        <div>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <Skill />
            <PortfolioSection />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;