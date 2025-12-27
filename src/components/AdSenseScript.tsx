import { useEffect } from 'react'

function AdSenseScript() {
  const publisherId = import.meta.env.VITE_ADSENSE_PUBLISHER_ID

  useEffect(() => {
    if (publisherId && publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX') {
      const script = document.createElement('script')
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [publisherId])

  return null
}

export default AdSenseScript
