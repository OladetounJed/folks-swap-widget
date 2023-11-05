/** @type {import('tailwindcss').Config} */

const sharedConfig = require("@oladetounjed/tailwindconfig");

module.exports = {
  ...sharedConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
};