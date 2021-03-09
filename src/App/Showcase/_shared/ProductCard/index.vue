<template>
  <div class="product-item">
    <div class="product-item__outer h-100" v-if="item">
      <div class="product-item__inner px-wd-4 p-2 p-md-3" v-if="type === 0">
        <div class="product-item__body pb-xl-2">
          <div class="mb-2">
            <router-link :to="`goods/${getCategory.id}`" class="font-size-12 text-gray-5" tabindex="0">
              {{ getCategory.title }}
            </router-link>
          </div>
          <h5 class="mb-1 product-item__title">
            <router-link :to="`/product/${item.id}`" class="text-blue font-weight-bold" tabindex="0">
              {{ item.title }}
            </router-link>
          </h5>
          <div class="mb-2">
            <router-link :to="`/product/${item.id}`" class="d-block text-center" tabindex="0">
              <img class="img-fluid" :src="item.images.size212x200 ? item.images.size212x200.link : ''" alt="Image Description"/>
            </router-link>
          </div>
          <div class="flex-center-between mb-1">
            <div v-if="item.discount === 0" class="prodcut-price">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div v-else class="prodcut-price d-flex align-items-center position-relative">
              <ins class="font-size-20 text-red text-decoration-none">${{ item.priceWithDiscount }}</ins>
              <del class="font-size-12 tex-gray-6 position-absolute bottom-100">${{ item.price }}</del>
            </div>
            <div class="d-none d-xl-block prodcut-add-cart">
              <a v-if="item.amount > 0"
                 class="btn-add-cart btn-primary transition-3d-hover"
                 tabindex="0"
                 @click="updateCart"
                 style="cursor: pointer;">
                <i v-if="cartHasProduct" class="fa fa-check"></i>
                <i v-else class="ec ec-add-to-cart"></i>
              </a>
              <div v-else class="text-gray-100" style="color: red">Not available</div>
            </div>
          </div>
        </div>
        <div class="product-item__footer">
          <div class="border-top pt-2 flex-center-between flex-wrap">
            <a class="text-gray-6 font-size-13" tabindex="0" @click="updateComparisonList" style="cursor: pointer;">
              <i v-if="comparisonListHasProduct" class="ec ec-compare mr-1 font-size-15" style="color: red;"></i>
              <i v-else class="ec ec-compare mr-1 font-size-15"></i>
              Compare
            </a>
            <div class="text-gray-6 font-size-13" tabindex="0" @click="updateWishList" style="cursor: pointer;">
              <i v-if="wishlistHasProduct" class="fas fa-heart" style="color: red;"></i>
              <i v-else class="far fa-heart"></i> Wishlist
            </div>
          </div>
        </div>
      </div>
      <div class="product-item__inner px-xl-4 p-3" v-if="type === 1">
        <div class="product-item__body pb-xl-2">
          <div class="mb-2">
            <router-link :to="`goods/${getCategory.id}`" class="font-size-12 text-gray-5">
              {{ getCategory.title }}
            </router-link>
          </div>
          <h5 class="mb-1 product-item__title">
            <router-link :to="`/product/${item.id}`" class="text-blue font-weight-bold">
              {{ item.title }}
            </router-link>
          </h5>
          <div class="mb-2">
            <router-link :to="`/product/${item.id}`" class="d-block text-center">
              <img class="img-fluid" :src="item.images.size212x200 ? item.images.size212x200.link : ''" alt="Image Description"/>
            </router-link>
          </div>
          <div class="mb-3">
            <a class="d-inline-flex align-items-center small font-size-14">
              <div class="text-warning mr-2">
                <small class="fas fa-star" v-for="star of 5" :key="star" :class="{ 'text-muted': item.averageRating < star }"></small>
              </div>
              <span class="text-secondary">({{ item.comments.length }})</span>
            </a>
          </div>
          <ul class="font-size-12 p-0 text-gray-110 mb-4">
            <li class="line-clamp-1 mb-1 list-bullet" v-for="(item, i) of item.keyFeatures" :key="i">
              {{ item }}
            </li>
          </ul>
          <div class="text-gray-20 mb-2 font-size-12">SKU: {{ item.sku }}</div>
          <div class="flex-center-between mb-1">
            <div v-if="item.discount === 0" class="prodcut-price">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div v-else class="prodcut-price d-flex align-items-center position-relative">
              <ins class="font-size-20 text-red text-decoration-none">${{ item.priceWithDiscount }}</ins>
              <del class="font-size-12 tex-gray-6 position-absolute bottom-100">${{ item.price }}</del>
            </div>
            <div class="d-none d-xl-block prodcut-add-cart">
              <a v-if="item.amount > 0"
                 class="btn-add-cart btn-primary transition-3d-hover"
                 tabindex="0"
                 @click="updateCart"
                 style="cursor: pointer;">
                <i v-if="cartHasProduct" class="fa fa-check" aria-hidden="true"></i>
                <i v-else class="ec ec-add-to-cart"></i>
              </a>
              <div v-else class="text-gray-100" style="color: red">Not available</div>
            </div>
          </div>
        </div>
        <div class="product-item__footer">
          <div class="border-top pt-2 flex-center-between flex-wrap">
            <a class="text-gray-6 font-size-13" @click="updateComparisonList" style="cursor: pointer;">
              <i v-if="comparisonListHasProduct" class="ec ec-compare mr-1 font-size-15" style="color: red;"></i>
              <i v-else class="ec ec-compare mr-1 font-size-15"></i>
              Compare
            </a>
            <div class="text-gray-6 font-size-13" @click="updateWishList" style="cursor: pointer;">
              <i v-if="wishlistHasProduct" class="fas fa-heart" style="color: red;"></i>
              <i v-else class="far fa-heart"></i> Wishlist
            </div>
          </div>
        </div>
      </div>
      <div class="product-item__inner remove-prodcut-hover py-4 row" v-if="type === 2">
        <div class="product-item__header col-6 col-md-4">
          <div class="mb-2">
            <router-link :to="`/product/${item.id}`" class="d-block text-center">
              <img class="img-fluid" :src="item.images.size212x200 ? item.images.size212x200.link : ''" alt="Image Description"/>
            </router-link>
          </div>
        </div>
        <div class="product-item__body col-6 col-md-5">
          <div class="pr-lg-10">
            <div class="mb-2">
              <router-link :to="`goods/${getCategory.id}`" class="font-size-12 text-gray-5">
                {{ getCategory.title }}
              </router-link>
            </div>
            <h5 class="mb-2 product-item__title">
              <router-link :to="`/product/${item.id}`" class="text-blue font-weight-bold">
                {{ item.title }}
              </router-link>
            </h5>
            <div class="prodcut-price mb-2 d-md-none">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div class="mb-3 d-none d-md-block">
              <a class="d-inline-flex align-items-center small font-size-14">
                <div class="text-warning mr-2">
                  <small class="fas fa-star" v-for="star of 5" :key="star" :class="{ 'text-muted': item.averageRating < star }"></small>
                </div>
                <span class="text-secondary">({{ item.comments.length }})</span>
              </a>
            </div>
            <ul class="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
              <li class="line-clamp-1 mb-1 list-bullet" v-for="(item, i) of item.keyFeatures" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="product-item__footer col-md-3 d-md-block">
          <div class="mb-3">
            <div class="prodcut-price mb-2">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div class="prodcut-add-cart">
              <a v-if="item.amount > 0"
                 class="btn btn-sm btn-block btn-primary btn-wide"
                 @click="updateCart"
                 style="cursor: pointer;">
                {{ cartHasProduct ? "Remove from cart" : "Add to cart" }}
              </a>
              <a v-else class="btn btn-sm btn-block btn-primary btn-wide">
                Not available
              </a>
            </div>
          </div>
          <div class="flex-horizontal-center justify-content-between justify-content-wd-center flex-wrap">
            <a class="text-gray-6 font-size-13 mx-wd-3" @click="updateComparisonList" style="cursor: pointer;">
              <i v-if="comparisonListHasProduct" class="ec ec-compare mr-1 font-size-15" style="color: red;"></i>
              <i v-else class="ec ec-compare mr-1 font-size-15"></i>
              Compare
            </a>
            <div class="text-gray-6 font-size-13 mx-wd-3" @click="updateWishList" style="cursor: pointer;">
              <i v-if="wishlistHasProduct" class="fas fa-heart" style="color: red;"></i>
              <i v-else class="far fa-heart"></i> Wishlist
            </div>
          </div>
        </div>
      </div>
      <div class="product-item__inner remove-prodcut-hover py-4 row" v-if="type === 3">
        <div class="product-item__header col-6 col-md-2">
          <div class="mb-2">
            <router-link :to="`/product/${item.id}`" class="d-block text-center">
              <img class="img-fluid" :src="item.images.size212x200 ? item.images.size212x200.link : ''" alt="Image Description"/>
            </router-link>
          </div>
        </div>
        <div class="product-item__body col-6 col-md-7">
          <div class="pr-lg-10">
            <div class="mb-2">
              <router-link :to="`goods/${getCategory.id}`" class="font-size-12 text-gray-5">
                {{ getCategory.title }}
              </router-link>
            </div>
            <h5 class="mb-2 product-item__title">
              <router-link :to="`/product/${item.id}`" class="text-blue font-weight-bold">
                {{ item.title }}
              </router-link>
            </h5>
            <div class="prodcut-price d-md-none">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <ul class="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
              <li class="line-clamp-1 mb-1 list-bullet" v-for="(item, i) of item.keyFeatures" :key="i">
                {{ item }}
              </li>
            </ul>
            <div class="mb-3 d-none d-md-block">
              <a class="d-inline-flex align-items-center small font-size-14">
                <div class="text-warning mr-2">
                  <small class="fas fa-star" v-for="star of 5" :key="star" :class="{ 'text-muted': item.averageRating < star }"></small>
                </div>
                <span class="text-secondary">({{ item.comments.length }})</span>
              </a>
            </div>
          </div>
        </div>
        <div class="product-item__footer col-md-3 d-md-block">
          <div class="mb-2 flex-center-between">
            <div class="prodcut-price">
              <div class="text-gray-100">${{ item.price }}</div>
            </div>
            <div class="prodcut-add-cart">
              <a v-if="item.amount > 0" class="btn-add-cart btn-primary transition-3d-hover" tabindex="0" @click="updateCart"
                 style="cursor: pointer;">
                <i v-if="cartHasProduct" class="fa fa-check" aria-hidden="true"></i>
                <i v-else class="ec ec-add-to-cart"></i>
              </a>
              <div v-else class="text-gray-100" style="color: red">Not available</div>
            </div>
          </div>
          <div class="flex-horizontal-center justify-content-between justify-content-wd-center flex-wrap border-top pt-3">
            <a class="text-gray-6 font-size-13 mx-wd-3" @click="updateComparisonList" style="cursor: pointer;">
              <i v-if="comparisonListHasProduct" class="ec ec-compare mr-1 font-size-15" style="color: red;"></i>
              <i v-else class="ec ec-compare mr-1 font-size-15"></i>
              Compare
            </a>
            <div class="text-gray-6 font-size-13 mx-wd-3" @click="updateWishList" style="cursor: pointer;">
              <i v-if="wishlistHasProduct" class="fas fa-heart" style="color: red;"></i>
              <i v-else class="far fa-heart"></i> Wishlist
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCard",
  props: {
    item: Object,
    type: {
      default: 0,
      type: Number,
    },
  },
  computed: {
    token() {
      return this.$store.getters.token()
    },
    cartHasProduct() {
      return this.$store.getters.cartHasProduct(this.item.id)
    },
    wishlistHasProduct() {
      return this.$store.getters.wishlistHasProduct(this.item.id)
    },
    comparisonListHasProduct() {
      return this.$store.getters.comparisonListHasProduct(this.item.id)
    },
    getCategory() {
      return this.item.categories[this.item.categories.length - 1]
    }
  },
  methods: {
    updateCart() {
      this.$store.dispatch('updateCart', this.item.id, this.token)
    },
    updateWishList() {
      this.$store.dispatch('updateWishList', this.item.id, this.token)
    },
    updateComparisonList() {
      this.$store.dispatch('updateComparisonList', this.item.id, this.token)
    }
  }
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
