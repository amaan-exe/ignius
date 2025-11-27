import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const projectsRef = useRef(null)

    const projects = [
        {
            id: 1,
            title: 'Luxury E-Commerce',
            category: 'Web Development',
            description: 'High-end fashion store with seamless shopping experience and modern UI',
            image: '/assets/ecommerce_website_1763845822235.png',
            tags: ['React', 'E-Commerce', 'UI/UX'],
            url: 'https://aurora-mode.vercel.app/'
        },
        {
            id: 2,
            title: 'Analytics Dashboard',
            category: 'SaaS Platform',
            description: 'Powerful business intelligence platform with real-time data visualization',
            image: '/assets/saas_dashboard_1763845840300.png',
            tags: ['Dashboard', 'Analytics', 'SaaS'],
            url: 'https://ignius-olive.vercel.app/'
        },
        {
            id: 3,
            title: 'Tech Startup Landing',
            category: 'Landing Page',
            description: 'Conversion-focused landing page with stunning animations and CTAs',
            image: '/assets/landing_page_1763845862140.png',
            tags: ['Landing Page', 'Startup', 'Marketing'],
            url: 'https://ignius-olive.vercel.app/'
        },
        {
            id: 4,
            title: 'Construction Site Landing Page',
            category: 'Landing Page',
            description: 'Full on construction site landing page',
            image: '/assets/images/image.png',
            tags: ['Website', 'Construction', 'Website Design'],
            url: 'https://smart-construction-developers.vercel.app/'
        },
        {
            id: 5,
            title: 'Photography Portfolio',
            category: 'Portfolio Website',
            description: 'Elegant portfolio showcasing creative work with immersive gallery',
            image: '/assets/portfolio_website_1763845901651.png',
            tags: ['Portfolio', 'Photography', 'Gallery'],
            url: 'https://ignius-olive.vercel.app/'
        },
        {
            id: 6,
            title: 'Fine Dining Experience',
            category: 'Restaurant Website',
            description: 'Luxury restaurant website with online reservations and menu showcase',
            image: '/assets/restaurant_website_1763845924769.png',
            tags: ['Restaurant', 'Booking', 'Hospitality'],
            url: 'https://ignius-olive.vercel.app/'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        end: 'bottom 60%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Projects stagger animation
            gsap.fromTo(
                projectsRef.current.children,
                { y: 100, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="section-header" ref={titleRef}>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Explore our portfolio of stunning digital experiences crafted for clients worldwide
                    </p>
                </div>

                <div className="projects-grid" ref={projectsRef}>
                    {projects.map((project) => (
                        <div key={project.id} className="project-card card">
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-sm"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-category">{project.category}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
