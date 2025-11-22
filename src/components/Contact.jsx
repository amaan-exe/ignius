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

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
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
                        <div className="info-card glass">
                            <div className="info-icon">📧</div>
                            <h3 className="info-title">Email</h3>
                            <p className="info-text">hello@ignius.agency</p>
                        </div>
                        <div className="info-card glass">
                            <div className="info-icon">📱</div>
                            <h3 className="info-title">Phone</h3>
                            <p className="info-text">+1 (555) 123-4567</p>
                        </div>
                        <div className="info-card glass">
                            <div className="info-icon">📍</div>
                            <h3 className="info-title">Location</h3>
                            <p className="info-text">San Francisco, CA</p>
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
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
