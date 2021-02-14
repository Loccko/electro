<template>
  <div>
    <service-header :categories="categories"/>
    <router-view  class="wwww" :initialCategoriesArray="initialCategoriesArray"/>
    <service-footer 
      :productColumns="fotterProducts"
      :columnTitles="['Featured Products','Onsale Products','Top Rated Products']"
    />
  </div>
</template>

<script>
import ServiceHeader from '@/App/_shared/components/ServiceHeader'
import ServiceFooter from "@/App/_shared/components/ServiceFooter"
import Categories from "@/App/_shared/services/Categories"
import LatestProducts from "@/App/_shared/services/LatestProducts";

export default {
  name:'Generall-App-Wrapper',
  components: {
    'service-header': ServiceHeader,
    'service-footer':ServiceFooter
  },
  async beforeRouteEnter(to, from, next){
    const categories = await Categories.fetchCategories()
    let popularProducts = []
    const popularityProducts = await LatestProducts.fetchLatestProducts(3, 'popularity');
    const topRatedProducts = await LatestProducts.fetchLatestProducts(3, 'average_rating');
    const discountedProducts = await LatestProducts.fetchLatestProducts(3, 'discount');
    popularProducts.push(popularityProducts,topRatedProducts,discountedProducts)

    next(vm => {
      vm.categories = categories;
      vm.fotterProducts = popularProducts
    })
  },
  data:()=>({
    categories: null,
    productColumns: null,
    fotterProducts: null
  }),
  computed: {
    initialCategoriesArray(){
      if(this.categories && this.categories.length>0) {
        return this.categories
      }
      return null
    }
  }
};
</script>