<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in list1 " :key="index">{{item.name}}----{{item.price}}</li>
    </ul>
    <button @click="minusPrice">减少价格</button>
    <hr>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data(){
      return {
        list1:this.$store.state.products,
        list2:[
          {score:31,name:'rose'},
          {score:42,name:'jemas'},
          {score:53,name:'durant'},
          {score:64,name:'curry'},
          {score:75,name:'kobe'},
        ]
      }
    },
    components: {

    },
    computed:{

    },
    methods:{
      minusPrice() {
        this.$store.commit('minusPrice', 1); //提交`minusPrice,payload为2
      },
      getlist2(){
        for(var i=0;i<this.list2.length;i++){
          this.list2[i].score+=6;
        }
      }
    },
    mounted() {
      this.getlist2();
    }
  }
</script>
