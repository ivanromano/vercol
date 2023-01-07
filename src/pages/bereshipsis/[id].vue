<template>
  s
<main v-for="item in (TiendaStore.LatestProductsList)" :key="item">
  {{ item.id}}
   <img :src="`${item.get_image}`" alt="" class="w-[10%] h-[10%]"> 
</main>

</template>

<script setup>
import {useTiendaStore} from "../../stores/tienda.js";

const route = useRoute()
const TiendaStore = useTiendaStore()
</script>

<style lang="scss" scoped>

</style>