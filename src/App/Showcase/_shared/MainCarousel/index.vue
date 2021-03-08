<template>
  <div>
    <div class="bg-img-hero" :style="{ 'background-image': `url(${sliderBg})` }">
      <div class="container min-height-438 overflow-hidden">
        <div class="js-slide" v-for="(category, i) of categories" :key="i">
          <div class="row min-height-438 pt-7 py-md-0">
            <div class="d-none d-xl-block col-auto">
              <div class="max-width-270 min-width-270"></div>
            </div>
            <div class="col-xl col col-md-6 mt-md-8 mt-lg-10">
              <div class="ml-xl-4">
                <h6 class="font-size-15 font-weight-bold mb-2 text-cyan"
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
                  {{ category.title }} THAT MAKE A STATEMENT UP TO
                  <strong class="font-weight-bold">40% OFF</strong>
                </h1>
                <router-link :to="`goods/${category.id}`"
                             class="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                >
                  Start Buying
                </router-link>
              </div>
            </div>
            <div class="col-xl-5 col-6 d-flex align-items-end ml-auto ml-md-0"
                 data-scs-animation-in="fadeInUp"
                 :class="{'fadeInUp animated': currentSlideIndex === 1}"
                 data-scs-animation-delay="500"
                 :style="`animation-delay: 500ms;`"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  props: {
    categories: Array
  },
  data: () => ({
    sliderBg: 'https://transvelo.github.io/electro-html/2.0/assets/img/1920X422/img1.jpg',
    currentSlideIndex: 1
  })
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
