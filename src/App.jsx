import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    useEffect(() => {
        // Smooth scroll polyfill for older browsers
        document.documentElement.style.scrollBehavior = 'smooth'
    }, [])

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
