<template>
  <div class="max-width-270 min-width-270 pt-xl-13 mt-xl-13">
    <!-- Image Banner -->
    <aside class="mb-8">
      <a href="../shop/shop.html" class="d-block">
        <img class="img-fluid" src="https://transvelo.github.io/electro-html/2.0/assets/img/270X428/img1.jpg" alt="Image Description">
      </a>
    </aside>
    <!-- End Image Banner -->
    <!-- Latest Products -->
    <aside class="mb-4">
      <!-- Wrapper Latest Products -->
      <div class="mb-2 position-relative">
        <latest-products :items="latestProducts"/>
      </div>
      <!-- End Wrapper Latest Products -->
    </aside>
    <!-- End Latest Products -->
    <!-- Feature List -->
    <aside class="mb-8">
      <div class="d-flex justify-content-center rounded border mb-4">
        <div class="px-4 py-6 w-100">
          <!-- Feature List -->
          <div class="media px-3 mb-4 pb-4 border-bottom" href="#">
            <div class="u-avatar mr-2">
              <i class="text-primary ec ec-transport font-size-46"></i>
            </div>
            <div class="media-body text-center">
              <span class="d-block font-weight-bold text-dark">Free Delivery</span>
              <div class=" text-secondary">from $50</div>
            </div>
          </div>
          <!-- End Feature List -->

          <!-- Feature List -->
          <div class="media px-3 mb-4 pb-4 border-bottom" href="#">
            <div class="u-avatar mr-2">
              <i class="text-primary ec ec-customers font-size-56"></i>
            </div>
            <div class="media-body text-center">
              <span class="d-block font-weight-bold text-dark">99 % Customer</span>
              <div class=" text-secondary">Feedbacks</div>
            </div>
          </div>
          <!-- End Feature List -->

          <!-- Feature List -->
          <div class="media px-3 mb-4 pb-4 border-bottom" href="#">
            <div class="u-avatar mr-2">
              <i class="text-primary ec ec-returning font-size-46"></i>
            </div>
            <div class="media-body text-center">
              <span class="d-block font-weight-bold text-dark">365 Days</span>
              <div class=" text-secondary">for free return</div>
            </div>
          </div>
          <!-- End Feature List -->

          <!-- Feature List -->
          <div class="media px-3 mb-4 pb-4 border-bottom" href="#">
            <div class="u-avatar mr-2">
              <i class="text-primary ec ec-payment font-size-46"></i>
            </div>
            <div class="media-body text-center">
              <span class="d-block font-weight-bold text-dark">Payment</span>
              <div class=" text-secondary">Secure System</div>
            </div>
          </div>
          <!-- End Feature List -->

          <!-- Feature List -->
          <div class="media px-3" href="#">
            <div class="u-avatar mr-2">
              <i class="text-primary ec ec-tag font-size-46"></i>
            </div>
            <div class="media-body text-center">
              <span class="d-block font-weight-bold text-dark">Only Best</span>
              <div class=" text-secondary">Brands</div>
            </div>
          </div>
          <!-- End Feature List -->
        </div>
      </div>
    </aside>
    <!-- End Feature List -->
    <!-- Feature Product -->
    <aside class="mb-8">
      <!-- Featured Products -->
      <div class="position-relative">
        <div class="border-bottom border-color-1 mb-2">
          <h3 class="section-title mb-0 pb-3 font-size-18">Featured Products</h3>
        </div>
        <div class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble slick-initialized slick-slider"
             data-slides-show="1" data-slides-scroll="1" data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
             data-arrow-left-classes="fa fa-angle-left right-1" data-arrow-right-classes="fa fa-angle-right right-0">
          <div class="js-prev position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-left right-1 slick-arrow slick-disabled"
               aria-disabled="true" style=""></div>
          <div class="slick-list draggable">
            <div class="slick-track" style="opacity: 1; width: 2430px; transform: translate3d(0px, 0px, 0px);">
              <div class="js-slide products-group slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                   style="width: 270px; height: auto;" tabindex="0">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="0"><img class="img-fluid"
                                                                                                                        src="@/assets/img/212X200/img1.jpg"
                                                                                                                        alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5" tabindex="0">Speakers</a>
                        </div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="0">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="1" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img2.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="2" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img3.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="3" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img4.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="4" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img5.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="5" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img6.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="6" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img7.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="7" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img1.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="js-slide products-group slick-slide" data-slick-index="8" aria-hidden="true" style="width: 270px; height: auto;"
                   tabindex="-1">
                <div class="product-item remove-divider text-center">
                  <div class="product-item__outer h-100">
                    <div class="product-item__inner remove-prodcut-hover px-wd-4 p-2 p-md-3">
                      <div class="product-item__body pb-xl-2">
                        <div class="mb-2">
                          <a href="../shop/single-product-fullwidth.html" class="d-block text-center" tabindex="-1"><img class="img-fluid"
                                                                                                                         src="@/assets/img/212X200/img1.jpg"
                                                                                                                         alt="Image Description"></a>
                        </div>
                        <div class="mb-2"><a href="../shop/product-categories-7-column-full-width.html" class="font-size-12 text-gray-5"
                                             tabindex="-1">Speakers</a></div>
                        <h5 class="mb-4 product-item__title"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold"
                                                                tabindex="-1">Wireless Audio System
                          Multiroom 360 degree Full base audio</a></h5>
                        <div class="mb-1">
                          <div class="prodcut-price">
                            <div class="text-gray-100">$685,00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="js-next position-absolute top-0 font-size-17 u-slick__arrow-normal top-10 fa fa-angle-right right-0 slick-arrow" style=""
               aria-disabled="false"></div>
        </div>
      </div>
      <!-- End Featured Products -->
    </aside>
    <!-- End Feature Product -->
  </div>
</template>

<script>
import LatestProducts from "@/App/Showcase/_shared/LatestProducts"

export default {
  props: {
    latestProducts: Array
  },
  components: {
    "latest-products": LatestProducts
  }
}
</script>

<style>

</style>