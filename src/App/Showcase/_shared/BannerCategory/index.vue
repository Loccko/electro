<template>
  <div class="col-md-6 mb-4 mb-xl-0 col-wd-4">
    <router-link :to="`/category/${category.id}`" class="d-black text-gray-90">
      <div
        class="min-height-166 py-1 py-xl-2 py-wd-4 d-flex bg-gray-1 align-items-center"
      >
        <div class="col-6 col-xl-7 col-wd-6 pr-0">
          <img
            class="img-fluid"
            :src="category.images.size212x305.link"
            alt="Image Description"
          />
        </div>
        <div class="col-6 col-xl-5 col-wd-6 pr-xl-4 pr-wd-3">
          <div
            class="mb-2 pb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23"
          >
            CATCH BIG <strong>DEALS</strong> ON THE {{ category.title }}
          </div>
          <div class="link text-gray-90 font-weight-bold font-size-15" href="#">
            Shop now
            <span class="link__icon ml-1">
              <span class="link__icon-inner"
                ><i class="ec ec-arrow-right-categproes"></i
              ></span>
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      required: true
    }
  },
};
</script>

<style></style>
