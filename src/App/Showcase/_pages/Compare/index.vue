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
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Compare</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div v-for="(item, i) of comparisonList" :key="i" class="table-responsive table-bordered table-compare-list mb-10 border-0">
        <p> {{ item.category.title }}</p>
        <table class="table">
          <tbody>
          <tr>
            <th class="min-width-200">Product</th>
            <td v-for="(product, j) of item.products" :key="j">
              <router-link :to="`/product/${product.id}`" class="product d-block">
                <div class="product-compare-image">
                  <div class="d-flex mb-3">
                    <img class="img-fluid mx-auto" :src="product.images.size212x200.link" alt="Image Description">
                  </div>
                </div>
                <h3 class="product-item__title text-blue font-weight-bold mb-3">{{ product.title }}</h3>
              </router-link>
              <div class="text-warning mb-2">
                <small class="fas fa-star" v-for="star of 5" :key="star" :class="{ 'text-muted': product.averageRating < star }"></small>
              </div>
            </td>
          </tr>

          <tr>
            <th>Price</th>
            <td v-for="(product, j) of item.products" :key="j">
              <div class="product-price">${{ product.priceWithDiscount }}</div>
            </td>
          </tr>

          <tr>
            <th>Availability</th>
            <td v-for="(product, j) of item.products" :key="j">
              <span>{{ product.amount ? `${product.amount} in stock` : "Not available" }}</span>
            </td>
          </tr>

          <tr>
            <th>Add to cart</th>
            <td v-for="(product, j) of item.products" :key="j">
              <div class="">
                <a v-if="product.amount > 0"
                   class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-3 px-xl-5"
                   @click="updateCart(product.id)"
                   style="cursor: pointer;">
                  {{ cartHasProduct(product.id) ? "Remove from cart" : "Add to cart" }}
                </a>
                <div v-else class="text-gray-100">
                  Not available
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>Sku</th>
            <td v-for="(product, j) of item.products" :key="j">
              {{ product.sku }}
            </td>
          </tr>

          <tr v-for="(filter, i) of item.category.filters" :key="i">
            <th>{{ filter.name }}</th>
            <td v-for="(product, j) of item.products" :key="j" class="text-center">
              {{ getProductFilter(product, filter) }}
            </td>
          </tr>

          <tr>
            <th>Remove</th>
            <td v-for="(product, j) of item.products" :key="j" class="text-center">
              <a class="text-gray-90" style="cursor: pointer" @click="removeItemFromComparisonList(product.id)"><i class="fa fa-times"></i></a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>


<script>

import mutations from "@/App/_shared/services/mutations";

export default {
  async mounted() {
    await this.refreshComparisonList()
  },
  computed: {
    comparisonList() {
      return this.$store.getters.comparisonList
    },
    token() {
      return this.$store.getters.token()
    },
  },
  methods: {
    async refreshComparisonList() {
      await this.$store.dispatch('fetchComparisonList', this.token)
    },
    async removeItemFromComparisonList(id) {
      await mutations.removeItemFromComparisonList(id, this.token)
      await this.refreshComparisonList()
    },
    updateCart(id) {
      this.$store.dispatch('updateCart', id, this.token)
    },
    cartHasProduct(id) {
      return this.$store.getters.cartHasProduct(id)
    },
    getProductFilter(product, filter) {
      for (let description of product.description) {
        if (description.name === filter.name) {
          return description.text
        }
      }
      return "-"
    }
  }
}
</script>
