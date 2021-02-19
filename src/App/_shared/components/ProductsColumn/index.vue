<template>
  <div class="widget-column">
    <div class="border-bottom border-color-1 mb-5">
      <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">
        {{ title }}
      </h3>
    </div>

    <ul class="list-unstyled products-group">
      <li
          class="product-item product-item__list row no-gutters mb-6 remove-divider"
          v-for="product of products"
          :key="product.id"
      >
        <div class="col-auto">
          <router-link
              to="../shop/single-product-fullwidth.html"
              class="d-block width-75 text-center"
          ><img
              class="img-fluid"
              :src="product.node.images.size75x75.link"
              alt="Image Description"
          /></router-link>
        </div>
        <div class="col pl-4 d-flex flex-column">
          <h5 class="product-item__title mb-0">
            <router-link
                to="../shop/single-product-fullwidth.html"
                class="text-blue font-weight-bold"
            >{{ product.node.title }}
            </router-link
            >
          </h5>
          <div v-if="type === 'rated'" class="text-warning mb-2">
            <small
                class="fas fa-star"
                v-for="star of 5"
                :key="star"
                :class="{ 'text-muted': star > product.node.averageRating }"
            ></small>
          </div>
          <div class="prodcut-price mt-auto flex-horizontal-center">
            <ins class="font-size-15 text-decoration-none">
              ${{ product.node.priceWithDiscount }}
            </ins>
            <del class="font-size-12 text-gray-9 ml-2" v-if="product.node.discount">
              ${{ product.node.price }}
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
