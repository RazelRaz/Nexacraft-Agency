import './globals.css'

import NextTopLoader from 'nextjs-toploader'
import SiteFooter from '@/components/SiteFooter'
import SiteNavBar from '@/components/SiteNavBar'


// Dynamic metadata
export async function generateMetadata(){

  // SEO Data Fetch
  return {
    title: 'NexaCraft Agency Website',
    description: 'A Agency Website with NextJs 13 - SEO Friendly & REST API',
  }

}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669" height={3} speed={190}></NextTopLoader>
        <SiteNavBar></SiteNavBar>
          {children}
        <SiteFooter></SiteFooter>
      </body>
    </html>
  )
}
