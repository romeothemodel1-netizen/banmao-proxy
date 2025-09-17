import fetch from "node-fetch";
import express from "express";
import serverless from "serverless-http";

const app = express();

// Route test
app.get("/", (req, res) => {
  res.send("Banmao Proxy is running 🚀");
});

// Proxy route
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

// Export cho Vercel
export default serverless(app);
