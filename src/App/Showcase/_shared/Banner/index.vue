<template>
  <div class="row mb-6">
    <banner-category v-for="(category,i) of categories" :key="i"  :category="category"/>
  </div>
</template>

<script>
import BannerCategory from "@/App/Showcase/_shared/BannerCategory"
export default {
  components: {
    "banner-category": BannerCategory
  },
  props: {
    categories: Array
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
