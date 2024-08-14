export default function Cta() {
    return (
        // <!-- ======= Cta Section ======= -->
        <section id="cta" className="cta">
            <div className="container">

                <div className="row" data-aos="zoom-out">
                    <div className="col-lg-9 text-center text-lg-start">
                        <h3>Call To Action</h3>
                        <p> Ready to take your business to the next level with a digital strategy that works? Get in touch with us today via Email, WhatsAppTM, or SkypeTM.</p>
                    </div>
                    {/* <div className="col-lg-3 cta-btn-container text-center">
                        <a className="cta-btn align-middle" href="#">Call To Action</a>
                    </div> */}
                    <div className="d-flex flex-row justify-content-center w-100">
                        <a
                            href="mailto:sales@mycliniccopilot.com"
                            className="google-plus cta-btn align-self-start mx-2"
                        >
                            <i className="bi bi-envelope-at"></i>
                        </a>
                        <a
                            href="https://wa.me/+918779300073"
                            className="google-plus cta-btn align-self-start mx-2"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a
                            href="https://join.skype.com/invite/uj0JwHpegulz"
                            className="google-plus cta-btn align-self-start mx-2"
                        >
                            <i className="bi bi-skype"></i>
                        </a>
                        <a
                            href="https://tel://+14154753670 "
                            className="google-plus cta-btn align-self-start mx-2"
                        >
                            <i className="bi bi-telephone"></i>
                        </a>
                    </div>

                </div>

            </div>
            {/* <!-- End Cta Section --> */}
        </section>
    )
}