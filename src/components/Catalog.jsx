import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from './Navbar'
import Footer from './Footer'
import './Catalog.css'

const Catalog = () => {
    const catalogRef = useRef(null)

    useEffect(() => {
        // Entrance animations
        gsap.fromTo(
            '.catalog-header',
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )

        gsap.fromTo(
            '.pricing-card',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.3
            }
        )
    }, [])

    const pricingData = [
        {
            title: 'Simple React Website',
            description: 'Includes Home, About, Contact, Gallery, and Inquiry Form pages',
            price: '₹5,000',
            features: ['Responsive Design', 'Modern UI/UX', 'Contact Form', 'Image Gallery']
        },
        {
            title: 'Extra Page',
            description: 'Add additional pages to your website',
            price: '₹500',
            features: ['Custom Design', 'Fully Responsive', 'SEO Ready']
        },
        {
            title: 'Map Integration',
            description: 'Interactive Google Maps integration',
            price: '₹250',
            features: ['Custom Markers', 'Location Display', 'Mobile Friendly']
        },
        {
            title: 'School Landing Page',
            description: 'Professional landing page with basic features',
            price: '₹7,000',
            features: ['Custom Design', 'Admission Forms', 'Gallery', 'Contact Section']
        },
        {
            title: 'Travelling Site',
            description: 'Complete site with product listings',
            price: '₹7,000',
            features: ['Product Catalog', 'Booking System', 'Image Galleries', 'Responsive Design']
        },
        {
            title: 'Photography Portfolio',
            description: 'Stunning portfolio for photographers',
            price: '₹6,000',
            features: ['Image Galleries', 'Lightbox', 'Contact Form', 'About Section']
        },
        {
            title: 'Basic SEO',
            description: 'Search engine optimization setup',
            price: '₹2,000',
            features: ['Meta Tags', 'Sitemap', 'Analytics Setup', 'Performance Optimization']
        },
        {
            title: 'Deployment & Handling',
            description: 'Annual maintenance and updates',
            price: '₹500/year',
            features: ['Bug Fixes', 'Updates', 'Support', 'Monitoring']
        }
    ]

    return (
        <>
            <Navbar />
            <div className="catalog-page" ref={catalogRef}>
                <div className="container">
                    <header className="catalog-header">
                        <h1 className="gradient-text">Our Services</h1>
                        <p className="catalog-subtitle">
                            Professional web development solutions tailored to your needs
                        </p>
                        <div className="catalog-note">
                            <span className="note-icon">ℹ️</span>
                            <p>Domain and hosting charges are on client's expenses</p>
                        </div>
                    </header>

                    <div className="pricing-grid">
                        {pricingData.map((item, index) => (
                            <div key={index} className="pricing-card card">
                                <div className="pricing-header">
                                    <h3>{item.title}</h3>
                                    <p className="pricing-description">{item.description}</p>
                                </div>
                                <div className="pricing-amount">
                                    <span className="price gradient-text">{item.price}</span>
                                </div>
                                <ul className="pricing-features">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="feature-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="catalog-cta">
                        <h2>Ready to get started?</h2>
                        <p>Contact us to discuss your project requirements</p>
                        <a href="mailto:ignuisstudios@gmail.com" className="btn btn-primary">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Catalog
