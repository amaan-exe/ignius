import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import PageLoader from './components/PageLoader'
import CookieConsent from './components/CookieConsent'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth'
    }, [])

    const handleLoaderComplete = () => {
        setIsLoading(false)
    }

    return (
        <div className="app">
            {isLoading && <PageLoader onComplete={handleLoaderComplete} />}
            <CustomCursor />
            <ScrollProgress />

            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Process />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />

            <ThemeToggle />
            <CookieConsent />
        </div>
    )
}

export default App
