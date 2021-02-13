<template>
  <div>
    <service-header :categories="categories"/>
    <router-view  class="wwww" :initialCategoriesArray="initialCategoriesArray"/>
    <service-footer />
  </div>
</template>

<script>
import ServiceHeader from '@/App/_shared/components/ServiceHeader'
import ServiceFooter from "@/App/_shared/components/ServiceFooter"
import Categories from "@/App/_shared/services/Categories"

export default {
  name:'Generall-App-Wrapper',
  components: {
    'service-header': ServiceHeader,
    'service-footer':ServiceFooter
  },
  async beforeRouteEnter(to, from, next){
    const categories = await Categories.fetchCategories()
    console.log('cats', categories);

    next(vm => {
      vm.categories = categories
    })
  },
  data:()=>({
    categories: null
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