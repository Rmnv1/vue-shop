<template>
  <div class="container px-5 max-w-screen-xl mx-auto">
    <div class="flex">
      <div class="flex mr-11 flex-col">
        <span class="font-thin text-3xl tracking-tight">Каталог</span>

        <ul class="mt-7 text-left text-gray-400">
          <!-- Вынужденный костыль :) ♿ -->
          <li class="mb-2 cursor-pointer" :class="{['text-gray-800 underline']: activeFilter == 'All'}" @click="activeFilter = 'All'">Все</li>
          <li class="mb-2 cursor-pointer" :class="{['text-gray-800 underline']: activeFilter == 'Numbers'}" @click="activeFilter = 'Numbers'">Цифры</li>
          <li class="mb-2 cursor-pointer" :class="{['text-gray-800 underline']: activeFilter == 'Sets'}" @click="activeFilter = 'Sets'">Наборы</li>
        </ul>
      </div>
      <div class="w-full grid lg:grid-cols-3 gap-4 md:grid-cols-1">

        <ProductCard v-for="balloon in filterBalloons(allBalloons)" :key="balloon.id" :id="balloon.id" :title="balloon.name" :imageLink="balloon.image" :price="balloon.price" :category="balloon.category"/>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data() {
    return {
      activeFilter: 'All'
    } 
  },
  computed: mapGetters(['allBalloons']),
  methods: {
    // Повторение того самого вынужденного костыля :) ♿
    filterBalloons() {
      switch(this.activeFilter) {
        case 'Numbers':
          return this.allBalloons.filter(elem => elem.category == 'Цифры')
        case 'Sets':
          return this.allBalloons.filter(elem => elem.category == 'Наборы')
        default: return this.allBalloons
      }
      // return allBalloons.filter(elem => elem.category == 'Цифры')
    }
  }

}
</script>
