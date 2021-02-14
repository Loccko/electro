<template>
  <div class="position-relative">
    <div class="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
      <h3 class="section-title mb-0 pb-2 font-size-22">{{ title }}</h3>
    </div>
    <carousel
        ref="slider"
        v-bind="settings"
        class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1 slick-initialized slick-slider slick-dotted">
      <product-card v-for="(item, i) of item.products" :key="i" :item="item" :categoryTitle="title"/>
      <template #customPaging style="display: flex">
        <li
            role="presentation"
            v-for="j of item.products.length/slidesToShow"
            :key="j"
        >
          <span></span>
        </li>
      </template>
    </carousel>
    <div
        @click="showPrev"
        class="js-prev position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-left right-1 slick-arrow"
        aria-disabled="false"
        style="">
    </div>
    <div
        @click="showNext"
        class="js-next position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-right right-0 slick-arrow"
        style=""
        aria-disabled="false">
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ProductCard from "@/App/Showcase/_shared/ProductCard";

export default {
  props: {
    slidesToShow: {
      type: Number,
      default: 1,
    },
    title: String,
    item: {
      required: true
    }
  },
  beforeMount() {
    this.settings.slidesToShow = this.slidesToShow;
    this.settings.slidesToScroll = this.slidesToShow;
  },
  components: {
    carousel: VueSlickCarousel,
    "product-card": ProductCard,
  },
  data: () => ({
    settings: {
      dots: true,
      arrows: false,
      edgeFriction: 0.35,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      waitForAnimate: true,
      dotsClass: "js-pagination z-index-n1 slider-dots-in-row text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-start mb-3 mb-md-4 offset-xl-2 pl-xl-16 pl-wd-13",
    },
    page: 1,
    currentSlideIndex: 1,
  }),
  methods: {
    updateCurrentSlide(e) {
      console.log(e);
      setTimeout(() => {
        this.currentSlideIndex = e;
      }, 600);
    },
    showNext() {
      this.$refs.slider.next()
    },
    showPrev() {
      this.$refs.slider.prev()
    }
  },
};
</script>

<style></style>
