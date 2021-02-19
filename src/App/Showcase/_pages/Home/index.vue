<template>
  <div>
    <main-carousel class="mb-4"/>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-wd-auto d-none d-xl-block">
          <left-side-panel :latestProducts="latestProducts"/>
        </div>
        <div class="col-xl-9 col-wd-auto max-width-1130">
          <main-banner :categories="categoriesWithoutSubcategories ? categoriesWithoutSubcategories.slice(0,2) : []"/>
          <tab-selector :products="popularProducts"/>
          <div class="mb-8" v-if="popularProducts && popularProducts[2] && popularProducts[2][0]">
            <full-banner :image="popularProducts[2][0].node.images.size212x200.link"/>
          </div>
          <div class="mb-8" v-if="categoriesWithoutSubcategories && categoriesWithoutSubcategories[0]">
            <category-preview-slider
                :slidesToShow="4"
                :title="`Bestsellers`"
                :item="categoriesWithoutSubcategories ? categoriesWithoutSubcategories[0] : null"
            />
          </div>
          <category-best-offers :category="categoriesWithoutSubcategories[2]"
                                v-if="categoriesWithoutSubcategories && categoriesWithoutSubcategories[2]"/>
          <category-best-offers :category="categoriesWithoutSubcategories[3]"
                                v-if="categoriesWithoutSubcategories && categoriesWithoutSubcategories[3]"/>
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
              :slidesToShow="5"
              :title="categoriesWithoutSubcategories[0].title"
              :item="categoriesWithoutSubcategories[0]"
          />
          <category-preview-slider
              :slidesToShow="5"
              :title="categoriesWithoutSubcategories[1].title"
              :item="categoriesWithoutSubcategories[1]"
          />
          <category-preview-slider
              :slidesToShow="5"
              :title="categoriesWithoutSubcategories[19].title"
              :item="categoriesWithoutSubcategories[19]"
          />
          <category-preview-slider
              v-if="recentlyViewedProducts.length"
              :slidesToShow="5"
              :title="`Recently viewed`"
              :item="recentlyViewedProducts"
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

import Products from "@/App/_shared/services/Products";
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

    let popularProducts = [];
    const popularityProducts = await Products.fetchProducts(5, null, 'popularity');
    const topRatedProducts = await Products.fetchProducts(5, null, 'average_rating');
    const discountedProducts = await Products.fetchProducts(5, null, 'discount');
    popularProducts.push(popularityProducts, discountedProducts, topRatedProducts)

    const categoriesWithoutSubcategories = await Categories.fetchCategoriesWithoutSubcategories();
    const latestProducts = await Products.fetchProducts(24, null, 'latest');
    const recentlyViewedProducts = {'products': await Products.fetchRecentlyViewedProducts()};

    next((vm) => {
      vm.latestProducts = latestProducts;
      vm.categoriesWithoutSubcategories = categoriesWithoutSubcategories;
      vm.popularProducts = popularProducts;
      vm.recentlyViewedProducts = recentlyViewedProducts;
    });
  },
  data: () => ({
    latestProducts: null,
    categoriesWithoutSubcategories: null,
    popularProducts: [],
    recentlyViewedProducts: []
  }),
  methods: {}
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
