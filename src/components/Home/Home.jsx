import About from "../About/About";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HomeSection from "./HomeSection";

function Home() {
    return (
        <div>
            <Navbar />
            <HomeSection />
            <About />
            <Footer />
        </div>
    );
}

export default Home;