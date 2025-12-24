import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FAQ.css'

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
    const sectionRef = useRef(null)
    const faqRef = useRef(null)
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'How long does it take to build a website?',
            answer: 'Typically, a standard website takes 2-4 weeks depending on complexity. Simple landing pages can be done in 1 week, while complex web applications may take 6-8 weeks or more.'
        },
        {
            question: 'What is your pricing structure?',
            answer: 'We offer project-based pricing tailored to your specific needs. Prices start from ₹5,000 for simple websites. We provide a detailed quote after understanding your requirements during our discovery call.'
        },
        {
            question: 'Do you offer ongoing maintenance and support?',
            answer: 'Yes! We offer maintenance packages that include updates, security patches, backups, and technical support. We also provide 30 days of free support after project delivery.'
        },
        {
            question: 'What technologies do you use?',
            answer: 'We specialize in modern technologies including React, Next.js, Node.js, and various CMS platforms. We choose the best tech stack based on your project requirements and business goals.'
        },
        {
            question: 'Can you redesign my existing website?',
            answer: 'Absolutely! We can redesign and modernize your existing website while preserving your content and improving performance, user experience, and visual appeal.'
        },
        {
            question: 'Do you provide hosting services?',
            answer: 'We can guide you in choosing the best hosting solution for your needs and handle the deployment. We work with providers like Vercel, Netlify, AWS, and traditional hosting services.'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                faqRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: faqRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="faq section" ref={sectionRef}>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="section-header">
                        <div className="section-label">FAQ</div>
                        <h2 className="section-title">Frequently asked questions</h2>
                        <p className="section-subtitle">
                            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
                        </p>
                    </div>

                    <div className="faq-list" ref={faqRef}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </span>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
