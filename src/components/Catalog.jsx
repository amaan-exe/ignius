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
                                <a
                                    href={`https://wa.me/916205708606?text=Hi!%20I'm%20interested%20in%20the%20*${encodeURIComponent(item.title)}*%20(${encodeURIComponent(item.price)}).%20Please%20provide%20more%20details.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp-outline"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Inquire on WhatsApp
                                </a>
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
