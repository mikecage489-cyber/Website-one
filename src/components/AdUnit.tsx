import { useEffect, useRef } from 'react'

interface AdUnitProps {
  slot: string
  format?: string
  responsive?: boolean
  style?: React.CSSProperties
}

function AdUnit({ slot, format = 'auto', responsive = true, style }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null)
  const publisherId = import.meta.env.VITE_ADSENSE_PUBLISHER_ID

  useEffect(() => {
    if (publisherId && publisherId !== 'ca-pub-XXXXXXXXXXXXXXXX') {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (e) {
        console.error('AdSense error:', e)
      }
    }
  }, [publisherId])

  if (!publisherId || publisherId === 'ca-pub-XXXXXXXXXXXXXXXX') {
    return (
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center text-gray-500">
        Ad Space
      </div>
    )
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client={publisherId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  )
}

export default AdUnit
