import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const sectionRef = useRef(null)
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                formRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("https://formsubmit.co/ajax/amanullah2607main@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Portfolio Inquiry!"
                })
            });

            const result = await response.json();

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' })
                alert('Thank you! Your message has been sent successfully. We will get back to you soon.')
            } else {
                alert('Something went wrong. Please try again later.')
            }
        } catch (error) {
            console.error(error)
            alert('Failed to send message. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? Get in touch and let's create something amazing
                    </p>
                </div>

                <div className="contact-content" ref={formRef}>
                    <div className="contact-info">
                        <a href="mailto:amanullah2607main@gmail.com" className="info-card glass" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="info-icon">📧</div>
                            <h3 className="info-title">Email</h3>
                            <p className="info-text">amanullah2607main@gmail.com</p>
                        </a>
                        <a href="tel:+918271301179" className="info-card glass" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="info-icon">📱</div>
                            <h3 className="info-title">Phone</h3>
                            <p className="info-text">+91 82713 01179</p>
                        </a>
                        <div className="info-card glass">
                            <div className="info-icon">📍</div>
                            <h3 className="info-title">Location</h3>
                            <p className="info-text">Bhubneshwar Odisha India</p>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-link glass">
                                <span>Twitter</span>
                            </a>
                            <a href="#" className="social-link glass">
                                <span>LinkedIn</span>
                            </a>
                            <a href="#" className="social-link glass">
                                <span>Dribbble</span>
                            </a>
                            <a href="#" className="social-link glass">
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form glass" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="amanullah2607main@gmail.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Tell us about your project..."
                                rows="6"
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
