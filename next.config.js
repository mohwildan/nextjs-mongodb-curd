/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    PROD_URL: process.env.PROD_URL,
    DEV_URL: process.env.DEV_URL ,
    MONGO_URI: process.env.MONGO_URI
  }
}

module.exports = nextConfig
