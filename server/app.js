import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import userRouter from './routes/userRouter';
import postRouter from './routes/postRouter';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', userRouter);
// app.use('/', postRouter);
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to Post it' }));
app.use('*', (req, res) => res.status(404).send({ message: 'route not found' }));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});

export default app;
