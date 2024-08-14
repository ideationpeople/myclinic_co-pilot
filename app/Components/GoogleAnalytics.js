'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_MEASUREMENT_ID])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}