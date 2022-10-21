import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './PortfolioExample.css';

function PortfolioExample() {
    return (
        <div>
            <Navbar />
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="port-title fw-bold mb-4">
                        BNCC Bandung Platform
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 desc">Description</div>
                                <p className="p-desc">
                                    I'm a technology enthusiast who really likes to look for problems and find ways to solve them. I have a high passion in the fields of web development, especially in backend development. I am always interested in learning new things, collaborating with others, and trying new challenges.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-me">
                                <div className="mb-2 desc">Role</div>
                                <p className="p-desc">
                                    <ul>
                                        <li>Backend developer</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default PortfolioExample;