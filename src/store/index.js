import Vue from "vue";
import Vuex from "vuex";
import balloons from "./modules/balloons";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    balloons,
    cart,
  },
});
