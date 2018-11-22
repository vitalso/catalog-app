<template lang="pug">

	div.item.calculate.container-fluid
		h3 Bußgeldrechner Abstand

		.wrap__calculate__result( v-bind:class='{ show_result : isResult }' )
			.calculate__result
				.result
					span.icon: img(src="src/assets/icon_error.png")
					| Es drohen Ihnen {{ strafe }} €, {{ punkte }} Punkte, {{ verbot }} Monate Fahrverbot
				p Mehr als jeder zweite Bußgeldbescheid ist anfechtbar!
				
				a(href="#").result__btn EINSPRUCH KOSTENLOS PRÜFEN

			a(v-on:click='isResult = !isResult' , href="#").back__to
				i.fas.fa-chevron-left
				| neu berechnen

		.calculate__input( v-bind:class='{ hide_calculate : isResult }' )

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
						span(v-text="sliderValue").mr-0
						| /5 des halben Tachowertes
					range-slider(class="slider" , min="0" , max="5" , step="1" , v-model="sliderValue")

			.wrap__result.text-center
				button(v-on:click="calculate").result__btn Ergebnis anzeigen

</template>

<script>

	import RangeSlider from 'vue-range-slider'

	import 'vue-range-slider/dist/vue-range-slider.css'

	export default {
	  data () {
	    return {
	      	isResult: false,
	    	distance: '80',
	    	strafe: 0,
	    	punkte: 0,
	    	verbot: 0,
	      	sliderValue: 0
	    }
	  },

	  methods: {
	  	calculate: function() {

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