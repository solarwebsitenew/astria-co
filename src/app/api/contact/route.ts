import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, businessName, service, budget, message } = body

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: 'Please provide your name and contact details (email or phone).' },
        { status: 400 }
      )
    }

    const leadData = {
      timestamp: new Date().toISOString(),
      name,
      businessName: businessName || 'Not specified',
      email: email || 'Not provided',
      phone: phone || 'Not provided',
      service: service || 'Full-Funnel Performance Marketing',
      budget: budget || 'Flexible',
      message: message || '',
      recipientEmail: 'contact@astria.co.in',
    }

    console.log('🚀 [NEW LEAD RECEIVED FOR ASTRIA & CO]:', leadData)

    // Note: Can integrate Resend, Sendgrid, or SMTP nodemailer here to send to contact@astria.co.in
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your growth audit request has been sent to contact@astria.co.in. Our team will contact you within 2 hours.',
        lead: leadData,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

