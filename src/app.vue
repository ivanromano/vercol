<template>
<p class="bg-red-400">text</p>
<v-btn variant="plain" color="secondary" class="p-[500px]" v-on="on" :loading="loading">
      <Icon name="material-symbols:360"> </Icon>  
      </v-btn>

<div class="p-40">
  <v-carousel cycle>
    <template v-slot:prev="{ props }">
      <v-btn variant="plain" color="secondary" class="p-[500px]" @click="props.onClick" :loading="loading">
        <svg width="50" height="50" viewBox="0 0 24 24"><path fill="#6200EE" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-8-5l-5 5l5 5V7Z"/></svg>
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn variant="plain" color="info" @click="props.onClick"> 
        <svg width="50" height="50" viewBox="0 0 24 24"><path fill="#888888" d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m8 5l5-5l-5-5v10Z"/></svg>
      </v-btn>
    </template>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover > 
    
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script setup>

const loading = false
const colors = [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ]
const model = ref(0)

if (model == 3) {
  console.log("numero 3");
  alert("numero 3")
}


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
