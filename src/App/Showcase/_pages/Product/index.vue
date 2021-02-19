<template>
  <main id="content" role="main">
    <!-- breadcrumb -->
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <!-- breadcrumb -->
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol
              class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble"
            >
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="../home/index.html">Home</a>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="../shop/shop.html">Accessories</a>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="../shop/shop.html">Headphones</a>
              </li>
              <li
                class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                aria-current="page"
              >
                {{ product ? product.title : "" }}
              </li>
            </ol>
          </nav>
        </div>
        <!-- End breadcrumb -->
      </div>
    </div>
    <!-- End breadcrumb -->

    <div class="container">
      <!-- Single Product Body -->
      <div class="mb-14">
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-5 mb-4 mb-md-0">
            <VueSlickCarousel
              :arrows="true"
              id="sliderSyncingNav"
              class="js-slick-carousel u-slick mb-2 slick-initialized slick-slider"
              ref="carousel"
            >
              <!--
              <div
                class="js-prev d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle fas fa-arrow-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-lg-2 ml-xl-4 slick-arrow"
                style=""
              ></div>
            -->
              <div
                class="js-slide slick-slide slick-cloned"
                data-slick-index="-1"
                aria-hidden="true"
                style="width: 470px"
                tabindex="-1"
                v-for="(slide, p) of mainCarouselImages"
                :key="p"
              >
                <img class="img-fluid" :src="slide" alt="Image Description" />
              </div>

              <!--
              <div
                class="js-next d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle fas fa-arrow-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-lg-2 mr-xl-4 slick-arrow"
                style=""
              ></div>
              -->
            </VueSlickCarousel>

            <div
              id="sliderSyncingThumb"
              class="js-slick-carousel u-slick u-slick--slider-syncing u-slick--slider-syncing-size u-slick--gutters-1 u-slick--transform-off slick-initialized slick-slider slick-transform-off"
              data-infinite="true"
              data-slides-show="5"
              data-is-thumbs="true"
              data-nav-for="#sliderSyncingNav"
            >
              <div class="slick-list draggable">
                <div
                  class="slick-track"
                  style="
                    opacity: 1;
                    width: 480px;
                    transform: translate3d(0px, 0px, 0px);
                  "
                >
                  <div
                    class="js-slide slick-slide slick-active"
                    style="cursor: pointer; width: 88px; height: auto"
                    tabindex="0"
                    v-for="(slide, k) of mainCarouselImages"
                    :key="k"
                    :class="{ 'slick-current': mainCarouselActiveIndex == k }"
                    @click="changeSlide(k)"
                  >
                    <img
                      class="img-fluid"
                      :src="slide"
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4 mb-md-6 mb-lg-0">
            <div class="mb-2">
              <a href="#" class="font-size-12 text-gray-5 mb-2 d-inline-block"
                >Headphones</a
              >
              <h2 class="font-size-25 text-lh-1dot2">
                {{ product ? product.title : "" }}
              </h2>
              <div class="mb-2">
                <a
                  class="d-inline-flex align-items-center small font-size-15 text-lh-1"
                  href="#"
                >
                  <div class="text-warning mr-2">
                    <small
                      class="fas fa-star"
                      v-for="star of 5"
                      :key="star"
                      :class="{ 'text-muted': star > product.averageRating }"
                    ></small>
                  </div>
                  <span class="text-secondary font-size-13"
                    >({{ product.overview.length }} customer reviews)</span
                  >
                </a>
              </div>
              <a href="#" class="d-inline-block max-width-150 ml-n2 mb-2"
                ><img
                  class="img-fluid"
                  src="@/assets/img/200X60/img1.png"
                  alt="Image Description"
              /></a>
              <div class="mb-2">
                <ul class="font-size-14 pl-3 ml-1 text-gray-110">
                  <li v-for="(feature, j) of product.keyFeatures" :key="j">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p><strong>SKU</strong>: {{ product.sku }}</p>
            </div>
          </div>
          <div class="mx-md-auto mx-lg-0 col-md-6 col-lg-4 col-xl-3">
            <div class="mb-2">
              <div
                class="card p-5 border-width-2 border-color-1 borders-radius-17"
              >
                <div
                  class="text-gray-9 font-size-14 pb-2 border-color-1 border-bottom mb-3"
                >
                  Availability:
                  <span class="text-green font-weight-bold"
                    >{{ product.amount }} in stock</span
                  >
                </div>
                <div class="mb-3">
                  <div class="font-size-36">${{ product.price }}</div>
                </div>
                <div class="mb-3">
                  <h6 class="font-size-14">Quantity</h6>
                  <!-- Quantity -->
                  <div
                    class="border rounded-pill py-1 w-md-60 height-35 px-3 border-color-1"
                  >
                    <div class="js-quantity row align-items-center">
                      <div class="col">
                        <input
                          class="js-result form-control h-auto border-0 rounded p-0 shadow-none"
                          type="text"
                          v-model.number="count"
                        />
                      </div>
                      <div class="col-auto pr-1">
                        <a class="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" @click="count--">
                          <small class="fas fa-minus btn-icon__inner"></small>
                        </a>
                        <a class="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" @click="count++">
                          <small class="fas fa-plus btn-icon__inner"></small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- End Quantity -->
                </div>

                <div class="mb-2 pb-0dot5">
                  <a href="#" class="btn btn-block btn-primary-dark"
                    ><i class="ec ec-add-to-cart mr-2 font-size-20"></i> Add to
                    Cart</a
                  >
                </div>
                <div class="mb-3">
                  <a href="#" class="btn btn-block btn-dark">Buy Now</a>
                </div>
                <div class="flex-content-center flex-wrap">
                  <a href="#" class="text-gray-6 font-size-13 mr-2"
                    ><i class="ec ec-favorites mr-1 font-size-15"></i>
                    Wishlist</a
                  >
                  <a href="#" class="text-gray-6 font-size-13 ml-2"
                    ><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Single Product Body -->
    </div>

    <div class="bg-gray-7 pt-6 pb-3 mb-6">
      <div class="container">
        <div class="js-scroll-nav">
          <div class="bg-white pt-4 pb-6 px-xl-11 px-md-5 px-4 mb-6 overflow-hidden" v-if="product.overview && product.overview.length>0">
            <div id="Description" class="mx-md-2 active">
              <div class="position-relative mb-6">
                <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link active" href="#Description">
                      <div class="d-md-flex justify-content-md-center align-items-md-center" v-if="product.overview && product.overview.length>0">
                        Description
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Specification">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Specification
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Reviews">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Reviews
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mx-md-4 pt-1" v-if="product.overview && product.overview.length>0">
                <p v-for="(elem, i) of product.overview" :key="i">{{ elem }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
            <div id="Specification" class="mx-md-2 active">
              <div class="position-relative mb-6">
                <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2" v-if="product.overview && product.overview.length>0">
                    <a class="nav-link" href="#Description">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Description
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link active" href="#Specification">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Specification
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Reviews">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Reviews
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mx-md-5 pt-1">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr v-for="(item, m) of product.description" :key="m" style="border-bottom: 1px solid #ecedf2;">
                        <th class="px-4 px-xl-5 border-top-0">
                          {{ item.name }}
                        </th>
                        <td class="border-top-0">{{ item.text }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white py-4 px-xl-11 px-md-5 px-4 mb-6">
            <div id="Reviews" class="mx-md-2">
              <div class="position-relative mb-6">
                <ul class="nav nav-classic nav-tab nav-tab-lg justify-content-xl-center mb-6 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble border-lg-down-bottom-0 pb-1 pb-xl-0 mb-n1 mb-xl-0">
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2" v-if="product.overview && product.overview.length>0">
                    <a class="nav-link" href="#Description">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Description
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link" href="#Specification">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Specification
                      </div>
                    </a>
                  </li>
                  <li class="nav-item flex-shrink-0 flex-xl-shrink-1 z-index-2">
                    <a class="nav-link active" href="#Reviews">
                      <div
                        class="d-md-flex justify-content-md-center align-items-md-center"
                      >
                        Reviews
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-4 px-lg-4">
                <div class="row mb-8">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <h3 class="font-size-18 mb-6">Based on {{ product && product.comments.length>0 ? product.comments.length : 0 }} reviews</h3>
                      <h2 class="font-size-30 font-weight-bold text-lh-1 mb-0">
                        {{ product.averageRating }}
                      </h2>
                      <div class="text-lh-1">overall</div>
                    </div>

                    <!-- Ratings -->
                    <ul class="list-unstyled">
                      <li class="py-1" v-for="rate in [5,4,3,2,1]" :key="rate">
                        <a class="row align-items-center mx-gutters-2 font-size-1">
                          <div class="col-auto mb-2 mb-md-0">
                            <div class="text-warning text-ls-n2 font-size-16" style="width: 80px">
                              <small 
                                class="fas fa-star"
                                v-for="star of 5" 
                                :key="star"
                                :class="{'text-muted':star > rate}"
                              ></small>
                            </div>
                          </div>
                          <div class="col-auto mb-2 mb-md-0">
                            <div
                              class="progress ml-xl-5"
                              style="height: 10px; width: 200px"
                            >
                              <div
                                class="progress-bar"
                                role="progressbar"
                                :style="`width: ${getProgressBarWidth(rate)}%`"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div class="col-auto text-right">
                            <span class="text-gray-90">{{ commentsRating[rate] }}</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <!-- End Ratings -->
                  </div>
                  <div class="col-md-6">
                    <h3 class="font-size-18 mb-5">Add a review</h3>
                    <!-- Form -->
                    <form class="js-validate" novalidate="novalidate">
                      <div class="row align-items-center mb-4">
                        <div class="col-md-4 col-lg-3">
                          <label for="rating" class="form-label mb-0"
                            >Your Review</label
                          >
                        </div>
                        <div class="col-md-8 col-lg-9">
                          <a class="d-block">
                            <div class="text-warning text-ls-n2 font-size-16">
                              <small 
                                class="fas fa-star" 
                                v-for="star of 5" 
                                :key="star"
                                :class="{'text-muted': star > hoveredRating && star > selectedRating}"
                                @click="selectedRating = star"
                                @mouseover="hoveredRating = star"
                                @mouseleave="hoveredRating = 0"
                              ></small>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="js-form-message form-group mb-3 row">
                        <div class="col-md-4 col-lg-3">
                          <label for="descriptionTextarea" class="form-label"
                            >Your Review</label
                          >
                        </div>
                        <div class="col-md-8 col-lg-9">
                          <textarea
                            class="form-control"
                            rows="3"
                            id="descriptionTextarea"
                            data-msg="Please enter your message."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            v-model="description"
                          ></textarea>
                        </div>
                      </div>
                      <div class="js-form-message form-group mb-3 row">
                        <div class="col-md-4 col-lg-3">
                          <label for="inputName" class="form-label"
                            >Name <span class="text-danger">*</span></label
                          >
                        </div>
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="inputName"
                            aria-label="Alex Hecker"
                            required=""
                            data-msg="Please enter your name."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            v-model="name"
                          />
                        </div>
                      </div>
                      <div class="js-form-message form-group mb-3 row">
                        <div class="col-md-4 col-lg-3">
                          <label for="emailAddress" class="form-label"
                            >Email <span class="text-danger">*</span></label
                          >
                        </div>
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="email"
                            class="form-control"
                            name="emailAddress"
                            id="emailAddress"
                            aria-label="alexhecker@pixeel.com"
                            required=""
                            data-msg="Please enter a valid email address."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            v-model="email"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="offset-md-4 offset-lg-3 col-auto">
                          <button
                            type="submit"
                            class="btn btn-primary-dark btn-wide transition-3d-hover"
                          >
                            Add Review
                          </button>
                        </div>
                      </div>
                    </form>
                    <!-- End Form -->
                  </div>
                </div>

                <div
                  class="border-bottom border-color-1 pb-4 mb-4" 
                  v-for="(comment, j) of product.comments" 
                  :key="j"
                >
                  <div class="d-flex justify-content-between align-items-center text-secondary font-size-1 mb-2">
                    <div
                      class="text-warning text-ls-n2 font-size-16"
                      style="width: 80px"
                    >
                      <small 
                        class="fas fa-star" 
                        :class="{'text-muted': star > comment.rating }" 
                        v-for="star of 5" 
                        :key="star"
                      ></small>
                    </div>
                  </div>
                  <p class="text-gray-90">
                    {{ comment.text }}
                  </p>
                  <div class="mb-2">
                    <strong>{{ comment.author.data.firstName + " " +comment.author.data.lastName}}</strong>
                    <span class="font-size-13 text-gray-23">
                      - {{ comment.createdAt | moment("MMMM D, YYYY")}}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mb-6">
        <div
          class="d-flex justify-content-between align-items-center border-bottom border-color-1 flex-lg-nowrap flex-wrap mb-4"
        >
          <h3 class="section-title mb-0 pb-2 font-size-22">Related products</h3>
        </div>
        <ul class="row list-unstyled products-group no-gutters">
          <li class="col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item">
            <div class="product-item__outer h-100">
              <div class="product-item__inner px-xl-4 p-3">
                <div class="product-item__body pb-xl-2">
                  <div class="mb-2">
                    <a
                      href="../shop/product-categories-7-column-full-width.html"
                      class="font-size-12 text-gray-5"
                      >Speakers</a
                    >
                  </div>
                  <h5 class="mb-1 product-item__title">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="text-blue font-weight-bold"
                      >Wireless Audio System Multiroom 360 degree Full base
                      audio</a
                    >
                  </h5>
                  <div class="mb-2">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="d-block text-center"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/212X200/img1.jpg"
                        alt="Image Description"
                    /></a>
                  </div>
                  <div class="flex-center-between mb-1">
                    <div class="prodcut-price">
                      <div class="text-gray-100">$685,00</div>
                    </div>
                    <div class="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        class="btn-add-cart btn-primary transition-3d-hover"
                        ><i class="ec ec-add-to-cart"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top pt-2 flex-center-between flex-wrap">
                    <a
                      href="../shop/compare.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-compare mr-1 font-size-15"></i>
                      Compare</a
                    >
                    <a
                      href="../shop/wishlist.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-favorites mr-1 font-size-15"></i>
                      Wishlist</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item">
            <div class="product-item__outer h-100">
              <div class="product-item__inner px-xl-4 p-3">
                <div class="product-item__body pb-xl-2">
                  <div class="mb-2">
                    <a
                      href="../shop/product-categories-7-column-full-width.html"
                      class="font-size-12 text-gray-5"
                      >Speakers</a
                    >
                  </div>
                  <h5 class="mb-1 product-item__title">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="text-blue font-weight-bold"
                      >Tablet White EliteBook Revolve 810 G2</a
                    >
                  </h5>
                  <div class="mb-2">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="d-block text-center"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/212X200/img2.jpg"
                        alt="Image Description"
                    /></a>
                  </div>
                  <div class="flex-center-between mb-1">
                    <div
                      class="prodcut-price d-flex align-items-center position-relative"
                    >
                      <ins class="font-size-20 text-red text-decoration-none"
                        >$1999,00</ins
                      >
                      <del
                        class="font-size-12 tex-gray-6 position-absolute bottom-100"
                        >$2 299,00</del
                      >
                    </div>
                    <div class="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        class="btn-add-cart btn-primary transition-3d-hover"
                        ><i class="ec ec-add-to-cart"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top pt-2 flex-center-between flex-wrap">
                    <a
                      href="../shop/compare.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-compare mr-1 font-size-15"></i>
                      Compare</a
                    >
                    <a
                      href="../shop/wishlist.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-favorites mr-1 font-size-15"></i>
                      Wishlist</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item">
            <div class="product-item__outer h-100">
              <div class="product-item__inner px-xl-4 p-3">
                <div class="product-item__body pb-xl-2">
                  <div class="mb-2">
                    <a
                      href="../shop/product-categories-7-column-full-width.html"
                      class="font-size-12 text-gray-5"
                      >Speakers</a
                    >
                  </div>
                  <h5 class="mb-1 product-item__title">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="text-blue font-weight-bold"
                      >Purple Solo 2 Wireless</a
                    >
                  </h5>
                  <div class="mb-2">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="d-block text-center"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/212X200/img3.jpg"
                        alt="Image Description"
                    /></a>
                  </div>
                  <div class="flex-center-between mb-1">
                    <div class="prodcut-price">
                      <div class="text-gray-100">$685,00</div>
                    </div>
                    <div class="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        class="btn-add-cart btn-primary transition-3d-hover"
                        ><i class="ec ec-add-to-cart"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top pt-2 flex-center-between flex-wrap">
                    <a
                      href="../shop/compare.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-compare mr-1 font-size-15"></i>
                      Compare</a
                    >
                    <a
                      href="../shop/wishlist.html"
                      class="text-gray-6 font-size-13"
                    >
                      <i class="ec ec-favorites mr-1 font-size-15"></i>
                      Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item remove-divider-md-lg"
          >
            <div class="product-item__outer h-100">
              <div class="product-item__inner px-xl-4 p-3">
                <div class="product-item__body pb-xl-2">
                  <div class="mb-2">
                    <a
                      href="../shop/product-categories-7-column-full-width.html"
                      class="font-size-12 text-gray-5"
                      >Speakers</a
                    >
                  </div>
                  <h5 class="mb-1 product-item__title">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="text-blue font-weight-bold"
                      >Smartphone 6S 32GB LTE</a
                    >
                  </h5>
                  <div class="mb-2">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="d-block text-center"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/212X200/img4.jpg"
                        alt="Image Description"
                    /></a>
                  </div>
                  <div class="flex-center-between mb-1">
                    <div class="prodcut-price">
                      <div class="text-gray-100">$685,00</div>
                    </div>
                    <div class="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        class="btn-add-cart btn-primary transition-3d-hover"
                        ><i class="ec ec-add-to-cart"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top pt-2 flex-center-between flex-wrap">
                    <a
                      href="../shop/compare.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-compare mr-1 font-size-15"></i>
                      Compare</a
                    >
                    <a
                      href="../shop/wishlist.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-favorites mr-1 font-size-15"></i>
                      Wishlist</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item remove-divider-xl"
          >
            <div class="product-item__outer h-100">
              <div class="product-item__inner px-xl-4 p-3">
                <div class="product-item__body pb-xl-2">
                  <div class="mb-2">
                    <a
                      href="../shop/product-categories-7-column-full-width.html"
                      class="font-size-12 text-gray-5"
                      >Speakers</a
                    >
                  </div>
                  <h5 class="mb-1 product-item__title">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="text-blue font-weight-bold"
                      >Widescreen NX Mini F1 SMART NX</a
                    >
                  </h5>
                  <div class="mb-2">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="d-block text-center"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/212X200/img5.jpg"
                        alt="Image Description"
                    /></a>
                  </div>
                  <div class="flex-center-between mb-1">
                    <div class="prodcut-price">
                      <div class="text-gray-100">$685,00</div>
                    </div>
                    <div class="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        class="btn-add-cart btn-primary transition-3d-hover"
                        ><i class="ec ec-add-to-cart"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top pt-2 flex-center-between flex-wrap">
                    <a
                      href="../shop/compare.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-compare mr-1 font-size-15"></i>
                      Compare</a
                    >
                    <a
                      href="../shop/wishlist.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-favorites mr-1 font-size-15"></i>
                      Wishlist</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="col-6 col-md-3 col-xl-2gdot4-only col-wd-2 product-item remove-divider-wd d-xl-none d-wd-block"
          >
            <div class="product-item__outer h-100">
              <div class="product-item__inner px-xl-4 p-3">
                <div class="product-item__body pb-xl-2">
                  <div class="mb-2">
                    <a
                      href="../shop/product-categories-7-column-full-width.html"
                      class="font-size-12 text-gray-5"
                      >Speakers</a
                    >
                  </div>
                  <h5 class="mb-1 product-item__title">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="text-blue font-weight-bold"
                      >Tablet White EliteBook Revolve 810 G2</a
                    >
                  </h5>
                  <div class="mb-2">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      class="d-block text-center"
                      ><img
                        class="img-fluid"
                        src="@/assets/img/212X200/img2.jpg"
                        alt="Image Description"
                    /></a>
                  </div>
                  <div class="flex-center-between mb-1">
                    <div
                      class="prodcut-price d-flex align-items-center position-relative"
                    >
                      <ins class="font-size-20 text-red text-decoration-none"
                        >$1999,00</ins
                      >
                      <del
                        class="font-size-12 tex-gray-6 position-absolute bottom-100"
                        >$2 299,00</del
                      >
                    </div>
                    <div class="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        class="btn-add-cart btn-primary transition-3d-hover"
                        ><i class="ec ec-add-to-cart"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="product-item__footer">
                  <div class="border-top pt-2 flex-center-between flex-wrap">
                    <a
                      href="../shop/compare.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-compare mr-1 font-size-15"></i>
                      Compare</a
                    >
                    <a
                      href="../shop/wishlist.html"
                      class="text-gray-6 font-size-13"
                      ><i class="ec ec-favorites mr-1 font-size-15"></i>
                      Wishlist</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- End Related products -->
      <!-- Brand Carousel -->
      <div class="mb-8">
        <div class="py-2 border-top border-bottom">
          <div
            class="js-prev d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9 slick-arrow slick-disabled"
            aria-disabled="true"
            style=""
          ></div>
          <div class="slick-list draggable">
            <div
              class="slick-track"
              style="
                opacity: 1;
                width: 1404px;
                transform: translate3d(0px, 0px, 0px);
              "
            >
              <div
                class="js-slide slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                style="width: 234px; height: auto"
                tabindex="0"
              >
                <a href="#" class="link-hover__brand" tabindex="0">
                  <img
                    class="img-fluid m-auto max-height-50"
                    src="@/assets/img/200X60/img1.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div
                class="js-slide slick-slide slick-active"
                data-slick-index="1"
                aria-hidden="false"
                style="width: 234px; height: auto"
                tabindex="0"
              >
                <a href="#" class="link-hover__brand" tabindex="0">
                  <img
                    class="img-fluid m-auto max-height-50"
                    src="@/assets/img/200X60/img2.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div
                class="js-slide slick-slide slick-active"
                data-slick-index="2"
                aria-hidden="false"
                style="width: 234px; height: auto"
                tabindex="0"
              >
                <a href="#" class="link-hover__brand" tabindex="0">
                  <img
                    class="img-fluid m-auto max-height-50"
                    src="@/assets/img/200X60/img3.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div
                class="js-slide slick-slide slick-active"
                data-slick-index="3"
                aria-hidden="false"
                style="width: 234px; height: auto"
                tabindex="0"
              >
                <a href="#" class="link-hover__brand" tabindex="0">
                  <img
                    class="img-fluid m-auto max-height-50"
                    src="@/assets/img/200X60/img4.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div
                class="js-slide slick-slide slick-active"
                data-slick-index="4"
                aria-hidden="false"
                style="width: 234px; height: auto"
                tabindex="0"
              >
                <a href="#" class="link-hover__brand" tabindex="0">
                  <img
                    class="img-fluid m-auto max-height-50"
                    src="@/assets/img/200X60/img5.png"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div
                class="js-slide slick-slide"
                data-slick-index="5"
                aria-hidden="true"
                style="width: 234px; height: auto"
                tabindex="-1"
              >
                <a href="#" class="link-hover__brand" tabindex="-1">
                  <img
                    class="img-fluid m-auto max-height-50"
                    src="@/assets/img/200X60/img6.png"
                    alt="Image Description"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            class="js-next d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y fa fa-angle-right u-slick__arrow-classic-inner--right slick-arrow"
            style=""
            aria-disabled="false"
          ></div>
        </div>
      </div>
      <!-- End Brand Carousel -->
    </div>
  </main>
</template>

<script>
import Products from "@/App/_shared/services/Products";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import mutations from "@/App/_shared/services/mutations";


export default {
  components: { VueSlickCarousel },
  async beforeRouteEnter(to, from, next) {
    const product = await Products.fetchProduct(to.params.id);
    let commentsRating = {
      "5": 0,
      "4": 0,
      "3": 0,
      "2": 0,
      "1": 0
    }
    if(product.comments && product.comments.length>0){
      product.comments.forEach(comment => {
        commentsRating[comment.rating]++
      });
    }
    next((vm) => {
      vm.product = product;
      vm.commentsRating = commentsRating
    });
  },
  data: () => ({
    product: null,
    mainCarouselActiveIndex: 0,
    count: 1,
    commentsRating: null,
    hoveredRating: 0,
    selectedRating: null,
    description: null,
    name: null,
    email: null
  }),
  computed: {
    mainCarouselImages() {
      return this.product && this.product.images ? this.product.images.size720x660.map((image) => image.link): [];
    },
  },
  async mounted() {
    await mutations.addItemToRecentlyViewedProducts(this.product.id);
    await mutations.increaseProductViews(this.product.id);
  },
  methods: {
    changeSlide(index) {
      this.mainCarouselActiveIndex = index;
      this.$refs.carousel.goTo(index);
    },
    getCommentDate(date){
      const dateObj = new Date(date)
      return dateObj
    },
    getProgressBarWidth(index){
      let totallCount = 0
      for (const iterator in this.commentsRating) {
        totallCount += this.commentsRating[iterator]
      }
      return (this.commentsRating[index]/totallCount) * 100
    }
  },
};
</script>

<style
  scoped
  lang="scss"
  src="./style.scss"
></style>