<template>
  <carousel v-bind="settings">

    <template #customPaging style="display: flex">
      <li :class="{'slick-current': currentSlideIndex== i}" role="presentation" v-for="i of 3" :key="i" :id="'dot-'+i">
        <span></span>
      </li>
    </template>
  </carousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    carousel: VueSlickCarousel,
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
      dotsClass: 'js-pagination slider-dots-in-row text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-start mb-3 mb-md-4 offset-xl-2 pl-xl-16 pl-wd-13'
    },
    sliderBg: bg,
    page: 1,
    currentSlideIndex: 1
  }),
  methods: {
    updateCurrentSlide(e){
      console.log(e);
      setTimeout(()=>{this.currentSlideIndex = e}, 600)
    }
  }
}
</script>

<style>

</style>