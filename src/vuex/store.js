import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const good = (id, name, price, image) => ({ id, name, price, image })

var arrGoodInCArt = []

if (localStorage["arrGoodInCArt"] !== null) {
	arrGoodInCArt = localStorage["arrGoodInCArt"] ? JSON.parse(localStorage["arrGoodInCArt"]) : []
}

let store = new Vuex.Store({
  state: {
    goods: [
      good('1', 'Крест серёжка золото', '15800', '1.jpg'),
      good('2', 'Крест серёжка серебро', '13150', '2.jpg'),
      good('3', 'Моносерьга Крест с камнями', '15800', '3.jpg'),
      good('4', 'Кафф PEACE silver', '15800', '4.jpg'),
      good('5', 'Кафф LOVE gold', '15800', '5.jpg'),
      good('6', 'Кафф PEACE silver', '8700', '11.jpg'),
      good('7', 'Кафф PEACE silver', '8700', '7.jpg'),
      good('8', 'Кафф PEACE silver', '8700', '8.jpg'),
      good('9', 'Кафф PEACE silver', '8700', '9.jpg'),
      good('10', 'Кафф PEACE silver', '8700', '10.jpg'),
      good('11', 'Кафф PEACE silver', '8700', '1.jpg'),
      good('12', 'Кафф PEACE silver', '8700', '2.jpg'),
      good('13', 'Кафф PEACE silver', '8700', '3.jpg'),
      good('14', 'Кафф PEACE silver', '8700', '4.jpg'),
      good('15', 'Кафф PEACE silver', '8700', '5.jpg'),
      good('16', 'Кафф PEACE silver', '8700', '11.jpg'),
      good('17', 'Кафф PEACE silver', '8700', '7.jpg'),
      good('18', 'Кафф PEACE silver', '8700', '8.jpg'),
      good('19', 'Кафф PEACE silver', '8700', '9.jpg'),
      good('20', 'Кафф PEACE silver', '8700', '10.jpg'),
      good('21', 'Кафф PEACE silver', '8700', '1.jpg'),
      good('22', 'Кафф PEACE silver', '8700', '2.jpg'),
      good('23', 'Кафф PEACE silver', '8700', '3.jpg'),
      good('24', 'Кафф PEACE silver', '8700', '4.jpg'),
      good('25', 'Кафф PEACE silver', '8700', '5.jpg')
    ],
    cartNumberItems: arrGoodInCArt
  },
  mutations: {
    SET_CART: (state, good) => {
			const index = state.cartNumberItems.indexOf(good);
			if (index == -1) {
        state.cartNumberItems.push(good)
				localStorage["lastChangeItem"] = good;
				localStorage["lastChangeOperation"] = 'set_cart';
				localStorage["arrGoodInCArt"] = JSON.stringify(state.cartNumberItems);
			}
    },
    REMOVE_SET_CART: (state, good) => {
      const index = state.cartNumberItems.indexOf(good);
			if (index > -1) {
        state.cartNumberItems.splice(index, 1);
				localStorage["lastChangeItem"] = good;
				localStorage["lastChangeOperation"] = 'remove_in_cart';
				localStorage["arrGoodInCArt"] = JSON.stringify(state.cartNumberItems);
			}
    }
  },
  actions: {
    ADD_TO_CART({commit}, good) {
      commit('SET_CART', good)
    },
    REMOVE_IN_CART({commit}, good) {
      commit('REMOVE_SET_CART', good)
    }
  },
  getters: {
    GOODS(state) {
      return state.goods
    },
    CARTNUMBERITEMS(state) {
      return state.cartNumberItems
    }
  }
});

export default store;
