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
        message: '',
        _honeypot: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [toast, setToast] = useState({ show: false, type: '', message: '' })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                formRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                setToast({ show: false, type: '', message: '' })
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [toast.show])

    const showToast = (type, message) => {
        setToast({ show: true, type, message })
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData._honeypot) {
            showToast('success', 'Message sent successfully!')
            return
        }

        if (!validateForm()) {
            showToast('error', 'Please fix the errors in the form')
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("https://formsubmit.co/ajax/ignuisstudios@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                    _subject: `New Inquiry from ${formData.name.trim()}`,
                    _captcha: "false",
                    _template: "table"
                })
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '', _honeypot: '' })
                setErrors({})
                showToast('success', 'Message sent successfully! We\'ll get back to you soon.')
            } else {
                showToast('error', 'Something went wrong. Please try again.')
            }
        } catch (error) {
            console.error(error)
            showToast('error', 'Failed to send. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="contact section" ref={sectionRef}>
            {toast.show && (
                <div className={`toast toast-${toast.type}`}>
                    <span className="toast-icon">
                        {toast.type === 'success' ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        )}
                    </span>
                    <span className="toast-message">{toast.message}</span>
                    <button
                        className="toast-close"
                        onClick={() => setToast({ show: false, type: '', message: '' })}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            )}

            <div className="container">
                <div className="section-header">
                    <div className="section-label">Contact</div>
                    <h2 className="section-title">Let's work together</h2>
                    <p className="section-subtitle">
                        Have a project in mind? Get in touch and let's create something amazing.
                    </p>
                </div>

                <div className="contact-content" ref={formRef}>
                    <div className="contact-info">
                        <a href="mailto:ignuisstudios@gmail.com" className="info-card">
                            <div className="info-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className="info-details">
                                <span className="info-title">Email</span>
                                <span className="info-text">ignuisstudios@gmail.com</span>
                            </div>
                        </a>

                        <a href="tel:+916205708606" className="info-card">
                            <div className="info-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="info-details">
                                <span className="info-title">Phone</span>
                                <span className="info-text">+91 62057 08606</span>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/916205708606?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-card whatsapp-card"
                        >
                            <div className="info-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <div className="info-details">
                                <span className="info-title">WhatsApp</span>
                                <span className="info-text">Chat with us</span>
                            </div>
                        </a>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className="info-details">
                                <span className="info-title">Location</span>
                                <span className="info-text">Bhubaneswar, India</span>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/916205708606?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Start a Conversation
                        </a>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="_honeypot"
                            value={formData._honeypot}
                            onChange={handleChange}
                            style={{ display: 'none' }}
                            tabIndex="-1"
                            autoComplete="off"
                        />

                        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="John Doe"
                                disabled={isSubmitting}
                                autoComplete="name"
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>

                        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="john@example.com"
                                disabled={isSubmitting}
                                autoComplete="email"
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Tell us about your project..."
                                rows="5"
                                disabled={isSubmitting}
                            ></textarea>
                            {errors.message && <span className="form-error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
