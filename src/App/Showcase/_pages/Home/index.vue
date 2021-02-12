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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainCarousel from '@/App/Showcase/_shared/MainCarousel'
import Banner from '@/App/Showcase/_shared/Banner'

import LeftSidePanel from '@/App/Showcase/_shared/LeftSidePanel'
import TabSelector from '@/App/Showcase/_shared/TabSelector'

export default {
  name: "HomePage",
  components:{
    'main-carousel': MainCarousel,
    'main-banner': Banner,
    'left-side-panel': LeftSidePanel,
    'tab-selector': TabSelector
  },
  data: () => ({
   
  }),
  methods: {

  }
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
