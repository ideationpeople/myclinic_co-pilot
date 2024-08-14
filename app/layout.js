import '@/public/assets/vendor/animate.css/animate.min.css'
import '@/public/assets/vendor/aos/aos.css'
import '@/public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/public/assets/vendor/boxicons/css/boxicons.min.css'
import '@/public/assets/vendor/glightbox/css/glightbox.min.css'
import '@/public/assets/vendor/remixicon/remixicon.css'
import '@/public/assets/vendor/swiper/swiper-bundle.min.css'
import '@/public/assets/css/style.css'
import Script from 'next/script'
import { AuthProvider } from './context/AuthContext.jsx'
import {Open_Sans, Raleway} from 'next/font/google'

export const metadata = {
  title: "My Clinic Co-pilot",
  description: "MyClinic Co-pilot",
  icons:{
    icon: ['./favicon-32x32.png'],
    apple: [ './apple-touch-icon.png' ],
    android: [ './android-chrome-192x192.png' ],
    manifest: [ 
      './site.webmanifest'
    ]
  }
};

const opensans = Open_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${opensans.className}${raleway.className}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-84WSQLNCSJ`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-84WSQLNCSJ');
            `,
          }}
        />
      </head>
      <body>
        <AuthProvider>
        {children}
        </AuthProvider>
        <Script src="assets/vendor/aos/aos.js" />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy='beforeInteractive'/>
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="assets/vendor/swiper/swiper-bundle.min.js"/>
        <Script src="assets/js/main.js" strategy='beforeInteractive'/>
      </body>
    </html>
  );
}