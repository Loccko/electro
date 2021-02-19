<template>
  <div class="mb-6">
    <filters-group v-for="(filters,i) of 5" :key="i" :title="'cat-filter-'+i"/>
  </div>
</template>

<script>
import FiltersGroup from "@/App/Showcase/_shared/FiltersGroup"

export default {
  components: {
    "filters-group": FiltersGroup
  },
  props: {
    categoryFilter: Array
  }
}
</script>

<style></style>