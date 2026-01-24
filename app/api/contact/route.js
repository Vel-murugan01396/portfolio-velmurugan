import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { name, email, mobile, company } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'velmurugan01396@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Mobile: ${mobile}</p>
        <p>Company: ${company}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
