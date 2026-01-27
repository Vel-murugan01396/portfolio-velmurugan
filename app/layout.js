import './globals.css'

export const metadata = {
  title: 'Portfolio | Frontend Developer',
  description: 'Portfolio - Frontend, React & Next.js Developer',
   icons: {
    icon: '/developer.png',          // browser tab icon
    apple: '/developer.png' // optional (for iOS)
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
