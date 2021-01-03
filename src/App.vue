<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      // 会自动传递cookie中的userId
      this.axios.get('/user').then(()=>{
        // todo 保存到vuex

      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then(()=>{

      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
