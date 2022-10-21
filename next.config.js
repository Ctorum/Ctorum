const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  images: {
    domains: ["www.dropbox.com"],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
});
