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
                                <img src="/images/portfolio-img/bncc1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">BNCC Bandung Platform</p>
                                        <p className="card-text mt-auto">An LMS based web application used by BNCC Binus Bandung.
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
                            <Link className="card mb-3" to={'/portfolio/difabel'}>
                                <img src="/images/portfolio-img/difabel1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay mt-auto d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Difabel</p>
                                        <p className="card-text mt-auto">A website that provide information about persons with disabilities.</p>
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
                        <div className="content col-12 col-lg-6 col-two">
                            <Link className="card mb-3" to={'/portfolio/personal-portfolio'}>
                                <img src="/images/portfolio-img/my-portfolio1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay mt-auto d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Personal Portfolio</p>
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
                            <Link className="card mb-3" to={'/portfolio/fixcycle'}>
                                <img src="/images/portfolio-img/fixcycle1.png" className="card-img" alt=""/>
                                <div className="card-img-overlay mt-auto d-flex">
                                    <div className="wrap">
                                        <p className="card-title mt-auto">Fixcycle</p>
                                        <p className="card-text mt-auto">A mobile application that acts as an intermediary between motorcycle repair shops and customers.</p>
                                        <div className="tech-list">
                                            <ul>
                                                <li>JavaScript</li>
                                                <li>Node.js</li>
                                                <li>Express.js</li>
                                                <li>PostgreSQL</li>
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