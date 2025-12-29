const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const { translations } = require('./translations');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message, language = 'de' } = req.body;

  // Get translations for the requested language (default to German)
  const t = translations[language] || translations.de;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: t.allFieldsRequired });
  }

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'buden1998@googlemail.com', // Your email address
      subject: `Portfolio Kontakt Formular - Nachricht von ${name}`,
      html: `
        <h3>Neue Anfrage</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email, // Allows you to reply directly to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: t.emailSentSuccess });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: t.emailSendFailed });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});