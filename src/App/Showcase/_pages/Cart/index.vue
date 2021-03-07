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
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mb-4">
        <h1 class="text-center">Cart</h1>
      </div>
      <div class="mb-10 cart-table">
        <div v-if="errors" class="row alert alert-primary" role="alert">{{ errors }}</div>
        <form class="mb-4" action="#" method="post" @submit.prevent.stop>
          <table class="table">
            <thead>
            <tr>
              <th class="product-remove">&nbsp;</th>
              <th class="product-thumbnail">&nbsp;</th>
              <th class="product-name">Product</th>
              <th class="product-price">Price</th>
              <th class="product-quantity w-lg-15">Quantity</th>
              <th class="product-subtotal">Total</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, i) of cart" :key="i" class="">
              <td class="text-center">
                <a class="text-gray-32 font-size-26" style="cursor: pointer;" @click="removeItemFromCart(item.product.id)">×</a>
              </td>
              <td class="d-none d-md-table-cell">
                <router-link :to="`/product/${item.product.id}`">
                  <img class="img-fluid max-width-100 p-1 border border-color-1" :src="item.product.images.size300x300.link" alt="Image Description">
                </router-link>
              </td>

              <td data-title="Product">
                <router-link :to="`/product/${item.product.id}`" class="text-gray-90">
                  {{ item.product.title }}
                </router-link>
              </td>

              <td data-title="Price">
                <span class="">${{ item.product.priceWithDiscount }}</span>
              </td>

              <td data-title="Quantity">
                <span class="sr-only">Quantity</span>
                <!-- Quantity -->
                <div class="border rounded-pill py-1 width-122 w-xl-80 px-3 border-color-1">
                  <div class="js-quantity row align-items-center">
                    <div class="col">
                      <input class="form-control h-auto border-0 rounded p-0 shadow-none"
                             style="background-color:transparent;"
                             :value="item.amount"
                             type="text"
                             readonly
                      >
                    </div>
                    <div class="col-auto pr-1">
                      <a class="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0"
                         @click="decreaseItemCartAmount(item.product.id)"
                      >
                        <small class="fas fa-minus btn-icon__inner"></small>
                      </a>
                      <a class="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0"
                         @click="increaseItemCartAmount(item.product.id)"
                      >
                        <small class="fas fa-plus btn-icon__inner"></small>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- End Quantity -->
              </td>

              <td data-title="Total">
                <span class="">${{ item.product.priceWithDiscount * item.amount }}</span>
              </td>
            </tr>
            <tr>
              <td colspan="6" class="border-top space-top-2 justify-content-center">
                <div class="pt-md-3">
                  <div class="d-block d-md-flex flex-center-between">
                    <div class="mb-3 mb-md-0 w-xl-40">
                      <!-- Apply coupon Form -->
                      <form class="js-focus-state">
                        <label class="sr-only" for="subscribeSrEmailExample1">Coupon code</label>
                        <div class="input-group">
                          <input type="text" class="form-control" name="text" id="subscribeSrEmailExample1" placeholder="Coupon code"
                                 aria-label="Coupon code" aria-describedby="subscribeButtonExample2" required>
                          <div class="input-group-append">
                            <button class="btn btn-block btn-dark px-4" type="button" id="subscribeButtonExample2"><i
                                class="fas fa-tags d-md-none"></i><span class="d-none d-md-inline">Apply coupon</span></button>
                          </div>
                        </div>
                      </form>
                      <!-- End Apply coupon Form -->
                    </div>
                    <div class="d-md-flex">
                      <a href="../shop/checkout.html"
                         class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-none d-md-inline-block">Proceed to checkout</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div class="mb-8 cart-total">
        <div class="row">
          <div class="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7 col-md-8 offset-md-4">
            <div class="border-bottom border-color-1 mb-3">
              <h3 class="d-inline-block section-title mb-0 pb-2 font-size-26">Cart totals</h3>
            </div>
            <table class="table mb-3 mb-md-0">
              <tbody>
              <tr class="order-total">
                <th>Total</th>
                <td data-title="Total"><strong><span class="amount">${{ total }}</span></strong></td>
              </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-md-none">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import mutations from "@/App/_shared/services/mutations";

export default {
  async mounted() {
    await this.refreshCart()
  },
  data: () => ({
    errors: null
  }),
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    token() {
      return this.$store.getters.token()
    },
    total() {
      return this.$store.getters.total
    }
  },
  methods: {
    async refreshCart() {
      await this.$store.dispatch('fetchCart', this.token)
    },
    async removeItemFromCart(id) {
      await mutations.removeItemFromCart(id, this.token)
      await this.refreshCart()
    },
    async increaseItemCartAmount(id) {
      this.errors = null
      const response = await mutations.increaseItemCartAmount(id, this.token)
      if (response && response.data && response.data.increaseItemCartAmount) {
        await this.refreshCart()
      } else if (response.errors) {
        this.errors = response.errors[0].message
      }
    },
    async decreaseItemCartAmount(id) {
      this.errors = null
      const response = await mutations.decreaseItemCartAmount(id, this.token)
      if (response && response.data && response.data.decreaseItemCartAmount) {
        await this.refreshCart()
      } else if (response.errors) {
        this.errors = response.errors[0].message
      }
    }
  }
}
</script>

<style>
</style>