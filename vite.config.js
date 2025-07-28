import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        blog: 'blog.html',
        contact: 'contact.html',
        menu: 'menu.html',
      },
    },
  },

  server: {
    historyApiFallback: {
      rewrites: [
        { from: /\/about/,  to: '/about.html'   },
        { from: /\/contact/, to: '/contact.html' },
        { from: /\/blog/,    to: '/blog.html'    },
        { from: /\/menu/,    to: '/menu.html'    },
        // toutes les autres routes vers index.html
        { from: /.*/, to: '/index.html' },
      ],
    },
},
});