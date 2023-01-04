<template>
  <div class="flex  justify-space-around">
    <v-timeline truncate-line="start">
      <v-timeline-item v-for="(item, i) in items" :dot-color="item.color" :icon="item.icon">
        <template v-slot:opposite>
          {{item.text1}}
        </template>
        {{item.text2}}
      </v-timeline-item>

    </v-timeline>

    <v-timeline truncate-line="end">
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>
    </v-timeline>

    <v-timeline truncate-line="both">
      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:opposite>
          Opposite
        </template>
        Content
      </v-timeline-item>
      <v-btn variant="plain" color="secondary" class="primary" v-on="on" :loading="loading">
        <Icon name="material-symbols:360"> </Icon>  Click medd
      </v-btn>
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
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
          text1: 'Episode 2',
          text2: 'Episode 1',
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
          text1: 'Episode 1',
          text2: 'Episode 2',
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-vuetify',
          text1: 'Episode 2',
          text2: 'Episode 1',
        },
      ]
</script>

<style lang="scss" scoped>

</style>