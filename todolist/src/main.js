import Vue from 'vue'
//import App from './App.vue'
import todoList from './todoList.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(todoList)
}).$mount('#app')
