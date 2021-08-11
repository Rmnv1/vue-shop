<template>
  <div>
    <notifications position="bottom left" group="addToCartAlert"/>
    <div class="flex-shrink container p-0 bg-white lg:max-w-xs mb-14 rounded-2xl overflow-hidden shadow-xl md:max-w-full hover:shadow-2xl transition duration-300">
      <div class="h-56">
        <img class="rounded-xl mx-auto max-w-xs p-5 h-full w-full object-contain" :src="imageLink" alt="" />
      </div>
      <div class="flex justify-between items-center p-4 pb-8">
        <div class="text-left">
          <h1 class="mt-5 text-lg font-thin">{{title}}</h1>
          <p class="mt-2 font-semibold">{{price}} ₽</p>
        </div>
        <div>
          <button class="cursor-pointer text-white text-sm font-semibold bg-transparent border border-black text-gray-800 py-2 px-4 rounded-lg  hover:shadow-lg transition duration-300 transform-gpu hover:bg-gray-800 hover:text-white hover:scale-105" @click.prevent="addToCartHandler">Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProductCard',
  props: [
    'id', 'title', 'imageLink', 'price', 'category'
  ],
  methods: {
    ...mapMutations(["addToCart"]),
    addToCartHandler() {
      this.$notify({
        group: 'addToCartAlert',
        title: 'Готово!',
        type: 'success',
        text: 'Товар добавлен в корзину'
      });
      this.addToCart({
        id: this.id,
        name: this.title,
        image: this.imageLink,
        price: this.price,
        category: this.category,
        count: 1
      })
    }
  }
}
</script>
<style lang="">
  
</style>