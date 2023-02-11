const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_NEWSLETTER_KEY);

export default function handler(req, res) {
    const body = JSON.parse(req.body);

    const message = `
      Email: ${body.email}
    `;

    const data = {
        to: "adventurepals64@gmail.com",
        from: "NewsletterForm@adventurepals.info",
        subject: "New Newsletter Subscriber",
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
    };

    mail.send(data);

    res.status(200).json({ status: "OK" });
}
