<template>
  <main id="content" role="main" class="checkout-page">
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Checkout</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mb-5">
        <h1 class="text-center">Checkout</h1>
      </div>
      <div v-if="errors" class="alert alert-primary" role="alert">{{ errors }}</div>
      <form class="js-validate" novalidate="novalidate" @submit.prevent.stop>
        <div class="row">
          <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div class="pl-lg-3 ">
              <div class="bg-gray-1 rounded-lg">
                <div class="p-4 mb-4 checkout-table">
                  <div class="border-bottom border-color-1 mb-5">
                    <h3 class="section-title mb-0 pb-2 font-size-25">Your order</h3>
                  </div>
                  <table class="table">
                    <thead>
                    <tr>
                      <th class="product-name">Product</th>
                      <th class="product-total">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, i) of cart" :key="i" class="cart_item">
                      <td>{{ item.product.title }} <strong class="product-quantity">× {{ item.amount }}</strong></td>
                      <td>${{ item.product.priceWithDiscount }}</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>Total</th>
                      <td><strong>${{ total }}</strong></td>
                    </tr>
                    </tfoot>
                  </table>

                  <div class="border-top border-width-3 border-color-1 pt-3 mb-3">
                    <div id="basicsAccordion1">
                      <div class="border-bottom border-color-1 border-dotted-bottom">
                        <div class="p-3" id="basicsHeadingOne">
                          <div class="custom-control custom-radio">
                            <input type="radio"
                                   class="custom-control-input"
                                   id="stylishRadio1"
                                   name="stylishRadio"
                                   checked
                                   @click="activeTypeIndex=0"
                            >
                            <label class="custom-control-label form-label"
                                   for="stylishRadio1"
                                   data-toggle="collapse"
                                   data-target="#basicsCollapseOnee"
                                   aria-expanded="true"
                                   aria-controls="basicsCollapseOnee">
                              Direct bank transfer
                            </label>
                          </div>
                        </div>
                        <div id="basicsCollapseOnee"
                             class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                             aria-labelledby="basicsHeadingOne"
                             data-parent="#basicsAccordion1"
                             :class="{'show': paymentType === 'bank_transfer'}"
                        >
                          <div class="p-4">
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not
                            be shipped until the funds have cleared in our account.
                          </div>
                        </div>
                      </div>

                      <div class="border-bottom border-color-1 border-dotted-bottom">
                        <div class="p-3" id="basicsHeadingThree">
                          <div class="custom-control custom-radio">
                            <input type="radio"
                                   class="custom-control-input"
                                   id="thirdstylishRadio1"
                                   name="stylishRadio"
                                   @click="paymentType = 'cash'"
                            >
                            <label class="custom-control-label form-label"
                                   for="thirdstylishRadio1"
                                   data-toggle="collapse"
                                   data-target="#basicsCollapseThree"
                                   aria-expanded="false"
                                   aria-controls="basicsCollapseThree"
                            >
                              Cash on delivery
                            </label>
                          </div>
                        </div>
                        <div id="basicsCollapseThree"
                             class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                             aria-labelledby="basicsHeadingThree"
                             data-parent="#basicsAccordion1"
                             :class="{'show': paymentType === 'cash'}"
                        >
                          <div class="p-4">
                            Pay with cash upon delivery.
                          </div>
                        </div>
                      </div>

                      <div class="border-bottom border-color-1 border-dotted-bottom">
                        <div class="p-3" id="basicsHeadingFour">
                          <div class="custom-control custom-radio">
                            <input type="radio"
                                   class="custom-control-input"
                                   id="FourstylishRadio1"
                                   name="stylishRadio"
                                   @click="paymentType = 'card'"
                            >
                            <label class="custom-control-label form-label" for="FourstylishRadio1"
                                   data-toggle="collapse"
                                   data-target="#basicsCollapseFour"
                                   aria-expanded="false"
                                   aria-controls="basicsCollapseFour">
                              PayPal <a href="https://www.paypal.com/us/home" class="text-blue">What is PayPal?</a>
                            </label>
                          </div>
                        </div>
                        <div id="basicsCollapseFour"
                             class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                             aria-labelledby="basicsHeadingFour"
                             data-parent="#basicsAccordion1"
                             :class="{'show': paymentType === 'card'}"
                        >
                          <div class="p-4">
                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between px-3 mb-5">
                    <div class="form-check">
                      <input @click="confirmedTerms = !confirmedTerms"
                             class="form-check-input"
                             type="checkbox"
                             value=""
                             id="defaultCheck10"
                             required
                             data-msg="Please agree terms and conditions."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success"
                      >
                      <label class="form-check-label form-label" for="defaultCheck10">
                        I have read and agree to the website
                        <a href="#" class="text-blue">terms and conditions </a>
                        <span class="text-danger">*</span>
                      </label>
                    </div>
                  </div>
                  <button @click="order()"
                          type="submit"
                          class="btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3"
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 order-lg-1">
            <div class="pb-7 mb-7">
              <div class="border-bottom border-color-1 mb-5">
                <h3 class="section-title mb-0 pb-2 font-size-25">Billing details</h3>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      First name
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="firstName"
                           type="text"
                           class="form-control"
                           placeholder="Jack"
                           aria-label="Jack"
                           required=""
                           data-msg="Please enter your first name."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success"
                    >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      Last name
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="lastName"
                           type="text"
                           class="form-control"
                           name="lastName"
                           placeholder="Wayley"
                           aria-label="Wayley"
                           required=""
                           data-msg="Please enter your last name."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>

                <div class="w-100"></div>

                <div class="col-md-8">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      Street address
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="street"
                           type="text"
                           class="form-control"
                           name="streetAddress"
                           placeholder="470 Lucy Forks"
                           aria-label="470 Lucy Forks" required=""
                           data-msg="Please enter a valid address."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      Apartment
                    </label>
                    <input v-model="apartment"
                           type="text"
                           class="form-control"
                           placeholder="YC7B 3UT"
                           aria-label="YC7B 3UT"
                           data-msg="Please enter a valid address."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      City
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="city"
                           type="text"
                           class="form-control"
                           name="cityAddress"
                           placeholder="London"
                           aria-label="London"
                           required=""
                           data-msg="Please enter a valid address."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success"
                           autocomplete="off">
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      Zipcode
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="zipcode"
                           type="text"
                           class="form-control"
                           name="postcode"
                           placeholder="99999"
                           aria-label="99999"
                           required=""
                           data-msg="Please enter a postcode or zip code."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>

                <div class="w-100"></div>

                <div class="col-md-6">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      Email address
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="email"
                           type="email"
                           class="form-control"
                           name="emailAddress"
                           placeholder="jackwayley@gmail.com"
                           aria-label="jackwayley@gmail.com"
                           required=""
                           data-msg="Please enter a valid email address."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success"
                    >
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="js-form-message mb-6">
                    <label class="form-label">
                      Phone
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="phone"
                           type="text"
                           required
                           class="form-control"
                           placeholder="+38 (066) 355-55-55" aria-label="+38 (066) 355-55-55"
                           data-msg="Please enter your last name."
                           data-error-class="u-has-error"
                           data-success-class="u-has-success">
                  </div>
                </div>

                <div class="w-100"></div>
              </div>

              <div class="js-form-message mb-6">
                <label class="form-label">
                  Order notes (optional)
                </label>

                <div class="input-group">
                  <textarea v-model="notes"
                            class="form-control p-5"
                            rows="4"
                            name="text"
                            placeholder="Notes about your order, e.g. special notes for delivery.">
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<script>


