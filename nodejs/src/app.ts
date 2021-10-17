import 'dotenv/config';
import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

import { router } from './routes';

const app = express();
export const serverHttp = http.createServer(app);
export const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  console.log(`Usuário conectado no socket: ${socket.id}`);
});

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/github', (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

app.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  response.json(code);
});
