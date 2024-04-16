import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

export default withPWA({
    images: {
        domains: ['imgur.com', 'i.imgur.com'],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
});