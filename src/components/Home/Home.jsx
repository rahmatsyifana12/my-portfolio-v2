import About from "../About/About";
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
            <Footer />
        </div>
    );
}

export default Home;