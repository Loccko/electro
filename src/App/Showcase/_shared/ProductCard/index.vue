<template>
  <div class="product-item">
    <div class="product-item__outer h-100">
      <div class="product-item__inner px-wd-4 p-2 p-md-3">
        <div class="product-item__body pb-xl-2">
          <div class="mb-2">
            <router-link
              :to="`category/${item.id}`"
              class="font-size-12 text-gray-5"
              tabindex="0"
              >{{ categoryTitle }}</router-link
            >
          </div>
          <h5 class="mb-1 product-item__title">
            <a
              href="../shop/single-product-fullwidth.html"
              class="text-blue font-weight-bold"
              tabindex="0"
              >{{ item.title }}</a
            >
          </h5>
          <div class="mb-2">
            <a
              href="../shop/single-product-fullwidth.html"
              class="d-block text-center"
              tabindex="0"
              ><img
                class="img-fluid"
                :src="item.images.size212x200.link"
                alt="Image Description"
            /></a>
          </div>
          <div class="flex-center-between mb-1">
            <div class="prodcut-price">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div class="d-none d-xl-block prodcut-add-cart">
              <a
                href="../shop/single-product-fullwidth.html"
                class="btn-add-cart btn-primary transition-3d-hover"
                tabindex="0"
                ><i class="ec ec-add-to-cart"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-item__footer">
          <div class="border-top pt-2 flex-center-between flex-wrap">
            <a
              href="../shop/compare.html"
              class="text-gray-6 font-size-13"
              tabindex="0"
              ><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a
            >
            <a
              href="../shop/wishlist.html"
              class="text-gray-6 font-size-13"
              tabindex="0"
              ><i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      item: Object,
      categoryTitle: String
    }
  };
</script>

<style scoped lang="scss" src="./style.scss"></style>
