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
              <li v-for="i of (product.categories.length - 1)" :key="i" class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a :href="`/goods/${product.categories[i - 1].id}`">
                  {{ product.categories[i - 1].title }}
                </a>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">
                {{ product ? product.title : "" }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mb-14">
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-5 mb-4 mb-md-0">
            <VueSlickCarousel class="js-slick-carousel u-slick mb-2 slick-initialized slick-slider"
                              :arrows="true"
                              id="sliderSyncingNav"
                              ref="carousel">
              <div class="js-slide slick-slide slick-cloned"
                   data-slick-index="-1"
                   aria-hidden="true"
                   style="width: 470px"
                   tabindex="-1"
                   v-for="(slide, p) of mainCarouselImages"
                   :key="p"
              >
                <img class="img-fluid" :src="slide" alt="Image Description"/>
              </div>
            </VueSlickCarousel>

            <div id="sliderSyncingThumb"
                 class="js-slick-carousel u-slick u-slick--slider-syncing u-slick--slider-syncing-size u-slick--gutters-1 u-slick--transform-off slick-initialized slick-slider slick-transform-off"
                 data-infinite="true"
                 data-slides-show="5"
                 data-is-thumbs="true"
                 data-nav-for="#sliderSyncingNav"
            >
              <div class="slick-list draggable">
                <div class="slick-track" style="
                    opacity: 1;
                    width: 480px;
                    transform: translate3d(0px, 0px, 0px);
                  ">
                  <div class="js-slide slick-slide slick-active"
                       style="cursor: pointer; width: 88px; height: auto"
                       tabindex="0"
                       v-for="(slide, k) of mainCarouselImages"
                       :key="k"
                       :class="{ 'slick-current': mainCarouselActiveIndex === k }"
                       @click="changeSlide(k)"
                  >
                    <img class="img-fluid" :src="slide" alt="Image Description"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4 mb-md-6 mb-lg-0">
            <div class="mb-2">
              <router-link :to="`/goods/${getCategory().id}`" class="font-size-12 text-gray-5 mb-2 d-inline-block">
                {{ getCategory().title }}
              </router-link>
              <h2 class="font-size-25 text-lh-1dot2">
                {{ product ? product.title : "" }}
              </h2>
              <div class="mb-2">
                <a class="d-inline-flex align-items-center small font-size-15 text-lh-1">
                  <div class="text-warning mr-2">
                    <small class="fas fa-star" v-for="star of 5" :key="star" :class="{ 'text-muted': star > product.averageRating }"></small>
                  </div>
                  <span class="text-secondary font-size-13">({{ product.comments.length }} customer reviews)</span>
                </a>
              </div>
              <div class="mb-2">
                <ul class="font-size-14 pl-3 ml-1 text-gray-110">
                  <li v-for="(feature, j) of product.keyFeatures" :key="j">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <p v-for="(overview, i) of product.overview" :key="i">
                {{ overview }}
              </p>
              <p><strong>SKU</strong>: {{ product.sku }}</p>
            </div>
          </div>
          <div class="mx-md-auto mx-lg-0 col-md-6 col-lg-4 col-xl-3">
            <div class="mb-2">
              <div class="card p-5 border-width-2 border-color-1 borders-radius-17">
                <div class="text-gray-9 font-size-14 pb-2 border-color-1 border-bottom mb-3">
                  Availability:
                  <span v-if="product.amount === 0" class="text-red font-weight-bold">
                     Not available
                  </span>
                  <span v-else class="text-green font-weight-bold">
                     {{ product.amount }} in stock
                  </span>
                </div>
                <div class="mb-3">
                  <div class="font-size-36">${{ product.priceWithDiscount }}</div>
                </div>

                <div v-if="product.amount !== 0" class="mb-2 pb-0dot5" @click="updateCart">
                  <a class="btn btn-block btn-primary" style="cursor:pointer">
                    <i v-if="cartHasProduct" class="fa fa-check mr-2 font-size-20"></i>
                    <i v-else class="ec ec-add-to-cart mr-2 font-size-20"></i>
                    {{ cartHasProduct ? "Remove from Cart" : "Add to Cart" }}
                  </a>
                </div>

                <div v-if="product.amount !== 0" class="mb-3">
                  <a href="#" class="btn btn-block btn-dark">Buy Now</a>
                </div>

                <div class="flex-content-center flex-wrap">
                  <a href="#" class="text-gray-6 font-size-13 ml-2">
                    <i class="ec ec-compare mr-1 font-size-15"></i>
                    Compare
                  </a>

                  <a class="text-gray-6 font-size-13 mr-2" @click="updateWishList" style="cursor: pointer;">
                    <i v-if="wishlistHasProduct" class="fas fa-heart mr-1" style="color: red; padding-left: 10px"></i>
                    <i v-else class="far fa-heart mr-1" style="padding-left: 10px"></i>
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-7 pt-6 pb-3 mb-6">
      <div class="container">
        <div class="js-scroll-nav">
          <div class="bg-white pt-4 pb-6 px-xl-11 px-md-5 px-4 mb-6 overflow-hidden" v-if="product.overview && product.overview.length>0">
            <div id="Description" class="mx-md-2 active">
              <div class="position-relative mb-6">
                <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link active" href="#Description">
                      <div class="d-md-flex justify-content-md-center align-items-md-center" v-if="product.overview && product.overview.length>0">
                        Description
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Specification">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Specification
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Reviews">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Reviews
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mx-md-4 pt-1" v-if="product.overview && product.overview.length>0">
                <p v-for="(elem, i) of product.overview" :key="i">{{ elem }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
            <div id="Specification" class="mx-md-2 active">
              <div class="position-relative mb-6">
                <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2" v-if="product.overview && product.overview.length>0">
                    <a class="nav-link" href="#Description">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Description
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link active" href="#Specification">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Specification
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Reviews">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Reviews
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mx-md-5 pt-1">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                    <tr v-for="(item, m) of product.description" :key="m" style="border-bottom: 1px solid #ecedf2;">
                      <th class="px-4 px-xl-5 border-top-0">
                        {{ item.name }}
                      </th>
                      <td class="border-top-0">{{ item.text }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
            <div id="Reviews" class="mx-md-2">
              <div class="position-relative mb-6">
                <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2" v-if="product.overview && product.overview.length>0">
                    <a class="nav-link" href="#Description">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Description
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Specification">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Specification
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link active" href="#Reviews">
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        Reviews
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-4 px-lg-4">
                <div class="row mb-8">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <h3 class="font-size-18 mb-6">
                        Based on {{ product.comments.length }} reviews
                      </h3>
                      <h2 class="font-size-30 font-weight-bold text-lh-1 mb-0">
                        {{ Number((product.averageRating).toFixed(1)) }}
                      </h2>
                      <div class="text-lh-1">overall</div>
                    </div>

                    <!-- Ratings -->
                    <ul class="list-unstyled">
                      <li class="py-1" v-for="rate in [5,4,3,2,1]" :key="rate">
                        <a class="row align-items-center mx-gutters-2 font-size-1">
                          <div class="col-auto mb-2 mb-md-0">
                            <div class="text-warning text-ls-n2 font-size-16" style="width: 80px">
                              <small class="fas fa-star" v-for="star of 5" :key="star" :class="{'text-muted':star > rate}"></small>
                            </div>
                          </div>
                          <div class="col-auto mb-2 mb-md-0">
                            <div class="progress ml-xl-5" style="height: 10px; width: 200px">
                              <div class="progress-bar"
                                   role="progressbar"
                                   :style="`width: ${getProgressBarWidth(rate)}%`"
                                   aria-valuenow="100"
                                   aria-valuemin="0"
                                   aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div class="col-auto text-right">
                            <span class="text-gray-90">{{ commentsRating[rate] }}</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <!-- End Ratings -->
                  </div>
                  <div class="col-md-6">
                    <h3 class="font-size-18 mb-5" style="text-align: center">
                      {{ user ? " Add a review" : "Sign in to leave a comment!" }}
                    </h3>
                    <!-- Form -->
                    <form v-if="user !== null" class="js-validate" @submit.prevent.stop>
                      <div v-if="errors" class="row alert alert-primary" role="alert">{{ errors }}</div>

                      <div class="row align-items-center mb-4">
                        <div class="col-md-4 col-lg-3">
                          <label class="form-label mb-0">
                            Your Review
                          </label>
                        </div>
                        <div class="col-md-8 col-lg-9">
                          <a class="d-block">
                            <div class="text-warning text-ls-n2 font-size-16">
                              <small v-for="star of 5"
                                     class="fas fa-star"
                                     :key="star"
                                     :class="{'text-muted': star > hoveredRating && star > selectedRating}"
                                     @click="selectedRating ? selectedRating = null :selectedRating = star"
                                     @mouseover="hoveredRating = star"
                                     @mouseleave="hoveredRating = 0"
                              ></small>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="js-form-message form-group mb-3 row">
                        <div class="col-md-4 col-lg-3">
                          <label for="descriptionTextarea" class="form-label">
                            Your Review
                          </label>
                        </div>
                        <div class="col-md-8 col-lg-9">
                          <textarea class="form-control"
                                    rows="3"
                                    id="descriptionTextarea"
                                    data-msg="Please enter your message."
                                    data-error-class="u-has-error"
                                    data-success-class="u-has-success"
                                    v-model="reviewText"
                          ></textarea>
                        </div>
                      </div>

                      <div class="row">
                        <div class="offset-md-4 offset-lg-3 col-auto">
                          <button type="submit" class="btn btn-primary-dark btn-wide transition-3d-hover" @click="sendComment">
                            Add Review
                          </button>
                        </div>
                      </div>
                    </form>
                    <!-- End Form -->
                  </div>
                </div>

                <div class="border-bottom border-color-1 pb-4 mb-4" v-for="(comment, j) of product.comments" :key="j">
                  <div class="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                    <div class="text-warning text-ls-n2 font-size-16" style="width: 80px">
                      <small class="fas fa-star" :class="{'text-muted': star > comment.rating }" v-for="star of 5" :key="star"></small>
                    </div>
                  </div>
                  <p class="text-gray-90">{{ comment.text }}</p>
                  <div class="mb-2">
                    <strong>{{ comment.author.data.firstName + " " + comment.author.data.lastName }}</strong>
                    <span class="font-size-13 text-gray-23"> - {{ comment.createdAt | moment("MMMM D, YYYY") }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mb-6">
        <div class="d-flex justify-content-between align-items-center border-bottom border-color-1 flex-lg-nowrap flex-wrap mb-4">
          <h3 class="section-title mb-0 pb-2 font-size-22">Related products</h3>
        </div>
        <ul class="row list-unstyled products-group no-gutters">
          <li v-for="(item, i) of relatedProducts" :key="i" :class="getClass(i)">
            <product-card :item="item" :category-title="null"></product-card>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import Products from "@/App/_shared/services/Products";
import ProductCard from "@/App/Showcase/_shared/ProductCard"
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import mutations from "@/App/_shared/services/mutations";

export default {
  components: {ProductCard, VueSlickCarousel},
  async beforeRouteEnter(to, from, next) {
    const product = await Products.fetchProduct(to.params.id);
    let commentsRating = {
      "5": 0,
      "4": 0,
      "3": 0,
      "2": 0,
      "1": 0
    }
    if (product.comments && product.comments.length > 0) {
      product.comments.forEach(comment => {
        commentsRating[comment.rating]++
      });
    }
    next((vm) => {
      vm.product = product;
      vm.commentsRating = commentsRating
    });
  },
  data: () => ({
    product: null,
    mainCarouselActiveIndex: 0,
    count: 1,
    commentsRating: null,
    hoveredRating: 0,
    selectedRating: null,
    reviewText: null,
    relatedProducts: Array,
    errors: null
  }),
  async mounted() {
    const category = this.product.categories[this.product.categories.length - 1]
    await mutations.addItemToRecentlyViewedProducts(this.product.id);
    this.relatedProducts = await Products.fetchProducts(6, category.id)
  },
  computed: {
    token() {
      return this.$store.getters.token()
    },
    user() {
      return this.$store.getters.user
    },
    cartHasProduct() {
      return this.$store.getters.cartHasProduct(this.product.id)
    },
    wishlistHasProduct() {
      return this.$store.getters.wishlistHasProduct(this.product.id)
    },
    mainCarouselImages() {
      return this.product && this.product.images ? this.product.images.size720x660.map((image) => image.link) : [];
    }
  },

  methods: {
    updateCart() {
      this.$store.dispatch('updateCart', this.product.id, this.token)
    },
    updateWishList() {
      this.$store.dispatch('updateWishList', this.product.id, this.token)
    },
    changeSlide(index) {
      this.mainCarouselActiveIndex = index;
      this.$refs.carousel.goTo(index);
    },
    getProgressBarWidth(index) {
      let totalCount = 0
      for (const key in this.commentsRating) {
        totalCount += this.commentsRating[key]
      }
      return (this.commentsRating[index] / totalCount) * 100
    },
    getClass(index) {
      if (index % 3 === 0) {
        return "col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item remove-divider-md-lg"
      } else if (index % 4 === 0) {
        return "col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item remove-divider-xl"
      } else if (index % 5 === 0) {
        return "col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item remove-divider-wd d-xl-none d-wd-block"
      }
      return "col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item"
    },
    getCategory() {
      return this.product.categories[this.product.categories.length - 1]
    },
    async sendComment() {
      this.errors = null
      const token = this.token

      if (this.reviewText) {
        this.reviewText = this.reviewText.trim()
      }

      if (this.selectedRating && this.reviewText && this.reviewText.length > 0) {
        const response = await mutations.createComment(this.product.id, this.reviewText, this.selectedRating, token)
        if (response && response.data && response.data.createComment) {
          this.selectedRating = null
          this.reviewText = null
          this.errors = `Thanks for the awesome review, ${this.user.data.firstName}!`
          await this.fetchProduct()
        } else if (response.errors) {
          this.errors = response.errors[0].message
        }
      } else {
        this.errors = "Text message and selected rating are required if you want to leave a comment!"
      }
    },
    async fetchProduct() {
      this.product = await Products.fetchProduct(this.product.id);
    }
  }
};
</script>

<style scoped lang="scss" src="./style.scss"></style>