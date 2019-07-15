import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req: Request, res: Response) {
  const index = readFileSync('./basepage/index.html', 'utf8');
  const noRegister = readFileSync('./basepage/no-register.html', 'utf8');
  res.set('Content-Type', 'text/html');
  if (false) {
    res.send(noRegister);
  } else {
    res.send(index);
  }
  res.end();
});

app.get('/sw.js', function (req: Request, res: Response) {
  const sw = readFileSync('./sw/main.js', 'utf8');
  const noop = readFileSync('./sw/noop.js', 'utf8');

  res.set('Content-Type', 'text/javascript');
  if (false) {
    res.send(noop);
  } else {
    res.send(sw);
  }
  res.end();
});

// app.use(express.static('static'));

export default app;