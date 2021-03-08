<template>
  <main id="content" role="main">
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">FAQ</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mb-12 text-center">
        <h1>Frequently Asked Questions</h1>
        <p class="text-gray-44">This Agreement was last modified on 18th february 2019</p>
      </div>
      <div class="border-bottom border-color-1 mb-8 rounded-0">
        <h3 class="section-title mb-0 pb-2 font-size-25">Shipping Information</h3>
      </div>
      <div class="row mb-8">
        <div class="col-lg-6 mb-5 mb-lg-8">
          <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">What Shipping Methods Are Available?</h3>
          <p class="text-gray-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id,
            blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at,
            eleifend a tortor.</p>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-8">
          <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">How Long Will it Take To Get My Package?</h3>
          <p class="text-gray-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id,
            blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at,
            eleifend a tortor.</p>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-8">
          <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">How Do I Track My Order?</h3>
          <p class="text-gray-90">Integer ex turpis, venenatis vitae nibh vel, vestibulum maximus quam. Ut pretium orci ac vestibulum porttitor.
            Fusce tempus diam quis justo porttitor gravida.</p>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-8">
          <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">Do I Need A Account To Place Order?</h3>
          <p class="text-gray-90">Integer ex turpis, venenatis vitae nibh vel, vestibulum maximus quam. Ut pretium orci ac vestibulum porttitor.
            Fusce tempus diam quis justo porttitor gravida.</p>
        </div>
      </div>
      <div id="basicsAccordion" class="mb-12">
        <div v-for="(item, i) of items" :key="i" class="card mb-3 border-top-0 border-left-0 border-right-0 border-color-1 rounded-0">
          <div class="card-header card-collapse bg-transparent-on-hover border-0" id="basicsHeadingFive">
            <h5 class="mb-0">
              <button type="button"
                      class="px-0 btn btn-link btn-block d-flex justify-content-between card-btn  py-3 font-size-25 border-0"
                      :class="{'collapsed': item.state}"
                      data-toggle="collapse"
                      data-target="#basicsCollapseFive"
                      :aria-expanded="Boolean(item.state)"
                      aria-controls="basicsCollapseFive"
                      @click="item.state = !item.state"
              >
                {{ item.title }}

                <span class="card-btn-arrow">
                  <i class="fas fa-chevron-down text-gray-90 font-size-18"></i>
                </span>
              </button>
            </h5>
          </div>
          <div id="basicsCollapseFive" class="collapse"
               :class="{'show': item.state}"
               aria-labelledby="basicsHeadingFive"
               data-parent="#basicsAccordion">
            <div class="card-body pl-0 pb-8">
              <p class="mb-0">In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo.
                Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis
                eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc
                augue. Suspendisse finibus in dolor eget volutpat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'What Shipping Methods Are Available?',
        state: 1
      },
      {
        title: 'How Long Will it Take To Get My Package?',
        state: 0
      },
      {
        title: 'How Do I Track My Order?',
        state: 0
      },
      {
        title: 'How Do I Place an Order?',
        state: 0
      },
      {
        title: 'How Should I to Contact if I Have Any Queries?',
        state: 0
      },
      {
        title: 'Do I Need an Account to Place an Order?',
        state: 0
      }
    ]
  })
};
</script>