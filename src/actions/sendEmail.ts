"use server"
import nodemailer from "nodemailer";
export const sendEmail = ({ firstname, lastname, email, message }: { firstname: string, lastname: string, email: string, message: string }) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Message from ${firstname} ${lastname}`,
        html: `
        <div style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    background: #f9fafb;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    color: #2d3748;
">
    <h1 style="
        font-size: 1.75rem;
        font-weight: bold;
        text-align: center;
        color: #38a169;
        border-bottom: 2px solid #38a169;
        padding-bottom: 10px;
    ">
        📩 New Contact Message
    </h1>

    <div style="
        background: #ffffff;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    ">
        <h2 style="font-size: 1.25rem; margin-bottom: 5px; color: #2d3748;">
            👤 From: <span style="color: #1a202c;">${firstname} ${lastname}</span>
        </h2>
        <h2 style="font-size: 1.125rem; color: #2d3748;">
            📧 Email: <span style="color: #1a202c;">${email}</span>
        </h2>
    </div>

    <div style="
        background: #ffffff;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    ">
        <p style="font-size: 1.125rem; color: #2d3748; line-height: 1.6;">
            ${message}
        </p>
    </div>

    <p style="
        font-size: 1rem;
        text-align: center;
        margin-top: 20px;
        color: #718096;
    ">
        This message was sent via the contact form.
    </p>
</div>
        `
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error)
            } else {
                resolve(info)
            }
        })
    })
}