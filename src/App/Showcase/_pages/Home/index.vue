<template>
  <div>
    <main-carousel />
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-wd-auto d-none d-xl-block">
          <left-side-panel :latestProducts="latestProducts" />
        </div>
        <div class="col-xl-9 col-wd-auto max-width-1130">
          <main-banner />
          <tab-selector />
          <div class="mb-8">
            <full-banner />
          </div>
          <div class="mb-8">
            <category-preview-slider
              :slidesToShow="3"
              :title="`Bestsellers`"
              :items="categoriesWithoutSubcategories[0]"
            />
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
          <category-preview-slider
            :slidesToShow="4"
            :title="categoriesWithoutSubcategories[1].title"
            :item="categoriesWithoutSubcategories[1]"
          />
          <category-preview-slider
            :slidesToShow="4"
            :title="categoriesWithoutSubcategories[2].title"
            :item="categoriesWithoutSubcategories[2]"
          />
          <category-preview-slider
            :slidesToShow="4"
            :title="categoriesWithoutSubcategories[3].title"
            :item="categoriesWithoutSubcategories[3]"
          />
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
import CategoryBestOffers from "@/App/Showcase/_shared/CategoryBestOffers";
import CategoryPreviewSlider from "@/App/Showcase/_shared/CategoryPreviewSlider";

import LatestProducts from "@/App/_shared/services/LatestProducts";
import Categories from "@/App/_shared/services/Categories";

export default {
  name: "HomePage",
  components: {
    "main-carousel": MainCarousel,
    "main-banner": Banner,
    "left-side-panel": LeftSidePanel,
    "tab-selector": TabSelector,
    "full-banner": FullBanner,
    "category-best-offers": CategoryBestOffers,
    "category-preview-slider": CategoryPreviewSlider,
  },

  async beforeRouteEnter(to, from, next) {
    const latestProducts = await LatestProducts.fetchLatestProducts();
    const categoriesWithoutSubcategories = await Categories.fetchCategoriesWithoutSubcategories();

    next((vm) => {
      vm.latestProducts = latestProducts;
      vm.categoriesWithoutSubcategories = categoriesWithoutSubcategories;
    });
  },
  data: () => ({
    latestProducts: null,
    categoriesWithoutSubcategories: null,
  }),
  methods: {},
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
