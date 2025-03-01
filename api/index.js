const fs = require("fs");

export default function handler(req, res) {
  const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
  const cloudinaryHost = `https://res.cloudinary.com/${config.environment}`;

  const cloudinaryPath = req.url.replace("/api", "");

  const cloudinaryUrl = `${cloudinaryHost}${cloudinaryPath}`;
  res.writeHead(307, { Location: cloudinaryUrl });
  res.end();
}