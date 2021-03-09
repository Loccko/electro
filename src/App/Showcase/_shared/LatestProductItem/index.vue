<template>
  <div class="product-item__outer h-100">
    <div class="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">
      <div class="col-auto product-media-left">
        <router-link :to="`/product/${item.id}`" class="max-width-70 d-block" tabindex="0">
          <img class="img-fluid" :src="item.images.size150x140.link" alt="Image Description"
          />
        </router-link>
      </div>
      <div class="col product-item__body pl-2 pl-lg-3">
        <div class="mb-4">
          <h5 class="product-item__title">
            <router-link :to="`/product/${item.id}`" class="text-gray-90" tabindex="0">
              {{ item.title }}
            </router-link>
          </h5>
        </div>
        <div class="flex-center-between">
          <div class="prodcut-price">
            <div class="text-gray-100 font-size-15 font-weight-bold">
              ${{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      default: null
    }
  }
};
</script>

<style></style>
