<template>
  <Navbar/>
  <NuxtPage> </NuxtPage>
</template>

<script setup>
useHead({
    titleTemplate: '%s victory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description' }
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/vite.svg' }],
    link: [ 
        {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
        }
    ],
    // script: [
    //     {
    //         src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
    //         // body: true
    //     }
    // ]
})

</script>

<style lang="scss" scoped>

</style>
