<template>
  <div class="max-width-270 min-width-270 pt-xl-13 mt-xl-13">
    <aside class="mb-8">
      <a href="#" class="d-block">
        <img class="img-fluid" src="https://transvelo.github.io/electro-html/2.0/assets/img/270X428/img1.jpg" alt="Image Description">
      </a>
    </aside>
    <aside class="mb-4">
      <div class="mb-2 position-relative">
        <latest-products :items="latestProducts"/>
      </div>
    </aside>
  </div>
</template>

<script>
import LatestProducts from "@/App/Showcase/_shared/LatestProducts"

export default {
  props: {
    latestProducts: Array
  },
  components: {
    "latest-products": LatestProducts
  }
}
</script>

<style>

</style>