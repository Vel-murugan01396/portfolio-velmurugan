import './globals.css'

export const metadata = {
  title: 'Portfolio | Frontend Developer',
  description: 'Portfolio - Frontend, React & Next.js Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
