import Express from 'express';
import path from 'path';
import routers from './router/Ruoter';
import del from './router/realRouter'
// print err in console
process.on('uncaughtException', (err) => {
  // errors logs
  console.log(err);
});
const app: Express.Express = Express();

// static files = all people can access it
app.use(Express.static(path.join(`${__dirname}/../`, 'client')));

/// the port of the loclhost
const port: number = 8124;
/// the welcome message
console.log("hello");
app.get("/del",del)
// call the api
app.use('/api', routers);
app.get('/', (_req: Express.Request, res:Express.Response) => {
  res.end('hello word');
  });
// to listen to the port
app.listen(port, (): void => {
  console.log(`app is working and its port is https://localhost:${port}`);
});

export default app;
