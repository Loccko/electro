<template>
  <div>
    <service-header :categories="categories" @openAuth="authorizationSidebarOpened=true"/>
    <router-view/>
    <service-footer :categories="categories" :productColumns="footerProducts"
                    :columnTitles="['Most viewed products','On sale Products','Top Rated Products']"/>
    <auth-sidebar :opened="authorizationSidebarOpened" @close="authorizationSidebarOpened=false"/>
  </div>
</template>

<script>
import ServiceHeader from '@/App/_shared/components/ServiceHeader'
import ServiceFooter from "@/App/_shared/components/ServiceFooter"
import Categories from "@/App/_shared/services/Categories"
import Products from "@/App/_shared/services/Products";
import AuthSidebar from "@/App/_shared/components/AuthSidebar";

export default {
  name: 'Generall-App-Wrapper',
  components: {
    'service-header': ServiceHeader,
    'service-footer': ServiceFooter,
    'auth-sidebar': AuthSidebar
  },
  async beforeRouteEnter(to, from, next) {
    const categories = await Categories.fetchCategories()
    let popularProducts = []
    const mostViewedProducts = await Products.fetchProducts(3, null, 'popularity')
    const discountedProducts = await Products.fetchProducts(3, null, 'discount')
    const topRatedProducts = await Products.fetchProducts(3, null, 'average_rating')
    popularProducts.push(mostViewedProducts, discountedProducts, topRatedProducts)

    next(vm => {
      vm.categories = categories;
      vm.footerProducts = popularProducts;
    })
  },
  async mounted() {
    await this.$store.dispatch('fetchUser');
    await this.$store.dispatch('fetchWishlist');
    await this.$store.dispatch('fetchCart');
    await this.$store.dispatch('fetchComparisonList');
  },
  data: () => ({
    categories: null,
    productColumns: null,
    footerProducts: null,
    authorizationSidebarOpened: false,
  })
};
</script>