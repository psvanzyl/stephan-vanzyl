import type { Config } from "tailwindcss";

/**
 * Tailwind v4 leest de theme-tokens uit src/app/globals.css (@theme).
 * Dit bestand bestaat vooral voor tooling die een config verwacht.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
};

export default config;
