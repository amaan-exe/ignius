import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const projectsRef = useRef(null)

    const projects = [
        {
            id: 1,
            title: 'Smart Construction Developers',
            category: 'Corporate Website',
            description: 'Professional construction company website with project showcase, services, and contact integration.',
            image: '/assets/scd_screenshot.png',
            tags: ['React', 'Corporate', 'Construction'],
            url: 'https://scd.net.in/',
            featured: true
        },
        {
            id: 2,
            title: 'Suvidha Travels',
            category: 'Travel & Tourism',
            description: 'Modern travel agency website featuring tour packages, booking system, and destination guides.',
            image: '/assets/suvidha_travels.png',
            tags: ['Next.js', 'Travel', 'Booking'],
            url: 'https://suvidhatravels.vercel.app/'
        },
        {
            id: 3,
            title: 'MIA Patna',
            category: 'Educational Institution',
            description: 'Comprehensive school website with admissions, academics, and student management features.',
            image: '/assets/mia_patna.png',
            tags: ['React', 'Education', 'CMS'],
            url: 'https://miapatna.vercel.app/'
        },
        {
            id: 4,
            title: 'Apna Swaad',
            category: 'Restaurant & Food',
            description: 'Elegant restaurant website with menu showcase, online ordering, and reservation system.',
            image: '/assets/apna_swaad.png',
            tags: ['React', 'Restaurant', 'E-commerce'],
            url: 'https://apnaswaad.vercel.app/'
        },
        {
            id: 5,
            title: 'Banquet Lake',
            category: 'Hospitality & Events',
            description: 'Luxury banquet and event venue website with gallery, booking, and event management.',
            image: '/assets/banquet_lake.png',
            tags: ['Next.js', 'Hospitality', 'Events'],
            url: 'https://banquet-lake.vercel.app/'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            )

            gsap.fromTo(
                projectsRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" className="projects section" ref={sectionRef}>
            <div className="container">
                <div className="section-header" ref={headerRef}>
                    <div className="section-header-content">
                        <div className="section-label">Our Work</div>
                        <h2 className="section-title">Selected Projects</h2>
                        <p className="section-subtitle">
                            Real projects we've delivered for clients across various industries.
                        </p>
                    </div>
                </div>

                <div className="projects-grid" ref={projectsRef}>
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/800x600/1a1a1a/00f0ff?text=${encodeURIComponent(project.title)}`
                                    }}
                                />
                                <div className="project-overlay">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        View Live Site
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
