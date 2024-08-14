"use client"

import styles from '@/public/assets/css/newsletter.module.css'
import Link from "next/link"
import { useState } from 'react';
export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email}),
            });

            if (response.ok) {
                setEmail("");
                console.log({email: email});
            }
            else {
                alert("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <footer id="footer" className="py-4">
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <div className="innercontainer">
                        <div className="logo mb-4">
                            <Link href="/" legacyBehavior>
                                <a>
                                    <img src="assets/img/logo/logo.png" alt="Logo" className="img-fluid" />
                                </a>
                            </Link>
                        </div>
                        <div className={`text-center ${styles.newsletterContainer} mb-4`}>
                            <p className="fw-bold fs-3">Our newsletter</p>
                            <p className="fs-6">Stay informed and never miss out on the latest updates with our newsletter subscription</p>
                            <form onSubmit={handleSubmit} id="newsletterForm" className="form-inline justify-content-center">
                                <div className="form-group d-flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control me-2 newsletter-form"
                                        id="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                    <button type="submit" className="newsletter-btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="social-links text-center mb-3">
                        <a href="#" className="twitter me-3"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/mycliniccopilot
" className="facebook me-3"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram me-3"><i className="bx bxl-instagram"></i></a>
                        <a href="https://join.skype.com/invite/uj0JwHpegulz" className="google-plus me-3"><i className="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/company/my-clinic-co-pilot/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                    <div className="text-center mt-3">
                        <p className="mb-1">&copy; Copyright <strong><span>2024,</span></strong>
                        {/* <p>, Ideation People Solutions Pvt Ltd</p> */}
                        </p>
                        <p>Designed by <a href="https://ideationpeople.com/">Ideation People Solutions Pvt Ltd</a></p>
                    </div>
                </div>
            </div>
        </footer>

    )
}