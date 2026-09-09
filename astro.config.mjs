// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical URLs and the sitemap follow the deployed origin. Netlify sets URL
// automatically; SITE_URL overrides it, and the custom domain is the fallback.
const site = process.env.SITE_URL || process.env.URL || 'https://fanaticarts.co.za';

export default defineConfig({
  integrations: [sitemap()],
  site,
  image: {
    // Generated at build time; AVIF/WebP negotiated per-request by the host.
    responsiveStyles: true,
  },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
  // 'hover' rather than 'viewport': navigation still feels instant, without
  // speculatively downloading every linked page on an image-heavy site.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
