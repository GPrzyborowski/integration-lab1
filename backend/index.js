import express from 'express'
import hash from './routes/hash.routes.js'

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Backend działa');
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use('/api', hash)

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});