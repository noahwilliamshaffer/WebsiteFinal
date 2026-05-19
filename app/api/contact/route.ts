import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ error: 'Message too short.' }, { status: 400 })
    }

    // To send email, install resend (`npm install resend`) and uncomment:
    //
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@noahwilliamshaffer.com',
    //   to: process.env.CONTACT_EMAIL ?? 'NoahWilliamShaffer@gmail.com',
    //   replyTo: email,
    //   subject: `[Portfolio] ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // })

    console.log('[Contact Form]', { name, email, subject, message: message.slice(0, 80) })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
