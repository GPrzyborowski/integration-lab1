import express from 'express'
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Backend działa');
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});