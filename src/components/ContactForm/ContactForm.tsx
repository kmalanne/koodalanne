'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

import { LoadingIndicator } from '../LoadingIndicator'

type FormData = {
  name: string
  email: string
  organisation: string
  message: string
}

type Error = {
  email: boolean
  message: boolean
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organisation: '',
    message: '',
  })

  const [errors, setErrors] = useState<Error>({ email: false, message: false })
  const [isSubmitting, setSubmitting] = useState<boolean>(false)
  const [isSubmitError, setSubmitError] = useState<boolean>(false)
  const [isSubmitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (name === 'email' || name === 'message') {
      setErrors({ ...errors, [name]: value.trim() === '' })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitting(true)

    setErrors({ email: false, message: false })

    const data = { ...formData }

    if (formData.email.trim() === '') {
      setErrors({ ...errors, email: true })
      return
    }

    if (formData.message.trim() === '') {
      setErrors({ ...errors, message: true })
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      setSubmitError(true)
    }

    setSubmitting(false)
  }

  if (isSubmitted) {
    return <div className="text-white">Thank you for contacting me, I will be in touch soon!</div>
  }

  return (
    <>
      <div className="w-full max-w-md text-white mb-2">
        Send me an email to{' '}
        <a
          className="text-miamiPink hover:text-miamiBlue"
          href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#107;&#111;&#111;&#100;&#097;&#108;&#097;&#110;&#110;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
        >
          koodalanne@gmail.com
        </a>{' '}
        or fill the form:
      </div>

      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="bg-miamiBlue w-full rounded-lg shadow-md p-4 md:p-8">
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="email">
              Email <span className="text-miamiPink">*</span>
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.email ? 'border-miamiPink' : 'border-black'
              } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-xs italic">Email is required.</p>}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="organisation">
              Organisation
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="organisation"
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-2" htmlFor="message">
              Message <span className="text-miamiPink">*</span>
            </label>
            <textarea
              className={`shadow appearance-none border ${
                errors.message ? 'border-miamiPink' : 'border-black'
              } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="message"
              name="message"
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-xs italic">Message is required.</p>}
          </div>
        </div>

        {isSubmitError && (
          <div className="flex items-center justify-center mt-4 text-white">
            Something went wrong. Try again or send an email.
          </div>
        )}

        <div className="flex items-center justify-center">
          {isSubmitting ? (
            <div className="mt-6 mb-6">
              <LoadingIndicator />
            </div>
          ) : (
            <button
              className={`${
                errors.message || !formData.email || !formData.message
                  ? 'bg-miamiPink-light border-black cursor-not-allowed'
                  : 'bg-miamiPink border-miamiPink hover:bg-black hover:text-white hover:border hover:border-miamiBlue'
              } w-full rounded-md inline-block mb-6 mt-6 px-3 py-6 text-center font-bold uppercase border `}
              type="submit"
              disabled={!formData.email && !formData.message}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  )
}
