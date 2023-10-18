import './globals.css'

export const metadata = {
  title: 'koodalanne',
  description: 'koodalanne freelance developer website',
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
      'Kehittäjä',
      'Koodari',
    ],
  ],
  authors: [{ name: 'Kai-Mikael Alanne' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
