<template>
  <div>
    <div class="container px-5 max-w-screen-xl mx-auto">
      <div v-if="balloonsInCartLength"  class="flex shadow-md my-10">
        <div class="w-full bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Корзина</h1>
            <h2 class="font-semibold text-2xl">Всего товаров: {{balloonsInCartLength}}</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Информация</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Количество</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Цена</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Общая сумма</h3>
          </div>
          <div  v-for="(cartElement, index) in balloonsInCart" :key="index" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img class="h-24" :src="cartElement.image" alt="">
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{cartElement.name}}</span>
                <span class="text-red-500 text-xs">{{cartElement.category}}</span>
                <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" @click.prevent="removeElement(cartElement.id)">Удалить</a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <svg @click.prevent="elemSub(cartElement)" class="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>

              <span class="mx-2 text-center w-8" type="text">{{cartElement.count}}</span>

              <svg @click.prevent="elemInc(cartElement)" class="cursor-pointer fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">{{cartElement.price}}₽</span>
            <span class="text-center w-1/5 font-semibold text-sm">{{cartElement.price * cartElement.count}}₽</span>
          </div>

          <span class="block mt-8 text-right font-semibold text-gray-600 text-lg">Общая сумма {{totalAmount}} ₽</span>

          <router-link :to="{ name: 'Home' }" class="flex font-semibold text-gray-800 text-sm mt-10">
        
            <svg class="fill-current mr-2 text-gray-800 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Вернуться в каталог
          </router-link>
        </div>

        <div class="relative py-3 w-11/12 max-w-xl mt-16 sm:mx-auto">
          <div class="relative p-8 bg-transparent">
            <form class="w-full">
              <div class="mb-5 relative">
                <input type="name" id="name" class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="Введите имя" autocomplete="off" />
                <label for="name" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Ваше имя</label>
              </div>
              <div class="mb-5 relative">
                <input type="text" id="phone" class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="Введите телефон*" autocomplete="off" />
                <label for="phone" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Ваш телефон*</label>
              </div>
              <button class="cursor-pointer w-full text-white text-sm font-semibold bg-transparent border border-black text-gray-800 py-2 px-4 rounded-lg  hover:shadow-lg transition duration-300 transform-gpu hover:bg-gray-800 hover:text-white hover:scale-105">Отправить</button>
            </form>
          </div>
        </div>
      </div>
      <span v-else class="text-2xl font-light">На данный момент корзина пуста!<br>Вы можете выбрать что-то в <router-link class="underline" :to="{ name: 'Home' }">каталоге </router-link></span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'Cart',
  computed: mapGetters(['balloonsInCart', 'balloonsInCartLength', 'totalAmount']),
  methods: {
    ...mapMutations(["deleteElement", 'countSub', 'countInc']),
    removeElement(elementId) {
      this.deleteElement(elementId)
    },
    elemSub(element) {
      if (element.count <= 1) {
        this.removeElement(element.id)
      }
      this.countSub(element)
    },
    elemInc(element) {
      this.countInc(element)
    }
  }
}
</script>
<style lang="">
  
</style>