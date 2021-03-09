<template>
  <div class="widget-column">
    <div class="border-bottom border-color-1 mb-5">
      <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">
        {{ title }}
      </h3>
    </div>

    <ul class="list-unstyled products-group">
      <li class="product-item product-item__list row no-gutters mb-6 remove-divider" v-for="(product, i) of products" :key="i">
        <div class="col-auto">
          <router-link :to="`/product/${product.id}`" class="d-block width-75 text-center">
            <img class="img-fluid" :src="product.images.size75x75.link" alt="Image Description"/>
          </router-link>
        </div>
        <div class="col pl-4 d-flex flex-column">
          <h5 class="product-item__title mb-0">
            <router-link :to="`/product/${product.id}`" class="text-blue font-weight-bold">
              {{ product.title }}
            </router-link>
          </h5>
          <div v-if="type === 'rated'" class="text-warning mb-2">
            <small class="fas fa-star" v-for="star of 5" :key="star" :class="{ 'text-muted': star > product.averageRating }"></small>
          </div>
          <div class="prodcut-price mt-auto flex-horizontal-center">
            <ins class="font-size-15 text-decoration-none">
              ${{ product.priceWithDiscount }}
            </ins>
            <del class="font-size-12 text-gray-9 ml-2" v-if="product.discount">
              ${{ product.price }}
            </del>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    products: Array,
  },
};
</script>

<style></style>
