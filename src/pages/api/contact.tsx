import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { name: any; email: any; subject: any; phone: any; description: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { name, email, subject, phone, description } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Contact Form Submission: ${subject}`,
        text: `You have a new inquiry.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Description:</strong> ${description}</p>
        `,
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
