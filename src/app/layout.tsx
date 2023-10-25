import './globals.css'

export const metadata = {
  title: 'koodalanne',
  description: 'koodalanne freelance software developer website',
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
    ],
  ],
  authors: [{ name: 'Kai-Mikael Alanne' }],
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
