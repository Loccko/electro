<template>
  <router-view class="rw"></router-view>
</template>

<script>
  export default {
    name:'Showcase-Feature-Wrapper',
    data:()=>({
      user: null,
      products: []
    }),
    methods: {
      a(){
        this.$set(this.user, 'firstName', 'serhii')
        this.$set(this.user, 'lastName', 'but')
      }
    }
  }
</script>

<style></style>