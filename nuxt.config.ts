// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


export default defineNuxtConfig({
  modules: [
    'nuxt-windicss', 'nuxt-icon',
  ],
  srcDir: 'src',
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  // vite: {
  //   define: {
  //     'process.env.DEBUG': false,
  //   },
  // },
  // ssr: {
  //   noExternal: ['moment', 'compute-scroll-into-view', '@nuxtjs/vuetify', 'vue3-carousel', ''],
  //   },
})
