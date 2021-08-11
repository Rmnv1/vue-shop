export default {
  state: {
    balloons: [
      {
        id: 1,
        name: "Шар пастель",
        image:
          "https://thumb.tildacdn.com/tild3533-3435-4564-a439-653965613063/-/resize/520x/-/format/webp/photo.jpg",
        price: 68,
        category: "Обычные",
      },
      {
        id: 2,
        name: "Шар кристалл",
        image:
          "https://thumb.tildacdn.com/tild3232-6466-4562-b266-356363353365/-/format/webp/photo.jpg",
        price: 72,
        category: "Обычные",
      },
      {
        id: 3,
        name: "Шар агат",
        image:
          "https://static.tildacdn.com/tild3837-3636-4339-a465-326266313438/oranzhevaya_q_11_sup.jpg",
        price: 110,
        category: "Обычные",
      },
      {
        id: 4,
        name: "Шар хром",
        image:
          "https://static.tildacdn.com/tild6632-6636-4432-a464-613530373863/3df7cf79_b1d0_11e9_a.jpg",
        price: 95,
        category: "Обычные",
      },
      {
        id: 5,
        name: "Цифра 0",
        image:
          "https://thumb.tildacdn.com/tild6633-3135-4436-b964-613964333165/-/format/webp/0_.jpg",
        price: 650,
        category: "Цифры",
      },
      {
        id: 6,
        name: "Цифра 1",
        image:
          "https://thumb.tildacdn.com/tild3762-3530-4537-a438-666532663532/-/format/webp/1_.jpg",
        price: 650,
        category: "Цифры",
      },
      {
        id: 7,
        name: "Цифра 2",
        image:
          "https://thumb.tildacdn.com/tild3238-3431-4634-a635-343537643562/-/format/webp/2_.jpg",
        price: 650,
        category: "Цифры",
      },
      {
        id: 8,
        name: "Набор 'Супергерой'",
        image:
          "https://thumb.tildacdn.com/tild3762-3666-4232-b931-323835376634/-/resize/520x/-/format/webp/image.png",
        price: 5451,
        category: "Наборы",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    allBalloons(state) {
      return state.balloons;
    },
  },
};
