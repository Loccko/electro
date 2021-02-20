<template>
  <div>
    <service-header 
      :categories="categories" 
      @openAuth="authorizationSidebarOpened=true"
      :me="me"
    />
    <router-view :initialCategoriesArray="initialCategoriesArray"/>
    <service-footer
        :productColumns="footerProducts"
        :columnTitles="['Most viewed products','On sale Products','Top Rated Products']"
    />
    <auth-sidebar :opened="authorizationSidebarOpened" @close="authorizationSidebarOpened=false"/>
  </div>
</template>

<script>
import ServiceHeader from '@/App/_shared/components/ServiceHeader'
import ServiceFooter from "@/App/_shared/components/ServiceFooter"
import Categories from "@/App/_shared/services/Categories"
import Products from "@/App/_shared/services/Products";
import AuthSidebar from "@/App/_shared/components/AuthSidebar";
import AuthService from "@/App/_shared/services/Auth"
import Auth from "@/App/_shared/utils/Auth";

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
    const mostViewedProducts = await Products.fetchProducts(3, null, 'popularity');
    const discountedProducts = await Products.fetchProducts(3, null, 'discount');
    const topRatedProducts = await Products.fetchProducts(3, null, 'average_rating');
    popularProducts.push(mostViewedProducts, discountedProducts, topRatedProducts)

    next(vm => {
      vm.categories = categories;
      vm.footerProducts = popularProducts
    })
  },
  async mounted(){
    const auth = new Auth()
    const authValidation = auth.validate()

    if(authValidation.accessTokenValid && authValidation.refreshTokenValid) {
      this.me = await AuthService.getMe(auth.getToken())
    } else if (!authValidation.accessTokenValid && authValidation.refreshTokenValid) {
      const tokensRefreshed = await auth.refreshAccessToken()
      if(!tokensRefreshed){
        auth.logOut()
      }
    } else {
      auth.logOut()
    }
  },
  data: () => ({
    categories: null,
    productColumns: null,
    footerProducts: null,
    authorizationSidebarOpened: false,
    me: null
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