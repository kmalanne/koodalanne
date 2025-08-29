import type { Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { pressStart2P } from './font'

export const metadata: Metadata = {
  title: 'koodalanne | Freelance Software Developer',
  description: 'Kai-Mikael Alanne, an experienced freelance software developer for web, mobile, cloud, data and AI projects. Based in Finland. Open for new opportunities.',
  keywords: ['freelance', 'software developer', 'web', 'cloud', 'data', 'Finland', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Kai-Mikael Alanne', url: 'https://koodalanne.com' }],
  openGraph: {
    title: 'koodalanne | Freelance Software Developer',
    description: 'Kai-Mikael Alanne, an experienced freelance software developer for web, mobile, cloud, data and AI projects. Based in Finland. Open for new opportunities.',
    url: 'https://koodalanne.com',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Kai-Mikael Alanne - koodalanne',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'koodalanne | Freelance Software Developer',
    description: 'Kai-Mikael Alanne, an experienced freelance software developer for web, mobile, cloud, data and AI projects. Based in Finland. Open for new opportunities.',
    images: ['/images/og.png'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>koodalanne | Freelance Software Developer</title>
        <meta
          name="description"
          content="Kai-Mikael Alanne, an experienced freelance software developer for web, mobile, cloud, data and AI projects. Based in Finland. Open for new opportunities."
        />
        <meta
          name="keywords"
          content="freelance, software developer, web, cloud, data, Finland, Next.js, React, TypeScript"
        />
        <meta property="og:title" content="koodalanne | Freelance Software Developer" />
        <meta
          property="og:description"
          content="Kai-Mikael Alanne, an experienced freelance software developer for web, mobile, cloud, data and AI projects. Based in Finland. Open for new opportunities."
        />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:url" content="https://koodalanne.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="koodalanne | Freelance Software Developer" />
        <meta
          name="twitter:description"
          content="Kai-Mikael Alanne, an experienced freelance software developer for web, mobile, cloud, data and AI projects. Based in Finland. Open for new opportunities."
        />
        <meta name="twitter:image" content="/images/og.png" />
        <link rel="canonical" href="https://koodalanne.com/" />
      </Head>
      <section
        id="who-am-i"
        className="md:flex md:justify-center md:items-center md:flex-row md:min-h-screen"
      >
        <div className="min-h-screen flex justify-center items-center px-4">
          <div>
            <div className="flex justify-left h-14 lg:hidden mb-8">
              <div>
                <Image
                  alt="Profile picture of Kai-Mikael Alanne, freelance software developer"
                  src="/images/face.jpeg"
                  width={50}
                  height={50}
                  className="rounded-full"
                  priority
                />
              </div>
              <div className="flex items-center pl-4 text-white">
                <span className="opacity-80">Kai-Mikael Alanne</span>
              </div>
            </div>
            <div className={pressStart2P.className}>
              <h1 className="text-4xl md:text-5xl text-miami-pink">koodalanne</h1>
            </div>
            <p className="mt-12 mb-8 text-xl text-white">
              Freelance lead/senior software developer for hire.
              <br />
              Fullstack web, mobile, cloud, data, AI &amp; team leading.
              <br />
              <a
                className="text-miami-pink! hover:text-miami-blue!"
                href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#107;&#111;&#111;&#100;&#097;&#108;&#097;&#110;&#110;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
              >
                Contact me
              </a>
            </p>
            <div className="flex flex-row justify-center items-center">
              <a
                href="/cv"
                className="w-full rounded-md inline-block mb-6 mt-6 px-3 py-6 text-center font-bold uppercase bg-miami-blue border border-black hover:bg-black hover:text-white hover:border hover:border-miami-pink"
                aria-label="Go to Curriculum Vitae page"
              >
                <span className="w-1/1">Curriculum Vitae</span>
              </a>
              <div className="flex flex-col justify-center items-center ml-6">
                <a
                  className="w-5 h-5 mt-2 mb-2 opacity-75 transform hover:scale-110 hover:opacity-100"
                  aria-label="Kai-Mikael Alanne Github profile"
                  title="Kai-Mikael Alanne github"
                  href="https://github.com/kmalanne"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-labelledby="svg-github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <title id="svg-github">Kai-Mikael Alanne Github</title>
                    <path
                      fill="#fff"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="w-5 h-5 mt-2 mb-2 opacity-75 transform hover:scale-110 hover:opacity-100"
                  aria-label="Kai-Mikael Alanne LinkedIn profile"
                  title="Kai-Mikael Alanne LinkedIn"
                  href="https://www.linkedin.com/in/kmalanne/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-labelledby="svg-linkedin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <title id="svg-linkedin">Kai-Mikael Alanne LinkedIn</title>
                    <path
                      fill="#fff"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center hidden lg:w-2/5 ml-2">
          <Image
            alt="Large profile picture of Kai-Mikael Alanne, freelance software developer"
            src="/images/face.jpeg"
            width={500}
            height={500}
            className="rounded-full"
            priority
          />
        </div>
      </section>
    </>
  )
}
