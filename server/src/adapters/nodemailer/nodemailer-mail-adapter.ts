import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5809e5348f8142',
    pass: 'b20effe25200ef',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equie Feedget <oi@feedget.com',
      to: 'Bruno Melo <melobrunoti@gmail.com',
      subject: subject,
      html: body,
    });
  }
}
