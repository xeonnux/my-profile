import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./../components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabrice Madre - Portfolio',
  description: 'Software Developer',
  image: 'https://www.fmadre.com/static/7951fb68dcdc627361e2f1b5030199ee/e9e8b/profile_fabrice.jpg',
  url: 'https://fmadre.com',
}

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
