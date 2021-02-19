<template>
  <div class="mb-6">
    <!-- Nav Classic -->
    <div class="position-relative bg-white text-center z-index-2">
      <ul class="nav nav-classic nav-tab justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item" v-for="(tab, i) in tabs" :key="i" @click="activeTabIndex=i">
          <div
              class="nav-link js-animation-link"
              :class="{'active': activeTabIndex===i}"
              id="pills-one-example1-tab"
              data-toggle="pill"
              href="#pills-one-example1"
              role="tab"
              aria-controls="pills-one-example1"
              aria-selected="true"
              data-target="#pills-one-example1"
              data-link-group="groups"
              data-animation-in="slideInUp"
          >
            <div class="d-md-flex justify-content-md-center align-items-md-center">
              {{ tab }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="tab-content" id="pills-tabContent">
      <div
          class="tab-pane fade pt-2 show active animated slideInUp"
          :id="`pills-one-example`"
          role="tabpanel"
          aria-labelledby="pills-one-example1-tab"
          data-target-group="groups"
          style="opacity: 1;"
      >
        <ul class="row list-unstyled products-group no-gutters">
          <li class="col-6 col-md-4 col-xl product-item" v-for="(item, k) of products[activeTabIndex]" :key="k">
            <product-card :item="item.node" :categoryTitle="tabs[activeTabIndex]"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/App/Showcase/_shared/ProductCard";

export default {
  components: {
    "product-card": ProductCard,
  },
  props: {
    tabs: {
      type: Array,
      default: () => ['Most viewed', 'On sale', 'Top Rated']
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    activeTabIndex: 0
  }),
  methods: {
    itemsPart(i) {
      const startIndex = i * 3;
      let endIndex = startIndex + 3;
      return this.products.slice(startIndex, endIndex);
    },
  },
};
</script>

<style style="./style.scss" scoped lang="scss"></style>
