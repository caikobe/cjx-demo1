<template>
    <div @click="login()">请先登录</div>
</template>

<script>
    export default {
        name: "Register",
        components:{},
        data(){
            return{

            }
        },
        methods:{
            login(){
                console.log('登录');
                this.$cookies.set('name', 'kobe.bryant');
                this.$store.commit('checkLogin',true);
                this.$router.push({
                    path: '',
                });
            }
        }
    }
</script>

<style scoped>

</style>
