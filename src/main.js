import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
Vue.component('menu-icon', MenuIcon);
Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
