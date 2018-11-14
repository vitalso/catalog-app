import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import Page_2 from './components/Page_2.vue'
import Page_3 from './components/Page_3.vue'
import Page_6 from './components/Page_6.vue'
import PageList from './components/PageList.vue'
import List from './components/List.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{ path: '/' , component: PageList },
		{ path: '/page_2' , component: Page_2 , meta: { pageTitle: 'Wieviel sind Sie zu schnell gefahren?' , navTitle: 'KATALOG GESCHWINDIGKEIT' } },
		{ path: '/page_3' , component: Page_3 , meta: { pageTitle: 'Abstand zum vorausfahrenden Fahrzeug' , navTitle: 'KATALOG ABSTAND' } },
		{ path: '/page_6' , component: Page_6 , meta: { pageTitle: 'Impressum page' } },
		{ path: '/list/id' , name: 'list' , component: List }
	]
})

Vue.use(VueScrollTo)

Vue.component ('list-item' , PageList)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
