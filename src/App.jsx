import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

// Lazy load Catalog page for code splitting
const Catalog = lazy(() => import('./components/Catalog'))

// Loading fallback component
const LoadingFallback = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
    }}>
        <div style={{ textAlign: 'center' }}>
            <div className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                Loading...
            </div>
        </div>
    </div>
)

function App() {
    useEffect(() => {
        // Smooth scroll polyfill for older browsers
        document.documentElement.style.scrollBehavior = 'smooth'
    }, [])

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <main>
                            <Hero />
                            <Projects />
                            <About />
                            <Contact />
                        </main>
                        <Footer />
                    </>
                } />
                <Route path="/catalog" element={
                    <Suspense fallback={<LoadingFallback />}>
                        <Catalog />
                    </Suspense>
                } />
            </Routes>
            <ThemeToggle />
        </div>
    )
}

export default App
