import './globals.css'
import { cx } from '../utils/index.js';
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: 'CodeCove',
  description: 'Generated & Maintained by Antonio Robles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
           >{children}</body>
    </html>
  )
}
