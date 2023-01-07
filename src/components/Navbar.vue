<template>
<v-card color="vicYellow" class="flex flex-wrap-reverse fixed">
  <!-- fixed-tabs -->
  <v-tabs  v-model="tab" bg-color="vicYellow" class="" active-class="true" center-active="false">
    <div class=" <lg:hidden px-5 xl:px-12 py-1 flex flex-wrap-reverse">
      <Icon name="logos:vector-timber" class="text-[40px] text-amber-300"> </Icon>
      <div class="text-[30px] text-amber-700 font-weight-bold "> 
        ictory 
      </div>
    </div>

    <nav class=" lg:ml-[10%] text-amber-700">
      <v-tab to="/"  value="one" class="font-weight-bold">
          Home
      </v-tab>
      <v-tab value="two" class="font-weight-bold">
          bereshipsis <Icon class="text-[22px]" name="material-symbols:keyboard-arrow-down" />
        <v-menu activator="parent">
          <v-list>
            <v-list-item  v-for="(item, index) in items" :key="index" :value="index">
              <NuxtLink :to="`/${item.link}`">
                <v-list-item-title  class="font-weight-bold" >
                  {{ item.title }} 
                </v-list-item-title>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-tab>
      <v-tab active-class="bereshipsis" value="three" class="font-weight-bold">
        blog
      </v-tab>
    </nav>
  </v-tabs>
</v-card>
</template>

<script setup>
const tab = ref('one')

const disable = ref(true)
const route = useRoute()

if (disable) {
  console.log(route);
}

const items = [{ 
  title: 'Characters',
  link: 'bereshipsis',
},
{ 
  title: 'History',
  link: 'blog',
},
{ 
  title: 'States',
  link: 'blog',
},
{
  title: 'Programming',
  link: 'bereshipsis',
},

]
</script>

<style lang="scss" scoped>

</style>