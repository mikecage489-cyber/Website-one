import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const ToolsList = lazy(() => import('./pages/ToolsList'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const ToolPage = lazy(() => import('./pages/ToolPage'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsList />} />
          <Route path="/tools/:category" element={<ToolsList />} />
          <Route path="/tool/:toolId" element={<ToolPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
