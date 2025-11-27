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
            const response = await fetch("https://formsubmit.co/ajax/ignuisstudios@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Portfolio Inquiry!",
                    _captcha: "false"
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
                        <a href="mailto:ignuisstudios@gmail.com" className="info-card glass" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="info-icon">📧</div>
                            <h3 className="info-title">Email</h3>
                            <p className="info-text">ignuisstudios@gmail.com</p>
                        </a>
                        <a href="tel:+916205708606" className="info-card glass" style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="info-icon">📱</div>
                            <h3 className="info-title">Phone</h3>
                            <p className="info-text">+91 62057 08606</p>
                        </a>
                        <a href="https://wa.me/916205708606?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project%20with%20Ignius%20Studios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-card glass whatsapp-card"
                            style={{ textDecoration: 'none', display: 'block' }}>
                            <div className="info-icon">💬</div>
                            <h3 className="info-title">WhatsApp</h3>
                            <p className="info-text">Chat with us instantly</p>
                        </a>
                        <div className="info-card glass">
                            <div className="info-icon">📍</div>
                            <h3 className="info-title">Location</h3>
                            <p className="info-text">Bhubneshwar Odisha India</p>
                        </div>
                        <a
                            href="https://wa.me/916205708606?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project%20with%20Ignius%20Studios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                            style={{ marginTop: '1.5rem' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
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
                                placeholder="your.email@example.com"
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
