<template>
  <aside id="sidebarContent"
         class="u-sidebar u-sidebar__lg u-unfold--css-animation fadeInRight"
         :class="{'u-unfold--hidden': !opened}"
         aria-labelledby="sidebarNavToggler"
         style="animation-duration: 500ms; right: 0"
  >
    <div class="u-sidebar__scroller">
      <div class="u-sidebar__container">
        <div class="js-scrollbar u-header-sidebar__footer-offset pb-3 mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar"
             style="position: relative; overflow: visible"
        >
          <div id="mCSB_2" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" style="max-height: none" tabindex="0">
            <div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style="position: relative; top: 0; left: 0" dir="ltr">
              <div class="d-flex align-items-center pt-4 px-7">
                <button @click="$emit('close')"
                        type="button"
                        class="close ml-auto target-of-invoker-has-unfolds active"
                        aria-controls="sidebarContent"
                        aria-haspopup="true"
                        aria-expanded="true"
                        data-unfold-event="click"
                        data-unfold-hide-on-scroll="false"
                        data-unfold-target="#sidebarContent"
                        data-unfold-type="css-animation"
                        data-unfold-animation-in="fadeInRight"
                        data-unfold-animation-out="fadeOutRight"
                        data-unfold-duration="500"
                >
                  <i class="ec ec-close-remove"></i>
                </button>
              </div>
              <div class="js-scrollbar u-sidebar__body mCustomScrollbar _mCS_3 mCS-autoHide" style="position: relative; overflow: visible">
                <div id="mCSB_3" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" style="max-height: none" tabindex="0">
                  <div id="mCSB_3_container" class="mCSB_container" style="position: relative; top: 0; left: 0" dir="ltr">
                    <div class="u-sidebar__content u-header-sidebar__content">
                      <form class="js-validate" novalidate="novalidate" @submit.prevent.stop>
                        <div id="login" data-target-group="idForm" v-if="mode === 'login'">
                          <!-- Title -->
                          <header class="text-center mb-7">
                            <h2 class="h4 mb-0">Welcome Back!</h2>
                            <p>Login to manage your account.</p>
                          </header>
                          <!-- End Title -->

                          <!-- Form Group -->
                          <div class="form-group">
                            <div class="js-form-message js-focus-state">
                              <label class="sr-only" for="signinEmail">Email</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="signinEmailLabel">
                                    <span class="fas fa-user"></span>
                                  </span>
                                </div>
                                <input type="email"
                                       class="form-control"
                                       name="email"
                                       id="signinEmail"
                                       placeholder="Email"
                                       aria-label="Email"
                                       aria-describedby="signinEmailLabel"
                                       required=""
                                       data-msg="Please enter a valid email address."
                                       data-error-class="u-has-error"
                                       data-success-class="u-has-success"
                                       v-model="email"
                                />
                              </div>
                            </div>
                          </div>
                          <!-- End Form Group -->

                          <!-- Form Group -->
                          <div class="form-group">
                            <div class="js-form-message js-focus-state">
                              <label class="sr-only" for="signinPassword">Password</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="signinPasswordLabel">
                                    <span class="fas fa-lock"></span>
                                  </span>
                                </div>
                                <input type="password"
                                       class="form-control"
                                       name="password"
                                       id="signinPassword"
                                       placeholder="Password"
                                       aria-label="Password"
                                       aria-describedby="signinPasswordLabel"
                                       required=""
                                       data-msg="Your password is invalid. Please try again."
                                       data-error-class="u-has-error"
                                       data-success-class="u-has-success"
                                       v-model="password"
                                />
                              </div>
                            </div>
                          </div>
                          <!-- End Form Group -->
                          <div class="mb-2">
                            <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover" @click="login">
                              Login
                            </button>
                          </div>

                          <div class="text-center mb-4" @click="mode='registration'">
                            <span class="small text-muted">
                              Do not have an account? 
                            </span>
                            <a class="js-animation-link small text-dark" data-animation-in="slideInUp" style="cursor: pointer">
                              Sign up
                            </a>
                          </div>
                        </div>

                        <div v-if="mode === 'registration'" id="signup" data-target-group="idForm">
                          <header class="text-center mb-7">
                            <h2 class="h4 mb-0">Welcome to Electro.</h2>
                            <p>Fill out the form to get started.</p>
                          </header>

                          <div class="form-group">
                            <div class="js-form-message js-focus-state">
                              <label class="sr-only" for="signupEmail">Email</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="signupEmailLabel">
                                    <span class="fas fa-user"></span>
                                  </span>
                                </div>
                                <input type="email"
                                       class="form-control"
                                       name="email"
                                       id="signupEmail"
                                       placeholder="Email"
                                       aria-label="Email"
                                       aria-describedby="signupEmailLabel"
                                       required=""
                                       data-msg="Please enter a valid email address."
                                       :class="{'u-has-error': email && email.indexOf('@') < 0,'u-has-success': email && email.indexOf('@') > 0}"
                                       v-model="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="js-form-message js-focus-state">
                              <label class="sr-only" for="signupPassword">Password</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="signupPasswordLabel">
                                    <span class="fas fa-lock"></span>
                                  </span>
                                </div>
                                <input type="password"
                                       class="form-control"
                                       name="password"
                                       id="signupPassword"
                                       placeholder="Password"
                                       aria-label="Password"
                                       aria-describedby="signupPasswordLabel"
                                       required=""
                                       data-msg="Your password is invalid. Please try again."
                                       :class="{'u-has-error': password && confirmedPassword !== password,
                                                'u-has-success': password && confirmedPassword === password}"
                                       v-model="password"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="js-form-message js-focus-state">
                              <label class="sr-only" for="signupConfirmPassword">Confirm Password</label>
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="signupConfirmPasswordLabel">
                                    <span class="fas fa-key"></span>
                                  </span>
                                </div>
                                <input type="password"
                                       class="form-control"
                                       name="confirmPassword"
                                       id="signupConfirmPassword"
                                       placeholder="Confirm Password"
                                       aria-label="Confirm Password"
                                       aria-describedby="signupConfirmPasswordLabel"
                                       required=""
                                       data-msg="Password does not match the confirm password."
                                       :class="{'u-has-error': confirmedPassword && confirmedPassword !== password,
                                                'u-has-success': confirmedPassword && password && confirmedPassword === password}"
                                       v-model="confirmedPassword"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="mb-2">
                            <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover" @click="registerUser">
                              Get Started
                            </button>
                          </div>

                          <div class="text-center mb-4" @click="mode='login'">
                            <span class="small text-muted">
                              Already have an account?
                            </span>
                            <a class="js-animation-link small text-dark" data-animation-in="slideInUp" style="cursor: pointer">
                              Login
                            </a>
                          </div>
                        </div>
                        <div v-if="errors" class="alert alert-primary" role="alert">{{ errors }}</div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="mCSB_3_scrollbar_vertical" class="mCSB_scrollTools mCSB_3_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                     style="display: block">
                  <div class="mCSB_draggerContainer">
                    <div id="mCSB_3_dragger_vertical" class="mCSB_dragger" style="
                        position: absolute;
                        min-height: 50px;
                        top: 0px;
                        display: block;
                        height: 476px;
                        max-height: 465.875px;
                      ">
                      <div class="mCSB_dragger_bar" style="line-height: 50px"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mCSB_2_scrollbar_vertical" class="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
               style="display: none">
            <div class="mCSB_draggerContainer">
              <div id="mCSB_2_dragger_vertical" class="mCSB_dragger" style="position: absolute;min-height: 50px;top: 0;height: 0;">
                <div class="mCSB_dragger_bar" style="line-height: 50px"></div>
              </div>
              <div class="mCSB_draggerRail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import mutations from "@/App/_shared/services/mutations"
