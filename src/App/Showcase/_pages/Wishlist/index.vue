<template>
  <main id="content" role="main" class="cart-page">
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Wishlist</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="my-6">
        <h1 class="text-center">My wishlist on Electro</h1>
      </div>
      <div class="mb-16 wishlist-table">
        <div v-if="errors" class="row alert alert-primary" role="alert">{{ errors }}</div>
        <form class="mb-4" @submit.prevent.stop>
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th class="product-remove">&nbsp;</th>
                <th class="product-thumbnail">&nbsp;</th>
                <th class="product-name">Product</th>
                <th class="product-price">Unit Price</th>
                <th class="product-Stock w-lg-15">Stock Status</th>
                <th class="product-subtotal min-width-200-md-lg">&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, i) of wishlist" :key="i">
                <td class="text-center">
                  <a class="text-gray-32 font-size-26" style="cursor: pointer;" @click="removeItemFromWishlist(item.id)">×</a>
                </td>
                <td class="d-none d-md-table-cell">
                  <router-link :to="`/product/${item.id}`">
                    <img class="img-fluid max-width-100 p-1 border border-color-1" :src="item.images.size300x300.link" alt="Image Description">
                  </router-link>
                </td>

                <td data-title="Product">
                  <router-link :to="`/product/${item.id}`" class="text-gray-90">
                    {{ item.title }}
                  </router-link>
                </td>

                <td data-title="Unit Price">
                  <span class="">${{ item.priceWithDiscount }}</span>
                </td>

                <td data-title="Stock Status">
                  <span>{{ item.amount ? "In stock" : "Not available" }}</span>
                </td>

                <td>
                  <button v-if="item.amount"
                          class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto"
                          type="button"
                          @click="updateCart(item.id)"
                  >
                    <i v-if="cartHasProduct(item.id)" class="fa fa-check" aria-hidden="true"></i>
                    <i v-else class="ec ec-add-to-cart"></i>
                    {{ cartHasProduct(item.id) ? "Remove from cart" : "Add to cart" }}
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>

import mutations from "@/App/_shared/services/mutations";

export default {
  async mounted() {
    await this.$store.dispatch('fetchCart', this.token)
    await this.$store.dispatch('fetchWishlist', this.token)
  },
  data: () => ({
    errors: null
  }),
  computed: {
    wishlist() {
      return this.$store.getters.wishlist
    },
    token() {
      return this.$store.getters.token()
    },
  },
  methods: {
    cartHasProduct(id) {
      return this.$store.getters.cartHasProduct(id)
    },
    updateCart(id) {
      this.$store.dispatch('updateCart', id, this.token)
    },
    async refreshWishlist() {
      await this.$store.dispatch('fetchWishlist', this.token)
    },
    async removeItemFromWishlist(id) {
      await mutations.removeItemFromWishlist(id, this.token)
      await this.refreshWishlist()
    },
  }
}
</script>

<style>
</style>