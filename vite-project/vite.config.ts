import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/

const globalCssVariable = normalizePath(path.resolve('./src/variable.scss'));

// 更改项目的指定根目录路径
export default defineConfig({
  // vite 将会自动从 src 目录下读取入口文件 index.html
  // root: path.join(__dirname, 'src'),
  plugins: [react(), viteEslint()],
  // 指定传递给css预处理器的选项。文件扩展名用作选项的键。每个预处理器支持的选项可以在它们各自的文档中找到：
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${globalCssVariable}";`
      }
    }
  }
});
