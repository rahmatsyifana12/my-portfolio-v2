import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Portfolio() {
    return (
        <div>
            <Navbar />
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="topper">
                        <div className="title fw-bold">My Portfolio</div>
                        <div className="line mb-5" style={{width: "183.91px"}}></div>
                    </div>
                    <div className="list row">
                        <div className="content col-12 col-lg-6 col-one">
                            <Link className="card mb-3" to={'/portfolio/bncc-bandung-platform'}>
                                <img src="/images/portfolio-img/difabel1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Difabel</p>
                                        <p className="card-text mt-auto">Difabel is a website that provide information about persons with disabilities.
                                        </p>
                                        <div className="tech-list">
                                            <ul>
                                                <li>Node.js</li>
                                                <li>Express.js</li>
                                                <li>TypeScript</li>
                                                <li>PostgreSQL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="card mb-3">
                                <img src="/images/portfolio-img/alibaba-cloud-register-clone.png" className="card-img" alt=""/>
                                <div className="card-img-overlay mt-auto d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Alibaba Cloud Register Page Clone</p>
                                        <p className="card-text mt-auto">A clone of Alibaba Cloud register page front-end.</p>
                                        <div className="tech-list">
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="content col-12 col-lg-6 col-two">
                            <Link className="card mb-3" to={'/portfolio/personal-portfolio'}>
                                <img src="/images/portfolio-img/my-portfolio1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay mt-auto d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Portfolio</p>
                                        <p className="card-text mt-auto">My own website-based portfolio.</p>
                                        <div className="tech-list">
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link className="card mb-3" to={'/portfolio/binus-parking'}>
                                <img src="/images/portfolio-img/binus-parking1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay mt-auto d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Binus Parking</p>
                                        <p className="card-text mt-auto">A simple parking application.</p>
                                        <div className="tech-list">
                                            <ul>
                                                <li>C++</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Portfolio;