/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ["localhost:3000", "laughing-fortnight-9467qj76gr6c75x4-3000.app.github.dev", "laughing-fortnight-9467qj76gr6c75x4-3100.app.github.dev"],
        },
    },
};

export default nextConfig;
