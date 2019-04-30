<template>
  <div class="home">
    <hr>
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table1">table1</router-link>
    </div>
    <h3 v-if="loginStatus===false" @click="login()">登录</h3>
    <h3 v-else @click="loginout()">退出登录</h3>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>{{str}}</h1>
    <h1>{{reserveStr}}</h1>
    <hr>
    <div>可以修改吗？</div>
    <hr>
    <ul>
      state数组数据
      <li v-for="(item,index) in list1 " :key="index">{{item.name}}----{{item.price}}</li>
    </ul>
    <button @click="minusPrice">减少价格</button>
    <hr>
    <ul>
      list2原数组
      <li v-for="(item2,index2) in list2 " :key="index2">{{item2}}</li>
    </ul>
    <hr>
    <ul>
      list2新数组
      <li v-for="(item3,index3) in getList2 " :key="index3">{{item3}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      str:'kobe',
      loginStatus:this.$store.state.isLogin,
      list1:this.$store.getters.saleProducts,
      list2:[1,2,3,4,5,6],
      list3:[
        {name:'kobe',age:37},
        {name:'kobe2',age:38},
        {name:'kobe3',age:39},
        {name:'kobe4',age:40},
      ],
      list4:['kobe','james','durant','rose'],
    }
  },
  components: {
    HelloWorld
  },
  computed:{
    reserveStr:function () {
      return this.str.split('').reverse().join('');
    },
    getList2:function () {
      let newList2=[...this.list2];
      for(var i=0;i<newList2.length;i++){
        newList2[i]*=2;
      }
      return newList2;
    },
    changeList3:function () {
      var newList3=this.list3.map(function(value, index, array){
        return {
          name: `${value.name}bryant`,
          age: value.age / 2
        }
      })
      return newList3
    },
    changeList4:function () {
      let newList4=[...this.list4];
      for(var i=0;i<newList4.length;i++){
        newList4[i]='curry';
      }
      return newList4;
    }
  },
  methods:{
    minusPrice() {
      this.$store.commit('minusPrice', 2); //提交`minusPrice,payload为2
    },
    login(){
      console.log('登录');
      this.$cookies.set('name', 'kobe.bryant');
      this.$store.commit('checkLogin',true);
      this.$router.push({
        name: 'about',
      });
    },
    loginout(){
      console.log('退出登录');
      this.$cookies.remove('name');
      this.$store.commit('loginOut',false);
      this.loginStatus=false;
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss">
  .home{
    height: 100%;
    overflow: auto;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  ul li{
    list-style-type: none;
  }
</style>
