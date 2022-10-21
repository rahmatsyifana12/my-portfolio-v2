function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="topper">
                    <div className="title fw-bold">About me</div>
                    <div className="line mb-5" style={{width: "146.34px"}}></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="about-img">
                            <img className="img-fluid follow ratio ratio-1x1 position-relative" src="/images/about-me.png" alt="about img"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about-me">
                            <div className="about-me-title fw-bold mb-2">Who am i?</div>
                            <p className="desc">
                                I'm a technology enthusiast who really likes to look for problems and find ways to solve them. I have a high passion in the fields of web development, especially in back end. I am always interested in learning new things, collaborating with others, and trying new challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;