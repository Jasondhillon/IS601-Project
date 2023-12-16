/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API: process.env.API, // '67a0b16efba2373f6e54c66401bdc38d-us21',
        PublicAPI: process.env.PublicAPI, //'9b78e06022b52e70822656d8ba6e0d19-us21',
        AudienceID: process.env.AudienceID
      },
}

module.exports = nextConfig
