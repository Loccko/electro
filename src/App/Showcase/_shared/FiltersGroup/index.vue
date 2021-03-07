<template>
  <div class="border-bottom pb-4 mb-4">
    <h4 class="font-size-14 mb-3 font-weight-bold">{{ title }}</h4>
    <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1" v-for="(option, i) of options.slice(0, maxVisible)" :key="i">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="title+'-option-'+i" @change="check(option, i)"/>
        <label class="custom-control-label" :for="title+'-option-'+i">
          {{ option.name }}
          <span class="text-gray-25 font-size-12 font-weight-normal">
            ({{ option.count }})
          </span>
        </label>
      </div>
    </div>

    <!-- View More - Collapse -->
    <div class="collapse" id="collapseBrand" style="" :class="{'show': opened}">
      <div class="form-group d-flex align-items-center justify-content-between mb-2 pb-1"
           v-for="(option, j) of options.slice(maxVisible)"
           :key="j+maxVisible"
      >
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="title+'-option-'+j+maxVisible" @change="check(option, j)"/>
          <label class="custom-control-label" :for="title+'-option-'+j+maxVisible">
            {{ option.name }}
            <span class="text-gray-25 font-size-12 font-weight-normal">
              ({{ option.count }})
            </span>
          </label>
        </div>
      </div>
    </div>

    <a class="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2"
       v-if="options.length > this.maxVisible"
       data-toggle="collapse"
       @click="opened=!opened">
      <span class="link__icon text-gray-27 bg-white"><span class="link__icon-inner">+</span></span>
      <span class="link-collapse__active"> {{ opened ? "Show less" : "Show more" }}</span>
    </a>
    <!-- End Link -->
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    title: String,
    maxVisible: {
      type: Number,
      default: 6
    },
  },
  data: () => ({
    opened: false,
    selected: []
  }),
  methods: {
    check(option, index) {
      if (this.selected.indexOf(index) >= 0) {
        this.selected.splice(this.selected.indexOf(index), 1)
      } else {
        this.selected.push(index)
      }

      this.$emit('select', this.selected)
    }
  }
};
</script>

<style>
</style>