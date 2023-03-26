import app from './routes/index';

const port = 1245;

app.listen(port, () => {
  console.log('This server is listening on port 1245');
});

export default app;
