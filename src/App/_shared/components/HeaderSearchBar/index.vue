<template>
  <div class="d-none d-xl-block bg-primary">
    <div class="container">
      <div class="row align-items-stretch min-height-50">
        <div class="col-md-auto d-none d-xl-flex align-items-end">
          <div class="max-width-270 min-width-270">
            <div id="basicsAccordion">
              <div class="card border-0 rounded-0">
                <div class="card-header bg-primary rounded-0 card-collapse border-0" id="basicsHeadingOne">
                  <button
                      type="button"
                      class="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
                      data-toggle="collapse"
                      data-target="#basicsCollapseOne"
                      aria-expanded="true"
                      aria-controls="basicsCollapseOne"
                      @click="toogleCategoriesList"
                  >
                    <span class="pl-1 text-gray-90">Categories</span>
                    <span class="text-gray-90 ml-3">
                      <span class="ec ec-arrow-down-search"></span>
                    </span>
                  </button>
                </div>
                <div id="basicsCollapseOne" class="vertical-menu v1 collapse" data-parent="#basicsAccordion" :class="{'show':  categoriesListOpened}">
                  <div class="card-body p-0">
                    <nav class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                      <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                        <ul class="navbar-nav u-header__navbar-nav border-primary border-top-0">
                          <li v-for="rootCategory of categories"
                              :key="rootCategory.id"
                              class="nav-item hs-has-mega-menu u-header__nav-item"
                              data-event="hover"
                              data-animation-in="slideInUp"
                              data-animation-out="fadeOut"
                              data-position="left"
                              :class="{'hs-mega-menu-opened': hoveredMenuItemId === rootCategory.id}"
                              @mouseover="hoveredMenuItemId = rootCategory.id"
                              @mouseleave="hoveredMenuItemId = null"
                          >
                            <router-link class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                         id="basicMegaMenu"
                                         :to="`/goods/${rootCategory.id}`"
                                         aria-haspopup="true"
                                         aria-expanded="false"
                            >{{ rootCategory.title }}
                            </router-link>
                            <div class="hs-mega-menu vmm-tfw u-header__sub-menu" style="height: calc(100% + 1px) !important;"
                                 aria-labelledby="basicMegaMenu">
                              <div class="vmm-bg">
                                <img class="img-fluid" :src="rootCategory.images.size500x400.link" alt="Image Description" style="opacity: 0.1;"/>
                              </div>
                              <div class="row u-header__mega-menu-wrapper">
                                <div class="col mb-3 mb-sm-0" v-for="subcategory of rootCategory.subcategories" :key="subcategory.id">
                                  <span class="u-header__sub-menu-title">{{ subcategory.title }}</span>
                                  <ul class="u-header__sub-menu-nav-group mb-4">
                                    <li v-for="subcategory in subcategory.subcategories" :key="subcategory.id">
                                      <router-link class="nav-link u-header__sub-menu-nav-link" :to="`/goods/${subcategory.id}`">
                                        {{ subcategory.title }}
                                      </router-link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col align-self-center">
          <form class="js-focus-state">
            <label class="sr-only" for="searchProduct">Search</label>
            <div class="input-group">
              <input
                  type="email"
                  class="form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill"
                  name="email"
                  id="searchProduct"
                  placeholder="Search for Products"
                  aria-label="Search for Products"
                  aria-describedby="searchProduct1"
                  required
              />
              <div class="input-group-append">
                <button class="btn btn-dark height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                  <span class="ec ec-search font-size-24"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-auto align-self-center">
          <div class="d-flex">
            <ul class="d-flex list-unstyled mb-0">
              <li class="col">
                <a
                    href="../shop/compare.html"
                    class="text-gray-90"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                ><i class="font-size-22 ec ec-compare"></i
                ></a>
              </li>
              <li class="col">
                <router-link to="/wishlist" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="Favorites">
                  <i class="font-size-22 ec ec-favorites"></i>
                  <span
                      class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle right-0 top-8 font-weight-bold font-size-12"
                  >
                    {{ wishlist.length }}
                  </span>
                </router-link>
              </li>
              <li class="col pr-0">
                <router-link to="/cart" class="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart">
                  <i class="font-size-22 ec ec-shopping-bag"></i>
                  <span
                      class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12"
                  >
                    {{ cart.length }}
                  </span>
                  <span class="font-weight-bold font-size-16 text-gray-90 ml-3">
                    {{ total }}$
                  </span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    wishlist() {
      return this.$store.getters.wishlist
    },
    total() {
      return this.$store.getters.total
    }
  },
  props: {
    categories: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    categoriesListOpened: false,
    hoveredMenuItemId: null
  }),
  methods: {
    toogleCategoriesList() {
      this.categoriesListOpened = !this.categoriesListOpened
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss"></style>