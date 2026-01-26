/**
 * @typedef {import("prettier").Options} PrettierConfig
 */

/** @type {PrettierConfig} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
