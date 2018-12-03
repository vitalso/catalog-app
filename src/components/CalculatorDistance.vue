<template lang="pug">

	div.item.calculate.container-fluid
		h3 Bußgeldrechner

		.wrap__animation(v-bind:class='{ is_animation : isShow }')
			.item__box
				.item__animate
				p.title__result.text-center Ihr Ergebnis wird berechnet...

		.wrap__pre__result.text-center(v-bind:class='{ pre_result: isPre }')
			.item__box
				img(src="src/assets/icon_error.png").pre_result_img
				p.title__result Hinweis für Ihre Berechnung: Möglicherweise lohnt ein Einspruch gegen Ihr Ergebnis!
				p Mindestens jeder zweite Bußgeldbescheid ist anfechtbar. Nutzen Sie die Möglichkeit zur kostenlosen Ersteinschätzung Ihres Falls binnen weniger Minuten bei der Ergebnisanzeige 
				
				p: button(v-on:click="calculate").result__btn ERGEBNIS ANZEIGEN

				p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Bußgeldbescheid direkt kostenlos prüfen

		.wrap__calculate__result( v-bind:class='{ show_result : isResult }' )
			.item__box
				p.title__result.text-center Ihr Berechnungsergebnis
				ul.result__list
					li
						|{{ strafe }} €
						span Bußgeld *
					li
						|{{ verbot }} Monate 
						span Fahrverbot*
					li
						|{{ punkte }} 
						span Punkt *

				.text-center
					p.result Mehr als jeder zweite Bußgeldbescheid ist anfechtbar!
				
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").result__btn EINSPRUCH KOSTENLOS PRÜFEN

					p
						a(v-on:click='isHide = !isHide , isResult = !isResult ' , href="#").back__to
							i.fas.fa-chevron-left
							| Neu berechnen

					p * Von diesem Wert kann abgewichen werden, wenn Sie bereits Punkte in Flensburg haben oder Ihnen vorsätzliche Begehung vorgeworfen wird.

		.calculate__input( v-bind:class='{ hide_calculate : isHide }' )

			.item__box
				h5.item__box__title Wie schnell sind Sie gefahren?

				.box__form.row-direction
					.form__row
						.form__input
							input(type="radio" , name="radio1" , value="80" , v-model="distance" , checked)#radio-1
							span
							label(for="radio-1") > 80 km/h

					.form__row
						.form__input
							input(type="radio" , name="radio1" , value="100" , v-model="distance")#radio-2
							span
							label(for="radio-2") > 100 km/h

					.form__row
						.form__input
							input(type="radio" , name="radio1" , value="130" , v-model="distance")#radio-3
							span
							label(for="radio-3") > 130 km/h

			.item__box
				h5.item__box__title Abstand zum vorausfahrenden Fahrzeug?

				.box__form
					.number__range
						input(type="number" , max="5" , v-model="sliderValue").slider__type
						<!--span(v-text="sliderValue").mr-0-->
						| /5 des halben Tachowertes
					range-slider(class="slider" , min="0" , max="5" , step="1" , v-model="sliderValue")

			.wrap__result.text-center
				button(v-on:click="preCalculate").result__btn Ergebnis anzeigen

</template>

<script>

	import RangeSlider from 'vue-range-slider'

	import 'vue-range-slider/dist/vue-range-slider.css'

	export default {
	  data () {
	    return {
	    	isPre: false,
	    	isShow: false,
	    	isHide: false,
	      	isResult: false,
	    	distance: '80',
	    	strafe: 0,
	    	punkte: 0,
	    	verbot: 0,
	      	sliderValue: 0
	    }
	  },

	  methods: {

	  	preCalculate: function() {

	  		this.isShow = true
	  		this.isHide = true

	  		setTimeout(() => {

	  			this.isShow = !this.isShow
	  			this.isPre = true

	  		} , 2000)

	  	},

	  	calculate: function() {

	  		this.isPre = !this.isPre
	  		this.isResult = true

	  		// 80 and Abstand

	  		if ( this.distance == '80' & this.sliderValue == 1 ) {
	  			this.strafe = 75,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '80' & this.sliderValue == 2 ) {
	  			this.strafe = 100,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '80' & this.sliderValue == 3 ) {
	  			this.strafe = 160,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '80' & this.sliderValue == 4 ) {
	  			this.strafe = 240,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '80' & this.sliderValue == 5 ) {
	  			this.strafe = 320,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		// 100 and Abstand

	  		if ( this.distance == '100' & this.sliderValue == 1 ) {
	  			this.strafe = 75,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '100' & this.sliderValue == 2 ) {
	  			this.strafe = 100,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '100' & this.sliderValue == 3 ) {
	  			this.strafe = 160,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.distance == '100' & this.sliderValue == 4 ) {
	  			this.strafe = 240,
	  			this.punkte = 2,
	  			this.verbot = 2
	  		}

	  		if ( this.distance == '100' & this.sliderValue == 5 ) {
	  			this.strafe = 320,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  		// 130 and Abstand

	  		if ( this.distance == '130' & this.sliderValue == 1 ) {
	  			this.strafe = 100,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '130' & this.sliderValue == 2 ) {
	  			this.strafe = 180,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.distance == '130' & this.sliderValue == 3 ) {
	  			this.strafe = 240,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.distance == '130' & this.sliderValue == 4 ) {
	  			this.strafe = 320,
	  			this.punkte = 2,
	  			this.verbot = 2
	  		}

	  		if ( this.distance == '130' & this.sliderValue == 5 ) {
	  			this.strafe = 400,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  	}
	  },

	  components: {
	    RangeSlider
	  }
	}

</script>

<style lang="scss">



</style>