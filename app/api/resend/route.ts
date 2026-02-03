import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const data = await resend.emails.send({
      from: process.env.RESEND_DOMAIN!,
      to: [process.env.RESEND_EMAIL_USER!], 
      replyTo: email, 
      subject: `New Inquiry from meMyself.ai`,
      html: `
        <h2></h2>
        <p><bold>Name:</bold> ${name}</p>
        <p><bold>Email:</bold> ${email}</p>
        <p><bold>Message:</bold></p>
          <p>${message}</p>
      `,
    });
    return Response.json({ success: true, data }); }
   catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}
