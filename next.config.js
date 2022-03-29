/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

let envs = {}
Object.keys(process.env).forEach((v) => {
  if (v[0] !== '_' && v.indexOf('NODE') === -1) {
    envs[v] = process.env[v]
  }
})

module.exports = withPWA({
  env: { ...envs },
  images: {
    domains: ['something.blob.core.windows.net'],
  },
  pwa: {
    dest: 'public',
    // runtimeCaching,
    // scope: '/pwa/',
    // to prevent lots of console.log spam in dev
    // use yarn build && yarn start to test pwa behavior
    disable: process.env.NODE_ENV === 'development',
  },
})
