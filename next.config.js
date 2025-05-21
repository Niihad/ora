/** @type {import('next').NextConfig} */

//const { i18n } = require('./i18n/i18n-config');
const { i18n } = require('@/i18n/i18n-config');

const nextConfig = {
    // output: 'export',
    i18n,
    reactStrictMode: false,
}

module.exports = nextConfig
