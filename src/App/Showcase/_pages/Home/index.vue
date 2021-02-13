<template>
  <div>
    <main-carousel />
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-wd-auto d-none d-xl-block">
          <left-side-panel />
        </div>
        <div class="col-xl-9 col-wd-auto max-width-1130">
          <main-banner />
          <tab-selector />
          <div class="mb-8">
            <full-banner />
          </div>
          <div class="mb-8">
            <products-slider />
          </div>
          <category-best-offers />
          <category-best-offers />
          <div class="mb-8">
            <div class="row">
              <div class="col-md-6 mb-3 mb-md-0">
                <a href="../shop/shop.html">
                  <img
                    class="img-fluid"
                    src="@/assets/img/536X150/img1.jpg"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div class="col-md-6">
                <a href="../shop/shop.html">
                  <img
                    class="img-fluid"
                    src="@/assets/img/536X150/img2.jpg"
                    alt="Image Description"
                  />
                </a>
              </div>
            </div>
          </div>
          <category-best-offers />
          <category-best-offers />
          <category-best-offers />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainCarousel from "@/App/Showcase/_shared/MainCarousel";
import Banner from "@/App/Showcase/_shared/Banner";

import LeftSidePanel from "@/App/Showcase/_shared/LeftSidePanel";
import TabSelector from "@/App/Showcase/_shared/TabSelector";
import FullBanner from "@/App/Showcase/_shared/FullBanner";
import ProductsSlider from "@/App/Showcase/_shared/ProductsSlider";
import CategoryBestOffers from "@/App/Showcase/_shared/CategoryBestOffers";

export default {
  name: "HomePage",
  components: {
    "main-carousel": MainCarousel,
    "main-banner": Banner,
    "left-side-panel": LeftSidePanel,
    "tab-selector": TabSelector,
    "full-banner": FullBanner,
    "products-slider": ProductsSlider,
    "category-best-offers": CategoryBestOffers,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
