"use client"

import React, { useState, useEffect, useRef } from "react"

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [clinicname, setClinicName] = useState("");
    const [phone, setPhone] = useState("");
    const [clinicaddress, setClinicAddress] = useState("");
    const [message, setMessage] = useState("");
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Clean up timeout on component unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, clinicname, phone, clinicaddress, message }),
            });

            if (response.ok) {
                setName("");
                setEmail("");
                setClinicName("");
                setPhone("");
                setClinicAddress("");
                setMessage("");


                const submitButton = document.getElementById('submitButton');
                submitButton.textContent = 'Data Stored Successfully';
                submitButton.classList.add('success');

                timeoutRef.current = setTimeout(() => {
                    submitButton.textContent = 'Send Message';
                    submitButton.classList.remove('success');
                }, 2000);
                console.log({
                    name: name,
                    email: email,
                    clinicname: clinicname,
                    phone: phone,
                    clinicaddress: clinicaddress,
                    message: message
                });
            }
            else {
                alert("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        // <!-- ======= Contact Section ======= -->
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.393215101302!2d73.8919470748195!3d18.556302982544253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12f701d42c1%3A0xf1f9d29afa080b90!2s91springboard%20Yerwada%2C%20Pune!5e0!3m2!1sen!2sin!4v1696349552517!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>


                <div className="row mt-5">

                    <div className="col-lg-4" data-aos="fade-right">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>91 Springboard, Creaticity, Yerwada, Pune, India. 411006.</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>sales@mycliniccopilot.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+14154753670</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                        <form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" value={name} name="name" className="form-control" id="name" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" value={email} className="form-control" name="email" id="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="text" value={clinicname} className="form-control" name="clinicname" id="clinicname" placeholder="Your Clinic Name" required onChange={(e) => setClinicName(e.target.value)} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="tel" value={phone} className="form-control" name="phone" id="phone" placeholder="Your Phone Number" required onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" value={clinicaddress} className="form-control" name="clinicaddress" id="clinicaddress" placeholder="Clinic Address" required onChange={(e) => setClinicAddress(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <textarea value={message} className="form-control" name="message" rows="5" placeholder="Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit" id="submitButton">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
            {/* <!-- End Contact Section --> */}
        </section>
    )
}