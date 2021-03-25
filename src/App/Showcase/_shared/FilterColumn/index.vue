<template>
  <div class="d-none d-xl-block col-xl-3 col-wd-2gdot5">
    <div class="mb-8 border border-width-2 border-color-3 borders-radius-6">
      <ul id="sidebarNav" class="list-unstyled mb-0 sidebar-navbar">
        <li>
          <a class="dropdown-toggle dropdown-toggle-collapse dropdown-title"
             role="button"
             data-toggle="collapse"
             @click="showRootCategories = !showRootCategories"
             :aria-expanded="showRootCategories"
             aria-controls="sidebarNav1Collapse"
             data-target="#sidebarNav1Collapse"
          >
            Show All Categories
          </a>

          <div id="sidebarNav1Collapse" class="collapse" data-parent="#sidebarNav" :class="{show: showRootCategories}">
            <ul id="sidebarNav1" class="list-unstyled dropdown-list">
              <li v-for="(cat, i) of rootCategories" :key="i">
                <a :href="`/goods/${cat.id}`" class="dropdown-item">
                  {{ cat.title }}
                  <span class="text-gray-25 font-size-12 font-weight-normal">({{ cat.amount }})</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a class="dropdown-current active" href="#">
            {{ category.title }}
            <span class="text-gray-25 font-size-12 font-weight-normal">({{ category.amount }})</span>
          </a>
          <ul class="list-unstyled dropdown-list" v-if="category">
            <li v-for="category of category.subcategories" :key="category.id">
              <a class="dropdown-item" :href="`/goods/${category.id}`">
                {{ category.title }}
                <span class="text-gray-25 font-size-12 font-weight-normal">
                  ({{ category.amount }})
                </span>
              </a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <div class="border-bottom border-color-1 mb-5">
        <h3 class="section-title section-title__sm mb-0 pb-2 font-size-18">
          Filters
        </h3>
      </div>
      <filters :categoryFilter="category.filters" @select="onSelect"/>
      <button type="submit" class="btn px-4 btn-primary-dark-w py-2 rounded-lg" @click="$emit('filter'); scrollToTop();">
        Filter
      </button>
    </div>
  </div>
</template>

<script>
import Filters from "@/App/Showcase/_shared/Filters"
import Categories from "@/App/_shared/services/Categories"


export default {
  async mounted() {
    this.rootCategories = await Categories.fetchRootCategories()
  },
  components: {
    'filters': Filters
  },
  props: {
    category: null
  },
  data: () => ({
    rootCategories: Array,
    showRootCategories: false,
  }),
  methods: {
    onSelect(event) {
      this.$emit('select', event)
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>