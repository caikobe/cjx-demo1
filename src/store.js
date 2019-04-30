import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(Vuex)
Vue.use(VueCookies)

export default new Vuex.Store({
  state: {
      products: [
        {name: '鼠标', price: 20},
        {name: '键盘', price: 40},
        {name: '耳机', price: 60},
        {name: '显示屏', price: 80}
      ],
    isLogin:false,
  },
  getters:{
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    },
    getLogin:(state)=>{
      console.log(VueCookies.get('name'));
      if(VueCookies.get('name')){
        state.isLogin=true;
      }
    }
},
  mutations: {
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    },
    // 登录
    checkLogin(state,status){
      state.isLogin=status;
    },
    // 退出登录
    loginOut(state,status){
      state.isLogin=status
    }
  },
  actions: {

  }
})