import Auth from "@/App/_shared/utils/Auth";

export default {
  props: {
    opened: Boolean,
  },
  beforeMount() {
    this.AutAPI = new Auth()
  },
  data: () => ({
    mode: 'login',
    email: null,
    password: null,
    confirmedPassword: null,
    errors: null,
    AutAPI: null
  }),
  methods: {
    async registerUser() {
      if (this.email && this.password === this.confirmedPassword) {
        this.errors = null
        const response = await mutations.createUser(this.email, this.password, 380952524522, 'Vitalii', 'Grusha')
        if (response.errors) {
          this.errors = response.errors[0].message
        }
        if (response.data.createUser) {
          this.password = null
          this.confirmedPassword = null
          this.errors = null
        }
      }
    },
    async login() {
      if (this.email && this.password) {
        const response = await mutations.authorizeUser(this.email, this.password)
        if (response && response.data && response.data.authorizeUser) {
          this.$store.getters.auth.writeTokensToLS(response.data.authorizeUser)
          const token = await this.$store.getters.token()
          await this.$store.dispatch('fetchUser', token)
          await this.$store.dispatch('fetchCart', token)
          await this.$store.dispatch('fetchWishlist', token)
          await this.$store.dispatch('fetchComparisonList', token)
          this.errors = "You are successfully signed in!"
        } else if (response.errors) {
          this.errors = response.errors[0].message
        }
      }
    }
  }
};
</script>