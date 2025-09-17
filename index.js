import fetch from "node-fetch";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Route test
app.get("/", (req, res) => {
  res.send("Banmao Proxy is running 🚀");
});

// Ví dụ proxy: GET /proxy?url=https://example.com
app.get("/proxy", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send("Missing url param");

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).send("Error fetching: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
