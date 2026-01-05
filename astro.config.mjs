// astro.config.mjs
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 站点元信息（用于 sitemap、RSS 等，可选）
  site: 'https://thesisdash.im-zu.cn', // ← 替换为你的实际域名！

  // 输出为静态站点（默认）
  output: 'static',

  // 构建选项
  build: {
    format: 'file', // 每个页面生成 .html 文件
  },

  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 4321,
  },

  // 如果未来想加 Markdown、Tailwind 等，可在这里集成 integrations
});