import mutations from "@/App/_shared/services/mutations";

export default {
  async mounted() {
    await this.$store.dispatch('fetchCart')
    await this.$store.dispatch('fetchUser')
    this.email = this.user ? this.user.email : null
    this.phone = this.user ? this.user.phone : null
    this.firstName = this.user ? this.user.data.firstName : null
    this.lastName = this.user ? this.user.data.lastName : null
  },
  data: () => ({
    city: null,
    street: null,
    apartment: null,
    zipcode: null,
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    paymentType: "bank_transfer",
    notes: null,
    errors: null,
    confirmedTerms: false
  }),
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    total() {
      return this.$store.getters.total
    },
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    async order() {
      this.errors = null

      if (this.confirmedTerms === false) {
        this.errors = "Please agree terms and conditions."
      } else if (this.city && this.street && this.zipcode && this.firstName && this.lastName && this.phone && this.email && this.paymentType) {
        const token = await this.$store.getters.token()
        const response = await mutations.createOrder(
            this.city,
            this.street,
            this.zipcode,
            this.firstName,
            this.lastName,
            this.phone,
            this.email,
            this.paymentType,
            token,
            this.notes,
            this.apartment
        )
        if (response && response.data && response.data.createOrder) {
          this.errors = "Thank you for your order! Please wait for call."
          await this.$store.dispatch('fetchCart')
        } else if (response.errors) {
          this.errors = response.errors[0].message
        }
      } else {
        this.errors = "Required fields are missing."
      }
      window.scrollTo(0, 0);
    }
  }
}
</script>