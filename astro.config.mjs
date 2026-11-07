import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
export default defineConfig({ site: "https://wefun.org", output: "static", devToolbar: { enabled: false }, publicDir: "static", integrations: [sitemap()] });
