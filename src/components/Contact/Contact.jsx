function Contact() {
    return (
        <section id="contact" class="contact">
            <div className="container">
                <div className="topper">
                    <div className="title fw-bold">Contact Me</div>
                    <div className="line mb-5" style={{width: "168.84px"}}></div>
                </div>
                <div className="row">
                    <div className="col-lg contact-list d-flex col-one">
                        <div className="icon pt-1 me-3">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="info">
                            <div className="content-title fw-bold">Locate me</div>
                            <div className="content">West Java, Indonesia</div>
                        </div>
                    </div>
                    <div className="col-lg contact-list d-flex col-two">
                        <div className="icon pt-1 me-3">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="info">
                            <div className="content-title fw-bold">Give me a call</div>
                            <div className="content">+62-811-2257-865</div>
                        </div>
                    </div>
                    <div className="col-lg contact-list d-flex col-three">
                        <div className="icon pt-1 me-3">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="info">
                            <div className="content-title fw-bold">Get in touch online</div>
                            <div className="content">rahmatsyifana76@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;