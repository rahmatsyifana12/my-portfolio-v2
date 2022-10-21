function PortfolioSection() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="topper">
                    <div className="title fw-bold">My Portfolio</div>
                    <div className="line mb-5" style={{width: "183.91px"}}></div>
                </div>
                <div className="list row">
                    <div className="content col-12 col-lg-6 col-one">
                        <a className="card mb-3">
                            <img src="/images/portfolio-img/difabel.png" className="card-img" alt=""/>
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
                        </a>
                        <a className="card mb-3">
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
                        </a>
                    </div>
                    <div className="content col-12 col-lg-6 col-two">
                        <a className="card mb-3">
                            <img src="/images/portfolio-img/my-portfolio.png" className="card-img" alt=""/>
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
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;