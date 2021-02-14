<template>
  <div>
    <main-carousel class="mb-4"/>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-wd-auto d-none d-xl-block">
          <left-side-panel :latestProducts="latestProducts"/>
        </div>
        <div class="col-xl-9 col-wd-auto max-width-1130">
          <main-banner :categories="categoriesWithoutSubcategories.slice(0,2)"/>
          <tab-selector :products="popularProducts"/>
          <div class="mb-8">
            <full-banner :image="popularProducts[2][0].node.images.size212x200.link"/>
          </div>
          <div class="mb-8">
            <category-preview-slider
                v-if="categoriesWithoutSubcategories[0]"
                :slidesToShow="3"
                :title="`Bestsellers`"
                :item="categoriesWithoutSubcategories[0]"
            />
          </div>
          <category-best-offers :items="categoriesWithoutSubcategories[0]" v-if="categoriesWithoutSubcategories[0]"/>
          <category-best-offers :items="categoriesWithoutSubcategories[5]" v-if="categoriesWithoutSubcategories[5]"/>
          <div class="mb-8">
            <div class="row">
              <div class="col-md-6 mb-3 mb-md-0">
                <img
                    class="img-fluid"
                    src="https://transvelo.github.io/electro-html/2.0/assets/img/536X150/img1.jpg"
                    alt="Image Description"
                />
              </div>
              <div class="col-md-6">
                <img
                    class="img-fluid"
                    src="https://transvelo.github.io/electro-html/2.0/assets/img/536X150/img2.jpg"
                    alt="Image Description"
                />
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
    const latestProducts = await LatestProducts.fetchLatestProducts(24, 'latest');
    const categoriesWithoutSubcategories = await Categories.fetchCategoriesWithoutSubcategories();
    let popularProducts = []
    const popularityProducts = await LatestProducts.fetchLatestProducts(5, 'popularity');
    const topRatedProducts = await LatestProducts.fetchLatestProducts(5, 'average_rating');
    const discountedProducts = await LatestProducts.fetchLatestProducts(5, 'discount');
    popularProducts.push(popularityProducts, topRatedProducts, discountedProducts)

    next((vm) => {
      vm.latestProducts = latestProducts;
      vm.categoriesWithoutSubcategories = categoriesWithoutSubcategories;
      vm.popularProducts = popularProducts
    });
  },
  data: () => ({
    latestProducts: null,
    categoriesWithoutSubcategories: null,
    popularProducts: []
  }),
  methods: {}
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
