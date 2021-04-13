<template>
  <div class="bg-gray-1 flex-center-between borders-radius-9 py-1">
    <div class="px-3 d-none d-xl-block">
      <ul class="nav nav-tab-shop" id="pills-tab" role="tablist">
        <li class="nav-item" @click="changeView(0)">
          <a
              class="nav-link"
              :class="{'active': view == 0, inactive:view !== 0 }"
              :aria-selected="view == 0"
              id="pills-one-example1-tab"
          >
            <div
                class="d-md-flex justify-content-md-center align-items-md-center"
            >
              <i class="fa fa-th"></i>
            </div>
          </a>
        </li>
        <li class="nav-item" @click="changeView(1)">
          <a
              class="nav-link"
              :class="{ active: view == 1 , inactive:view !== 1 }"
              :aria-selected="view == 1"
              id="pills-two-example1-tab"
          >
            <div
                class="d-md-flex justify-content-md-center align-items-md-center"
            >
              <i class="fa fa-align-justify"></i>
            </div>
          </a>
        </li>
        <li class="nav-item" @click="changeView(2)">
          <a
              class="nav-link"
              id="pills-three-example1-tab"
              :class="{ 'active': view == 2 , inactive:view !== 2 }"
          >
            <div
                class="d-md-flex justify-content-md-center align-items-md-center"
            >
              <i class="fa fa-list"></i>
            </div>
          </a>
        </li>
        <li class="nav-item" @click="changeView(3)">
          <a
              class="nav-link"
              id="pills-four-example1-tab"
              :class="{ 'active': view == 3, inactive:view !== 3  }"
          >
            <div
                class="d-md-flex justify-content-md-center align-items-md-center"
            >
              <i class="fa fa-th-list"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div class="d-flex">
      <div class="dropdown bootstrap-select js-select dropdown-select max-width-200 max-width-160-sm right-dropdown-0 px-2 px-xl-0">
        <button class="btn dropdown-toggle btn-sm bg-white font-weight-normal py-2 border text-gray-20 bg-lg-down-transparent border-lg-down-0"
                @click="showOder=!showOder"
                type="button"
                data-toggle="dropdown" role="button" title="Default sorting">
          <div class="filter-option">
            <div class="filter-option-inner">
              <div class="filter-option-inner-inner"> {{ selectedSortingOrder }}</div>
            </div>
          </div>
        </button>
        <div class="dropdown-menu" role="combobox" :class="{'show':showOder}">
          <div class="inner show" role="listbox" aria-expanded="true">
            <ul class="dropdown-menu inner show">
              <li v-for="(order, name, i) in sortingOrders" :key="i">
                <a role="option" class="dropdown-item" @click="changeOrder(name)">
                  <span class=" bs-ok-default check-mark"></span>
                  <span class="text">{{ name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="px-3 flex-horizontal-center text-gray-20 d-none d-xl-flex">
      <a class="text-gray-30 font-size-20 ml-2"></a>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    view: Number,
  },
  data: () => ({
    selectedSortingOrder: 'Default sorting',
    showOder: false,
    sortingOrders: {
      'Default sorting': null,
      'Sort by average rating': 'average_rating',
      'Sort by popularity': 'popularity',
      'Sort by latest': 'latest',
      'Sort by discount': 'discount',
      'Sort by price: low to high': 'price_low_to_high',
      'Sort by price: high to low': 'price_high_to_low'
    }
  }),
  methods: {
    changeView(type) {
      this.$emit("changeview", type);
    },
    changeOrder(name) {
      this.selectedSortingOrder = name
      this.showOder = false
      const value = this.sortingOrders[name]
      this.$emit("changeorder", value)
    },
  },
};
</script>

<style scoped>
.inactive {
  opacity: .3 !important;
}
</style>
