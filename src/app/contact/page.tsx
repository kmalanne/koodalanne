import type { Metadata } from 'next'

import { ContactForm } from '../../components/ContactForm'
import { pressStart2P } from '../font'

export const metadata: Metadata = {
  title: 'koodalanne contact',
  description: 'Contact koodalanne.',
  alternates: {
    canonical: '/contact',
  },
}

export default function cv() {
  return (
    <section id="contact-me">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div className={pressStart2P.className}>
          <h1 className="text-4xl text-miami-pink mb-4">Contact me</h1>
        </div>
        <ContactForm />
        <a href="/" className="mt-2 text-xl text-miami-pink hover:text-miami-blue">
          Back
        </a>
      </div>
    </section>
  )
}
