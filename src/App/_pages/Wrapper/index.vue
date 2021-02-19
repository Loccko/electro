<template>
  <div>
    <service-header :categories="categories"/>
    <router-view :initialCategoriesArray="initialCategoriesArray"/>
    <service-footer
        :productColumns="footerProducts"
        :columnTitles="['Most viewed products','On sale Products','Top Rated Products']"
    />
  </div>
</template>

<script>
import ServiceHeader from '@/App/_shared/components/ServiceHeader'
import ServiceFooter from "@/App/_shared/components/ServiceFooter"
import Categories from "@/App/_shared/services/Categories"
import Products from "@/App/_shared/services/Products";

export default {
  name: 'Generall-App-Wrapper',
  components: {
    'service-header': ServiceHeader,
    'service-footer': ServiceFooter
  },
  async beforeRouteEnter(to, from, next) {
    const categories = await Categories.fetchCategories()
    let popularProducts = []
    const mostViewedProducts = await Products.fetchProducts(3, null, 'popularity');
    const discountedProducts = await Products.fetchProducts(3, null, 'discount');
    const topRatedProducts = await Products.fetchProducts(3, null, 'average_rating');
    popularProducts.push(mostViewedProducts, discountedProducts, topRatedProducts)

    next(vm => {
      vm.categories = categories;
      vm.footerProducts = popularProducts
    })
  },
  data: () => ({
    categories: null,
    productColumns: null,
    footerProducts: null
  }),
  computed: {
    initialCategoriesArray() {
      if (this.categories && this.categories.length > 0) {
        return this.categories
      }
      return null
    }
  }
};
</script>