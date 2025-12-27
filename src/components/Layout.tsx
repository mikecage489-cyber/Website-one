import { ReactNode, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import AdSenseScript from './AdSenseScript'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Initialize AdSense ads after page load
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense error:', e)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <AdSenseScript />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
