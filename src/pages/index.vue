<!-- font-weight-bold -->
<template>
<v-sheet elevation="0"> 
  <v-card color="success">

    <v-tabs v-model="tab" bg-color="primary" class="flex-center">
      <h1 class="mx-5">e</h1>
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <Vtime/>
        </v-window-item>

        <v-window-item value="two">
          <Vcarousel/>
        </v-window-item>

        <v-window-item value="three">
          ww
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</v-sheet>
</template>

<script setup>
const tab = ref(null)
</script>

<style lang="scss" scoped>

</style>