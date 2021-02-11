<template>
  <header id="header" class="u-header u-header-left-aligned-nav">
    <div class="u-header__section">
      <header-navigation />
      <header-search-bar :categories="categories"/>
    </div>
  </header>
</template>

<script>
import HeaderNavigation from "./../HeaderNavigation"
import HeaderSearchBar from "./../HeaderSearchBar"

export default {
  components: {
    'header-navigation': HeaderNavigation,
    'header-search-bar': HeaderSearchBar
  },
  props: {
    categories: {
      type: Array,
      default: null
    }
  }
};
</script>
