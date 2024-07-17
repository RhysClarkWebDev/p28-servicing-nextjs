import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SETUP FORM
let smtpHost = process.env.SMTP_HOST;
let smtpPort = process.env.SMTP_PORT;
let smtpUser = process.env.SMTP_USER;
let smtpPass = process.env.SMTP_PASS;
let mailTo = process.env.MAIL_TO;

const transporter = nodemailer.createTransport({
    service: smtpHost,
    port: Number(smtpPort),
    auth: {
        user: smtpUser,
        pass: smtpPass,
    },
});

export async function POST(request: Request) {
    const body = await request.json();

    try {
        await transporter.sendMail({
            from: `P28 Servicing Website - <${smtpHost}>`,
            to: mailTo,
            replyTo: body.email,
            subject: `P28 Servicing: Contact`,
            html: `
                <h1>Contact From Website</h1>
                <p><span style='font-weight:bold'>Name: </span>${body?.name}</p>
                <p><span style='font-weight:bold'>Mobile Number: </span>${body?.mobile}</p>
                <p><span style='font-weight:bold'>Vehicle Registration: </span>${body?.registration}</p>
                <br>
                <h3>Message</h3>
                <p>${body.message}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
        return new NextResponse(`Internal server error: ${error}`, {
            status: 500,
        });
    }
}
