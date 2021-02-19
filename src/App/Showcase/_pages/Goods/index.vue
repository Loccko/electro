<template>
  <main id="content" role="main">
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="../home/index.html">Home</a>
              </li>
              <li v-for="i of (categoriesFromRoot.length - 1)" :key="i"
                  class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="../home/index.html">{{ categoriesFromRoot[i-1].title }}</a>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">
                {{ category.title }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mb-8">
        <filter-column
            :categoryFilter="category.filters"
            :subcategories="category.subcategories"
            :categoryTitle="category.title"
        />
        <div class="col-xl-9 col-wd-9gdot5">
          <!-- Shop-control-bar Title -->
          <div class="d-block d-md-flex flex-center-between mb-3">
            <h3 class="font-size-25 mb-2 mb-md-0">
              {{ category.title }}
            </h3>
            <p class="font-size-14 text-gray-90 mb-0">
              Showing 1–25 of 56 results
            </p>
          </div>
          <view-switcher :view="view" @changeview="updateActiveViewScheme"/>
          <products-container :products="products" :cardType="view"/>
          <nav class="d-md-flex justify-content-between align-items-center border-top pt-3" aria-label="Page navigation example">
            <div class="text-center text-md-left mb-3 mb-md-0">
              Showing 1–25 of 56 results
            </div>
            <ul class="pagination mb-0 pagination-shop justify-content-center justify-content-md-start">
              <li class="page-item">
                <a class="page-link current" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductsContainer from "@/App/Showcase/_shared/ProductsContainer";
import FilterColumn from "@/App/Showcase/_shared/FilterColumn";
import ViewSwitcher from "@/App/Showcase/_shared/ViewSwitcher";

import Categories from "@/App/_shared/services/Categories";
import Products from "@/App/_shared/services/Products";

export default {
  components: {
    "products-container": ProductsContainer,
    "filter-column": FilterColumn,
    "view-switcher": ViewSwitcher,
  },
  async beforeRouteEnter(to, from, next) {
    const category = await Categories.fetchCategory(to.params.categoryid);
    const products = await Products.fetchProducts(20, to.params.categoryid);
    const categoriesFromRoot = category.categoriesFromRoot

    next((vm) => {
      vm.products = products;
      vm.category = category;
      vm.categoriesFromRoot = categoriesFromRoot;
    });
  },
  data: () => ({
    category: null,
    products: Array,
    categoriesFromRoot: Array,
    view: 0,
  }),
  methods: {
    updateActiveViewScheme(index) {
      this.view = index;
    }
    ,
  }
  ,
}
;
</script>

<style>
</style>