import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Skill from "../Skill/Skill";
import HomeSection from "./HomeSection";

function Home() {
    return (
        <div>
            <Navbar />
            <HomeSection />
            <About />
            <Skill />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;