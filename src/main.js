import Vue from 'vue'
import router  from './App/AppRouter'
import App from './App'
Vue.config.productionTip = false

require('./assets/vendor/font-awesome/css/fontawesome-all.min.css')
require('./assets/css/font-electro.css')
require('./assets/vendor/animate.css/animate.min.css')
require('./assets/vendor/hs-megamenu/src/hs.megamenu.css')
require('./assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css')
require('./assets/vendor/fancybox/jquery.fancybox.css')
require('./assets/vendor/slick-carousel/slick/slick.css')
require('./assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')
require('./assets/css/theme.css')
Vue.use(require('vue-moment'));
new Vue({
  router ,
  render: h => h(App),
}).$mount('#app')
