import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import global components
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import Article from './components/Article.vue'
import Item from './components/Item.vue'

import Chr from './components/CustomComponents/HR.vue'

// register components
Vue.component('NavBar',NavBar)
Vue.component('Footer',Footer)
Vue.component('Carousel', Carousel)
Vue.component('Article', Article)
Vue.component('Item', Item)

Vue.component('Chr', Chr)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
