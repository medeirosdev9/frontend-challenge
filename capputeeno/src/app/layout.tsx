import { Header } from './components/header'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        {children}
        <Header/>
        </body>
    </html>
  )
}