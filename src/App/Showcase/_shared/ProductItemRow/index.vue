<template>
  <li class="product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
    <div class="product-item__outer h-100">
      <div class="product-item__inner p-md-3 row no-gutters">
        <div class="col col-lg-auto col-xl-5 col-wd-auto product-media-left">
          <a
              href="../shop/single-product-fullwidth.html"
              tabindex="0"
              class="max-width-150 d-block"
          ><img
              :src="item.images.size150x140.link"
              alt="Image Description"
              class="img-fluid"
          /></a>
        </div>
        <div class="col col-xl-7 col-wd product-item__body pl-2 pl-lg-3 pl-xl-0 pl-wd-3 mr-wd-1">
          <div class="mb-4 mb-xl-2 mb-wd-4">
            <div class="mb-2">
              <a
                  href="../shop/product-categories-7-column-full-width.html"
                  tabindex="0"
                  class="font-size-12 text-gray-5"
              >Tablets</a
              >
            </div>
            <h5 class="product-item__title">
              <a
                  href="../shop/single-product-fullwidth.html"
                  tabindex="0"
                  class="text-blue font-weight-bold"
              >{{ item.title }}</a
              >
            </h5>
          </div>
          <div class="flex-center-between mb-3">
            <div class="prodcut-price">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div class="d-none d-xl-block prodcut-add-cart">
              <a
                  href="../shop/single-product-fullwidth.html"
                  tabindex="0"
                  class="btn-add-cart btn-primary transition-3d-hover"
              ><i class="ec ec-add-to-cart"></i
              ></a>
            </div>
          </div>
          <div class="product-item__footer">
            <div class="border-top pt-2 flex-center-between flex-wrap">
              <a
                  href="../shop/compare.html"
                  tabindex="0"
                  class="text-gray-6 font-size-13"
              ><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a
              ><a
                href="../shop/wishlist.html"
                tabindex="0"
                class="text-gray-6 font-size-13"
            ><i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "productItemRow",
  props: {
    item: {
      default: null
    }
  }
};
</script>

<style></style>
