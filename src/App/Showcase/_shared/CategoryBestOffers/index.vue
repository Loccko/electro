<template>
  <div class="mb-8">
    <div class=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
      <h3 class="section-title mb-0 pb-2 font-size-22">{{ category.title }}</h3>
    </div>
    <div class="row">
      <div class="col-auto">
        <a href="../shop/shop.html" class="d-block">
          <img
              class="img-fluid"
              :src="category.images.size212x305.link"
              alt="Image Description"
          />
        </a>
      </div>
      <div class="col">
        <ul class="row list-unstyled products-group no-gutters">
          <li :class="removeDivider(i)" v-for="i of 4" :key="i">
            <product-card :item="products[i-1].node"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/App/Showcase/_shared/ProductCard"
import Products from "@/App/_shared/services/Products";


export default {
  props: {
    category: Object
  },
  components: {
    "product-card": ProductCard
  },
  data: () => ({
    products: []
  }),
  methods: {
    removeDivider(index) {
      if (index % 3 === 0) {
        return "col-6 col-md-4 col-wd-3 product-item remove-divider-md-lg remove-divider-xl d-md-none d-xl-block"
      } else if (index % 4 === 0) {
        return "col-6 col-md-4 col-wd-3 product-item d-xl-none d-wd-block remove-divider"
      }
      return "col-6 col-md-4 col-wd-3 product-item"
    }

  },
  async mounted() {
    this.products = await Products.fetchProducts(4, this.category.id);
  }
}
;
</script>

<style></style>
