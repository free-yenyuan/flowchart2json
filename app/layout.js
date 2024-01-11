import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Script Toolbox',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='w-screen h-screen'>
      <body className={inter.className + 'w-full h-full grid grid-cols-1 place-items-center '}>{children}</body>
    </html>
  )
}
