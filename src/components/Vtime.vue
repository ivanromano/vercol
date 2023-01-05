<template>
  <div class="lg:flex  justify-space-around ">
    <v-timeline truncate-line="start">
      <v-timeline-item v-for="(item, i) in items" :dot-color="item.color" :icon="item.icon">
        <template v-slot:opposite>
          <v-btn :color="item.color1" class="primary" v-on="on" :loading="loading">
            <Icon name="material-symbols:360"> </Icon>  {{item.text1}}
          </v-btn>
          
        </template>
          <v-btn :color="item.color2" class="primary" v-on="on" :loading="loading">
            <Icon name="material-symbols:360"> </Icon>  {{item.text2}}
          </v-btn>
      </v-timeline-item>
    </v-timeline>

    <v-timeline truncate-line="end">
      <v-timeline-item v-for="(item, i) in items2" :dot-color="item.color" :icon="item.icon">
        <template v-slot:opposite>
          <v-btn :color="item.color1" class="primary" v-on="on" :loading="loading">
            <Icon name="material-symbols:360"> </Icon>  {{item.text1}}
          </v-btn>
          
        </template>
          <v-btn :color="item.color2" class="primary" v-on="on" :loading="loading">
            <Icon name="material-symbols:360"> </Icon>  {{item.text2}}
          </v-btn>
      </v-timeline-item>
    </v-timeline>
<!-- <div class="<lg:my-[40px]"></div> -->
    <v-timeline truncate-line="both">
      <v-timeline-item v-for="(item, i) in items3" :dot-color="item.color" :icon="item.icon">
        <template v-slot:opposite>
          <v-btn :color="item.color1" class="primary" v-on="on" :loading="loading">
            <Icon name="material-symbols:360"> </Icon>  {{item.text1}}
          </v-btn>
          
        </template>
          <v-btn :color="item.color2" class="primary" v-on="on" :loading="loading">
            <Icon name="material-symbols:360"> </Icon>  {{item.text2}}
          </v-btn>
      </v-timeline-item>
    </v-timeline>

    
  </div>
</template>

<script setup>
const items = [
        {
          color: 'red-lighten-2',
          icon: 'mdi-star',
          text1: 'Episode 1',
          text2: 'Episode 2',
          color1: 'vicYellow',
          color2: 'vicOrange',
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
          text1: 'Episode 3',
          text2: 'Episode 4',
          color1: 'vicOrange',
          color2: 'vicPink',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
          text1: 'Episode 5',
          text2: 'Episode 6',
          color1: 'vicBlue',
          color2: 'vicYellow',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-vuetify',
          text1: 'Episode 7',
          text2: 'Episode 8',
          color1: 'vicBlue',
          color2: 'vicPink',
        },
      ]

      const items2 = [
        {
          color: 'red-lighten-2',
          icon: 'mdi-star',
          text1: 'Episode 1',
          text2: 'Episode 2',
          color1: 'vicRed',
          color2: 'vicPink',
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
          text1: 'Episode 3',
          text2: 'Episode 4',
          color1: 'vicOrange',
          color2: 'vicBlue',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
          text1: 'Episode 5',
          text2: 'Episode 6',
          color1: 'vicBlue',
          color2: 'vicYellow',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-vuetify',
          text1: 'Episode 7',
          text2: 'Episode 8',
          color1: 'vicOrange',
          color2: 'vicYellow',
        },
      ]

      const items3 = [
        {
          color: 'red-lighten-2',
          icon: 'Docker',
          text1: 'Episode 1',
          text2: 'Episode 2',
          color1: 'vicRed',
          color2: 'vicPink',
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
          text1: 'Episode 3',
          text2: 'Episode 4',
          color1: 'vicOrange',
          color2: 'vicBlue',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
          text1: 'Episode 5',
          text2: 'Episode 6',
          color1: 'vicBlue',
          color2: 'vicYellow',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-vuetify',
          text1: 'Episode 7',
          text2: 'Episode 8',
          color1: 'vicOrange',
          color2: 'vicYellow',
        },
      ]
</script>

<style lang="scss" scoped>

</style>