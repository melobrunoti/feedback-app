/* eslint-disable import/no-unresolved */
import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5809e5348f8142',
    pass: 'b20effe25200ef',
  },
});

app.listen(3333, () => {
  console.log('Http server running!');
});
