<template>
  <div class="mb-6">
    <filters-group
      v-for="(filters, i) of categoryFilter"
      :key="i"
      :title="filters.name"
      :options="filters.options"
      @select="onSelect($event, i)"
    />
  </div>
</template>

<script>
import FiltersGroup from "@/App/Showcase/_shared/FiltersGroup";

export default {
  components: {
    "filters-group": FiltersGroup,
  },
  data: () => ({
    selectedOptions: [],
  }),
  beforeMount() {
    this.categoryFilter.forEach((category) => {
      this.selectedOptions.push({ name: category.name, options: [] });
    });
  },
  props: {
    categoryFilter: Array,
  },
  methods: {
    onSelect(selected, catIndex) {
      this.selectedOptions[catIndex].options = selected.map(
        (elem) => this.categoryFilter[catIndex].options[elem].name
      );
      this.$emit("select", this.selectedOptions);
    },
  },
};
</script>

<style></style>
