import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import { env } from './config/env.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', router);

app.use((_req, res) => {
  res.status(404).json({ message: '요청하신 리소스를 찾을 수 없어요.' });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  res.status(500).json({ message: '서버에서 오류가 발생했어요.' });
});

const port = env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 서버가 ${port}번 포트에서 실행 중입니다.`);
});
