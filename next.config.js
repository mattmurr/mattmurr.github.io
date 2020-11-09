const prod = process.env.NODE_ENV === "production";
const path = prod ? "https://mattmurr.github.io/" : "";

module.exports = {
  "process.env.BACKEND_URL": path,
  assetPrefix: path,
};
