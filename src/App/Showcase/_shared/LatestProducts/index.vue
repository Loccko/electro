<template>
  <div>
    <div class="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
      <h3 class="section-title section-title__sm mb-0 pb-3 font-size-18">Latest Products</h3>
    </div>
    <carousel v-bind="settings" @afterChange="updateCurrentSlide" ref="slider">
      <div v-for="i of 3" :key="i">
        <latest-product-item v-for="(item, j) of itemsPart(i-1)" :key="j" :item="item"/>
      </div>
    </carousel>
    <div class="js-prev position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-left right-1 slick-arrow"
         @click="showPrev"
         aria-disabled="false"
         style="">
    </div>
    <div class="js-next position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-right right-0 slick-arrow"
         @click="showNext"
         style=""
         aria-disabled="false">
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import LatestProductItem from "../LatestProductItem";

export default {
  props: {
    items: {
      required: true,
      type: Array,
    }
  },
  components: {
    carousel: VueSlickCarousel,
    "latest-product-item": LatestProductItem,
  },
  data: () => ({
    settings: {
      dots: false,
      edgeFriction: 0.35,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    page: 1,
    currentSlideIndex: 1,
  }),
  methods: {
    updateCurrentSlide(e) {
      setTimeout(() => {
        this.currentSlideIndex = e;
      }, 600);
    },
    itemsPart(i) {
      const startIndex = i * 8;
      let endIndex = startIndex + 8
      return this.items.slice(startIndex, endIndex);
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
