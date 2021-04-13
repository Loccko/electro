<template>
  <main id="content" role="main">
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <router-link to="/">Home</router-link>
              </li>
              <li v-for="i of (categoriesFromRoot.length - 1)" :key="i" class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a :href="`/goods/${categoriesFromRoot[i - 1].id}`">
                  {{ categoriesFromRoot[i - 1].title }}
                </a>
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
        <filter-column :category="category" @select="selectFilters" @filter="filter"/>
        <div class="col-xl-9 col-wd-9gdot5">
          <div class="d-block d-md-flex flex-center-between mb-3">
            <h3 class="font-size-25 mb-2 mb-md-0">
              {{ category.title }}
            </h3>
            <p class="font-size-14 text-gray-90 mb-0">
              Showing {{ (currentPage - 1) * products_per_page + 1 }}–{{ Math.min(currentPage * products_per_page, products.length) }} of
              {{ products.length }} results
            </p>
          </div>
          <view-switcher :view="view" @changeview="updateActiveViewScheme" @changeorder="updateSortingOrder"/>
          <products-container :products="getProducts()" :cardType="view"/>
          <nav class="d-md-flex justify-content-between align-items-center border-top pt-3" aria-label="Page navigation example">
            <div class="text-center text-md-left mb-3 mb-md-0">
              Showing {{ (currentPage - 1) * products_per_page + 1 }}–{{ Math.min(currentPage * products_per_page, products.length) }} of
              {{ products.length }} results
            </div>
            <ul class="pagination mb-0 pagination-shop justify-content-center justify-content-md-start">
              <li class="page-item">
                <a href="#" class="page-link" @click="currentPage > 1 ? currentPage--: true">
                  <i class="fas fa-arrow-left"></i>
                </a></li>
              <li class="page-item" v-for="i of pageCount" :key="i">
                <a href="#" class="page-link" :class="{'current': i === currentPage}" @click="currentPage=i">{{ i }}</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link" @click="currentPage < pageCount ? currentPage++: true">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </li>
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
    const products = await Products.fetchProducts(null, to.params.categoryid)
    const categoriesFromRoot = category.categoriesFromRoot

    next((vm) => {
      vm.products = products;
      vm.category = category;
      vm.pageCount = Math.ceil(products.length / vm.products_per_page);
      vm.categoriesFromRoot = categoriesFromRoot;
    });
  },
  data: () => ({
    category: null,
    products: Array,
    categoriesFromRoot: Array,
    view: 0,
    selectedFilters: null,
    sortingOrder: null,
    currentPage: 1,
    pageCount: null,
    products_per_page: 20
  }),
  methods: {
    updateActiveViewScheme(index) {
      this.view = index;
    },
    getProducts() {
      const start = (this.currentPage - 1) * this.products_per_page
      const end = this.currentPage * this.products_per_page
      return this.products.slice(start, end)
    },
    updateSortingOrder(value) {
      this.sortingOrder = value
      this.filter()
    },
    selectFilters(filters) {
      this.selectedFilters = filters
    },
    async filter() {
      this.products = await Products.fetchProducts(null, this.category.id, this.sortingOrder, this.selectedFilters)
      this.pageCount = Math.ceil(this.products.length / this.products_per_page)
      this.currentPage = 1
    },
  }
};
</script>

<style>
</style>