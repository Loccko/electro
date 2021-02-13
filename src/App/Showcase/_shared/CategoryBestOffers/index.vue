<template>
  <div class="mb-8">
    <div
      class=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0"
    >
      <h3 class="section-title mb-0 pb-2 font-size-22">Smartphones</h3>
    </div>
    <div class="row">
      <div class="col-auto">
        <a href="../shop/shop.html" class="d-block">
          <img
            class="img-fluid"
            src="@/assets/img/212X305/img1.jpg"
            alt="Image Description"
          />
        </a>
      </div>
      <div class="col">
        <ul class="row list-unstyled products-group no-gutters">
          <li class="col-6 col-md-4 col-wd-3 product-item" v-for="i of 3" :key="i">
            <product-card />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/App/Showcase/_shared/ProductCard"

export default {
  components: {
    "product-card": ProductCard
  }
};
</script>

<style></style>
