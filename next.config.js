/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: "sw.js",
    register: true,
    skipWaiting: true,
    reloadOnOnline: false,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "img.freepik.com",
      "upload.wikimedia.org",
      "www.health.harvard.edu",
      "domf5oio6qrcr.cloudfront.net",
      "www.freelogovectors.net",
      "play-lh.googleusercontent.com",
      "intmedicaltreatment.com",
      "cdn.comparably.com",
      "www.santeplusmag.com",
      "media.self.com",
      "greatpeopleinside.com",
      "encrypted-tbn0.gstatic.com",
      "beta.mountelizabeth.com.sg",
      "newsghana.com.gh",
      "www.emploi.ma",
      "www.eatthis.com",
      "artofhealthyliving.com",
      "www.shape.com",
      "beta.mountelizabeth.com",
      "cdn.shopify.com",
      "undefined",
      "images.onhealth.com",
      "www.mindbodygreen.com",
      "res.cloudinary.com",
      "20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com",
      "i0.wp.com",
      "mindbodygreen-res.cloudinary.com",
    ],
  },
};
