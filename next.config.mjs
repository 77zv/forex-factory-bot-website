/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  
  // App Router is enabled by default in Next.js 13.4+

  /**
   * i18n config is not compatible with the App Router.
   * For internationalization with App Router, see:
   * https://nextjs.org/docs/app/building-your-application/routing/internationalization
   */
};

export default config;
