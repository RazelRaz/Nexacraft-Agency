import './globals.css'
import SiteNavBar from '@/components/SiteNavBar'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader'


export const metadata = {
  title: 'NexaCraft Agency Website',
  description: 'A Agency Website with NextJs 13 - SEO Friendly & REST API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669" height={3} speed={190}></NextTopLoader>
        <SiteNavBar></SiteNavBar>
          {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
