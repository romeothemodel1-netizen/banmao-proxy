const express = require("express");
const fetch = require("node-fetch");
const serverless = require("serverless-http");

const app = express();

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch URL", details: err.message });
  }
});

module.exports = app;
module.exports.handler = serverless(app);
