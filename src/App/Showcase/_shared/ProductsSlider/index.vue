<template>
  <div>
    <div class="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
      <h3 class="section-title mb-0 pb-2 font-size-22">
        Bestsellers
      </h3>
    </div>
    <carousel v-bind="settings" @afterChange="updateCurrentSlide">
      <product-item-row v-for="i of 3" :key="i"/>
      <template #customPaging style="display: flex">
        <li :class="{'slick-current': currentSlideIndex== i}" role="presentation" v-for="i of 3" :key="i" :id="'dot-'+i">
          <span></span>
        </li>
      </template>
    </carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ProductItemRow from "@/App/Showcase/_shared/ProductItemRow"

export default {
  components: {
    carousel: VueSlickCarousel,
    "product-item-row": ProductItemRow
  },
  data: () => ({
    settings: {
      dots: true,
      arrows: false,
      edgeFriction: 0.35,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      dotsClass: 'js-pagination slider-dots-in-row text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-start mb-3 mb-md-4 offset-xl-2 pl-xl-16 pl-wd-13'
    },
    page: 1,
    currentSlideIndex: 1
  }),
  methods: {
    updateCurrentSlide(e) {
      setTimeout(() => {
        this.currentSlideIndex = e
      }, 600)
    }
  }
};
</script>

<style></style>
