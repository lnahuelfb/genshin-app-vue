// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@pinia/nuxt']
})

const config = {
  head: {}
}

config.head = {
  title: 'Genshin App',
  link: [
    {
      rel: 'icon',
      type: 'image/jpg',
      href: '/public/icon.jpg'
    }
  ],
}
