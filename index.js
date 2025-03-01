const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
const cloudinaryHost = `https://res.cloudinary.com/${config.environment}`;

app.get("/image/*", (req, res) => {
  const cloudinaryUrl = `${cloudinaryHost}${req.path.replace("/image", "/image")}`;
  res.redirect(cloudinaryUrl);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;