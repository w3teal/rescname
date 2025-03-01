export default function handler(req, res) {
    const cloudinaryEnv = process.env.CLOUDINARY_ENV || "w3teal";
    const cloudinaryHost = `https://res.cloudinary.com/${cloudinaryEnv}`;

    const cloudinaryPath = req.url.replace("/api", "");

    const cloudinaryUrl = `${cloudinaryHost}${cloudinaryPath}`;
    res.writeHead(307, { Location: cloudinaryUrl });
    res.end();
}