import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    name,
    email,
    message,
    company,
    phone,
    source,
    service,
    timeline,
    budget
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format email content
    const mailOptions = {
      from: `"6ixStack Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      cc: 'mohaimenhasan@gmail.com',
      subject: `🚀 New Contact Request from ${name}`,
      html: `
        <h2>Client Contacted You</h2>
        <p><b>🧩 Service:</b> ${service}</p>
        <p><b>⏳ Timeline:</b> ${timeline}</p>
        <p><b>💰 Budget:</b> ${budget}</p>
        <p><b>📝 Message:</b><br>${message}</p>
        <hr>
        <p><b>👤 Name:</b> ${name}</p>
        <p><b>🏢 Company:</b> ${company}</p>
        <p><b>📧 Email:</b> ${email}</p>
        <p><b>📞 Phone:</b> ${phone}</p>
        <p><b>🌐 Heard From:</b> ${source}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });

  } catch (error) {
    console.error('❌ Error sending mail:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}