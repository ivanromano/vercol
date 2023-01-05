<template>
<div class=" text-red-100 my-[20px] w-[50.%] h-[200%]">
  <v-carousel cycle height="300" interval='100000000'  >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover > 
    
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script setup>
const items = [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ]
</script>

<style lang="scss" scoped>

</style>