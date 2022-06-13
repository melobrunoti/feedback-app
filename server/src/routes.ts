import express from 'express';

import nodemailer from 'nodemailer';
import { prisma } from './prisma';
const routes = express.Router();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5809e5348f8142',
    pass: 'b20effe25200ef',
  },
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: 'Equie Feedget <oi@feedget.com',
    to: 'Bruno Melo <melobrunoti@gmail.com',
    subject: 'Novo feedback',
    html: [
      `<div style= font-family: sans-serif; front-size: 16px; color: #111;>`,
      `<p>Tipo do feedback: ${type} </p>`,
      `<p>Comentario: ${comment} </p>`,
      `</div>`,
    ].join('\n'),
  });

  return res.status(201).json({ data: feedback });
});

export default routes;
