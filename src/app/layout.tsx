import './globals.css'

export const metadata = {
  metadataBase: new URL('https://koodalanne.com'),
  title: 'koodalanne',
  description: 'Kai-Mikael Alanne, freelance software developer.',
  applicationName: 'koodalanne',
  referrer: 'origin-when-cross-origin',
  keywords: [
    [
      'Freelance software developer',
      'Web development',
      'Frontend development',
      'Backend development',
      'Fullstack development',
      'JavaScript',
      'TypeScript',
      'NextJS',
      'ReactJS',
      'HTML/CSS',
      'SQL',
      'Azure',
      'AWS',
      'Website maintenance',
      'Website optimization',
      'Cloud engineering',
      'DevOps',
      'Tech lead',
      'Web-kehittäjä',
      'Ohjelmistokehittäjä',
      'Finland',
      'Suomi',
    ],
  ],
  authors: [{ name: 'Kai-Mikael Alanne' }],
  openGraph: {
    title: 'koodalanne',
    description: 'Kai-Mikael Alanne, freelance software developer.',
    url: 'https://koodalanne.com',
    siteName: "koodalanne's site",
    locale: 'en_US',
    type: 'website',
    images: '/images/og.png',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <main>{children}</main>
        <footer className="bottom-0 left-0 w-full flex items-center justify-center">
          <span className="text-center text-white text-sm pb-2">koodalanne Oy, 3396808-5</span>
        </footer>
      </body>
    </html>
  )
}
