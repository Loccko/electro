<template>
  <div>
    <div class="bg-img-hero" :style="{ 'background-image': `url(${sliderBg})` }">
      <div class="container min-height-438 overflow-hidden">
        <carousel v-bind="settings" @afterChange="updateCurrentSlide">
          <div class="js-slide" v-for="(item, i) of items" :key="i" :item="item">
            <div class="row min-height-438 pt-7 py-md-0">
              <div class="d-none d-xl-block col-auto">
                <div class="max-width-270 min-width-270"></div>
              </div>
              <div class="col-xl col col-md-6 mt-md-8 mt-lg-10">
                <div class="ml-xl-4">
                  <h6
                      class="font-size-15 font-weight-bold mb-2 text-cyan"
                      data-scs-animation-in="fadeInUp"
                      :class="{'fadeInUp animated': currentSlideIndex === 1}"
                  >
                    SHOP TO GET WHAT YOU LOVE
                  </h6>
                  <h1
                      class="font-size-46 text-lh-50 font-weight-light mb-6"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="200"
                      :style="`animation-delay: 200ms;`"
                      :class="{'fadeInUp animated': currentSlideIndex === 1}"
                  >
                    TIMEPIECES THAT MAKE A STATEMENT UP TO
                    <strong class="font-weight-bold">40% OFF</strong>
                  </h1>
                  <a
                      href="../shop/single-product-fullwidth.html"
                      class="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                  >
                    Start Buying
                  </a>
                </div>
              </div>
              <div
                  class="col-xl-5 col-6 d-flex align-items-end ml-auto ml-md-0"
                  data-scs-animation-in="fadeInUp"
                  :class="{'fadeInUp animated': currentSlideIndex==1}"
                  data-scs-animation-delay="500"
                  :style="`animation-delay: 500ms;`"
              >
                <img
                    class="img-fluid ml-auto mr-5"
                    src="@/assets/img/374X386/img1.png"
                    alt="Image Description"
                />
              </div>
            </div>
          </div>
          <template #customPaging style="display: flex">
            <li
                :class="{'slick-current': currentSlideIndex === i}"
                role="presentation" v-for="i of 3"
                :key="i"
                :id="'dot-'+i">
              <span></span>
            </li>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HomePage",
  components: {
    carousel: VueSlickCarousel,
  },
  props: {
    categories: {
      required: true
    }
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
    sliderBg: 'https://transvelo.github.io/electro-html/2.0/assets/img/1920X422/img1.jpg',
    page: 1,
    currentSlideIndex: 1
  }),
  methods: {
    updateCurrentSlide(e) {
      console.log(e);
      setTimeout(() => {
        this.currentSlideIndex = e
      }, 600)
    }
  }
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
