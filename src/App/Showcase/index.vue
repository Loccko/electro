<template>
  <div>
    <h1>Showcase</h1>
    <router-view class="rw"></router-view>
  </div>
</template>

<script>
  export default {
    name:'ShowcaseFeatureWrapper',
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