export default {
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, newElement) {
      let alreadyExists = false;
      state.cart.forEach((element) => {
        if (element.id === newElement.id) {
          alreadyExists = true;
          return (element.count += 1);
        }
      });
      alreadyExists ? "" : state.cart.unshift(newElement);
    },
    deleteElement(state, elemId) {
      state.cart = state.cart.filter((element) => element.id !== elemId);
    },

    // '+' и '-' в корзине
    countSub(state, element) {
      return (element.count = element.count - 1);
    },
    countInc(state, element) {
      return (element.count = element.count + 1);
    },
  },
  actions: {},
  getters: {
    balloonsInCart(state) {
      return state.cart;
    },
    totalAmount(state) {
      return state.cart.reduce(
        (total, element) => total + element.price * element.count,
        0
      );
    },
    balloonsInCartLength(state) {
      return state.cart.reduce((total, element) => total + element.count, 0);
    },
  },
};
