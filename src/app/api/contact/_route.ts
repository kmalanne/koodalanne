type RequestBody = {
  name: string
  email: string
  organisation: string
  message: string
}

export async function POST(req: Request) {
  const data = (await req.json()) as RequestBody

  const { name, email, organisation, message } = data

  const nodemailer = (await import('nodemailer')).default

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const opts = {
    from: process.env.EMAIL_FROM_ADDRESS,
    to: process.env.EMAIL_TO_ADDRESS,
    subject: 'Website contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation}\nMessage: ${message}`,
  }

  try {
    await transporter.sendMail(opts)

    return new Response('Success', {
      status: 200,
    })
  } catch (error) {
    return new Response('Error', {
      status: 500,
    })
  }
}
