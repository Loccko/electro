<template>
  <div class="tab-content" id="pills-tabContent">
    <transition-group name="fade">
      <div 
        v-if="cardType===0"
        :key="0"
        class="fade pt-2 tab-pane show active" 
        id="pills-one-example1" 
        role="tabpanel" 
        aria-labelledby="pills-one-example1-tab" 
        data-target-group="groups"
      >
        <ul class="row list-unstyled products-group no-gutters">
          <li class="col-6 col-md-3 col-wd-2gdot4 product-item" v-for="product of products" :key="product.id">
            <product-card :item="product.node" :type="cardType"/>
          </li>
        </ul>
      </div>
      <div 
        v-if="cardType===1"
        :key="1"
        class="tab-pane fade pt-2 show active"
        id="pills-two-example1" 
        role="tabpanel" 
        aria-labelledby="pills-two-example1-tab" 
        data-target-group="groups"
      >
        <ul class="row list-unstyled products-group no-gutters">
          <li class="col-6 col-md-3 col-wd-2gdot4 product-item" v-for="product of products" :key="product.id">
            <product-card :item="product.node" :type="cardType"/>
          </li>
        </ul>
      </div>
      <div
        v-if="cardType===2"
        :key="2"
        class="fade tab-pane pt-2 show active"
        id="pills-three-example1" 
        role="tabpanel"
        aria-labelledby="pills-three-example1-tab" 
        data-target-group="groups"
      >
        <ul class="d-block list-unstyled products-group prodcut-list-view">
          <li class="product-item remove-divider" v-for="product of products" :key="product.id">
            <product-card :item="product.node" :type="cardType"/>
          </li>
        </ul>
      </div>
      <div
        v-if="cardType===3"
        :key="3"
        class="fade pt-2 tab-pane"
        :class="{'show active': cardType===3}"
        id="pills-four-example1" 
        role="tabpanel" 
        aria-labelledby="pills-four-example1-tab" 
        data-target-group="groups"
      >
        <ul class="d-block list-unstyled products-group prodcut-list-view-small">
          <li class="product-item remove-divider" v-for="product of products" :key="product.id">
            <product-card :item="product.node" :type="cardType"/>
          </li>
        </ul>
      </div>
    </transition-group>
  </div>
</template>

<script>
import ProductCard from "@/App/Showcase/_shared/ProductCard"

export default {
  components: {
    "product-card": ProductCard
  },
  props: {
    products: Array,
    cardType: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>