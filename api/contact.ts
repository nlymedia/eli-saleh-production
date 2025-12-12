import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, firstName, lastName, email, phone, service, message }: ContactFormData = req.body;

    // Determine the full name (English uses 'name', French uses firstName + lastName)
    const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

    // Validate required fields
    if (!fullName || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate field lengths for security
    if (fullName.length > 200 || email.length > 255 || phone.length > 50 || service.length > 100 || message.length > 5000) {
      return res.status(400).json({ error: 'Field length exceeds maximum allowed' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Dr. Saleh Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Consultation Request: ${service}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Phone:</strong> <a href="tel:+1${phone.replace(/\D/g, '')}">${escapeHtml(phone)}</a></p>
        <p><strong>Service of Interest:</strong> ${escapeHtml(service)}</p>
        <h3>Message:</h3>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Consultation Request

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Service of Interest: ${service}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

// Helper function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
