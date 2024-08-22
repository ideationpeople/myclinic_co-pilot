export default function Team() {
    return (
        // <!-- ======= Team Section ======= -->
        <section id="team" className="team">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Team</h2>
                    <p>Our Hardworking Team</p>
                </div>

                <div className="row">

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="gaurav_img" />
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/gaurav-thapar-76771130/"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Gaurav Thapar</h4>
                                <span>Marketing</span>
                                <p className="fw-lighter fst-italic">Ex Coke, IIM </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="100">
                            <div className="member-img">
                                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="falgun_img" />
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/falgunmistry/"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Falgun Mistry</h4>
                                <span>Technology / Operations</span>
                                <p className="fw-lighter fst-italic">28 years of entrepreneurship</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="200">
                            <div className="member-img">
                                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="amrinder_img" />
                                <div className="social">
                                    <a href="https://www.linkedin.com/in/amarindersidhu/"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Amarinder Sidhu</h4>
                                <span>Domain Advisor</span>
                                <p className="fw-lighter fst-italic">Ex Deloitte</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- End Team Section --> */}
        </section>

    )
}