import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import Page_2 from './components/Page_2.vue'
import Page_3 from './components/Page_3.vue'
import Page_4 from './components/Page_4.vue'
import Wahlen from './components/Wahlen.vue'
import Page_6 from './components/Page_6.vue'
import Calculator_speed from './components/CalculatorSpeed.vue'
import Calculator_distance from './components/CalculatorDistance.vue'
import Calculator_light from './components/CalculatorLight.vue'
import PageList from './components/PageList.vue'
import CallToAction from './components/CallToAction.vue'
import List from './components/List.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{ path: '/' , component: PageList , meta: { pageTitle: 'Was wird ihnen vorgeworfen?' , navTitle: 'BUSSGELDKATALOG-2018' } },
		{ path: '/page_2' , component: Page_2 , meta: { pageTitle: 'Wieviel sind Sie zu schnell gefahren?' , navTitle: 'KATALOG GESCHWINDIGKEIT' } },
		{ path: '/page_3' , component: Page_3 , meta: { pageTitle: 'Abstand zum vorausfahrenden Fahrzeug' , navTitle: 'KATALOG ABSTAND' } },
		{ path: '/page_4' , component: Page_4 , meta: { pageTitle: 'Was wird Ihnen vorgeworfen?' , navTitle: 'KATALOG ROTLICHT' } },
		{ path: '/wahlen' , component: Wahlen , meta: { pageTitle: 'Wählen Sie einen Bußgeldrechner' , navTitle: 'BUßGELDRECHNER WÄHLEN' } },
		{ path: '/page_6' , component: Page_6 , meta: { pageTitle: 'Impressum' , navTitle: 'BUßGELDRECHNER WÄHLEN' } },
		{ path: '/calculator_speed' , component: Calculator_speed , meta: { navTitle: 'BUßGELDRECHNER' } },
		{ path: '/calculator_distance' , component: Calculator_distance , meta: { navTitle: 'BUßGELDRECHNER' } },
		{ path: '/calculator_light' , component: Calculator_light , meta: { navTitle: 'BUßGELDRECHNER' } },
		{ path: '/list/id' , name: 'list' , component: List }
	]
})

Vue.use(VueScrollTo)

Vue.component ('list-item' , PageList)
Vue.component ('cta' , CallToAction)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
