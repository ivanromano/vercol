<template>
<NuxtLink to="/bereshipsis/1/">sssss </NuxtLink>
<NuxtPage> </NuxtPage>
<!-- <main v-for="item in TiendaStore.LatestProductsList" :key="item.id">
  {{ item }}
  <img :src="`${item.get_image}`" alt="" class="w-[10%] h-[10%]">
</main> -->
</template>

<script setup>
import axios from "axios";
import {useTiendaStore} from "../stores/tienda.js";


const TiendaStore = useTiendaStore()


// watch(route, () => {
// 	ultimosProdu()
// })
// onMounted(() => {
// 	ultimosProdu()
// })

</script>

<style lang="scss" scoped>

</style>