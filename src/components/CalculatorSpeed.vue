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
				h5.item__box__title Was für ein Fahrzeug wurde gefahren?

				.box__form
					.form__row
						.form__input
							input(type="radio" , name="radio1" , value="PKW" , v-model="pk_lk" , checked)#radio-1
							span
							label(for="radio-1") PKW

						.form__input
							input(type="radio" , name="radio1" , value="LKW" , v-model="pk_lk")#radio-2
							span
							label(for="radio-2") LKW

			.item__box
				h5.item__box__title Wo wurden Sie gemessen?

				.box__form
					.form__row
						.form__input
							input(type="radio" , name="radio2" , value="AU" , v-model="au_in" , checked)#radio-3
							span
							label(for="radio-3") Außerorts

						.form__input
							input(type="radio" , name="radio2" , v-model="au_in" , value="IN")#radio-4
							span
							label(for="radio-4") Innerorts

			.item__box
				h5.item__box__title Wieviel sind Sie zu schnell gefahren?

				.box__form
					.number__range
						input(type="number" , max="100" , v-model="sliderValue").slider__type
						<!--span(v-text="sliderValue")-->
						| km / h
					range-slider(class="slider" , min="0" , max="100" , step="1" , v-model="sliderValue")

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
	    	isResult: false,
	    	isHide: false,
	    	pk_lk: 'PKW',
	    	au_in: 'AU',
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

	  		// PKW AU

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >=1 & this.sliderValue <= 10 ) {
	  			this.strafe = 10,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 11 & this.sliderValue <= 15 ) {
	  			this.strafe = 20,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 16 & this.sliderValue <= 20 ) {
	  			this.strafe = 30,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 21 & this.sliderValue <= 25 ) {
	  			this.strafe = 70,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 26 & this.sliderValue <= 30 ) {
	  			this.strafe = 80,
	  			this.punkte = 1,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 31 & this.sliderValue <= 40 ) {
	  			this.strafe = 120,
	  			this.punkte = 1,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 41 & this.sliderValue <= 50 ) {
	  			this.strafe = 160,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 51 & this.sliderValue <= 60 ) {
	  			this.strafe = 240,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 61 & this.sliderValue <= 69 ) {
	  			this.strafe = 440,
	  			this.punkte = 2,
	  			this.verbot = 2
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'AU' & this.sliderValue >= 70 ) {
	  			this.strafe = 600,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  		// PKW IN

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 1 & this.sliderValue <= 10 ) {
	  			this.strafe = 15,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 11 & this.sliderValue <= 15 ) {
	  			this.strafe = 25,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 16 & this.sliderValue <= 20 ) {
	  			this.strafe = 35,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 21 & this.sliderValue <= 25 ) {
	  			this.strafe = 80,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 26 & this.sliderValue <= 30 ) {
	  			this.strafe = 100,
	  			this.punkte = 1,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 31 & this.sliderValue <= 40 ) {
	  			this.strafe = 160,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 41 & this.sliderValue <= 50 ) {
	  			this.strafe = 200,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 41 & this.sliderValue <= 50 ) {
	  			this.strafe = 200,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 51 & this.sliderValue <= 60 ) {
	  			this.strafe = 280,
	  			this.punkte = 2,
	  			this.verbot = 2
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 61 & this.sliderValue <= 69 ) {
	  			this.strafe = 480,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  		if ( this.pk_lk == 'PKW' & this.au_in == 'IN' & this.sliderValue >= 70 ) {
	  			this.strafe = 680,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  		// LKW AU

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 1 & this.sliderValue <= 10 ) {
	  			this.strafe = 15,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 11 & this.sliderValue <= 15 ) {
	  			this.strafe = 25,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 16 & this.sliderValue <= 20 ) {
	  			this.strafe = 70,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 21 & this.sliderValue <= 25 ) {
	  			this.strafe = 80,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 26 & this.sliderValue <= 30 ) {
	  			this.strafe = 95,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 31 & this.sliderValue <= 40 ) {
	  			this.strafe = 160,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 41 & this.sliderValue <= 50 ) {
	  			this.strafe = 240,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 51 & this.sliderValue <= 60 ) {
	  			this.strafe = 440,
	  			this.punkte = 2,
	  			this.verbot = 2
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'AU' & this.sliderValue >= 61 ) {
	  			this.strafe = 600,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  		// LKW IN

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 1 & this.sliderValue <= 10 ) {
	  			this.strafe = 20,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 11 & this.sliderValue <= 15 ) {
	  			this.strafe = 30,
	  			this.punkte = 0,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 16 & this.sliderValue <= 20 ) {
	  			this.strafe = 80,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 21 & this.sliderValue <= 25 ) {
	  			this.strafe = 95,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 26 & this.sliderValue <= 30 ) {
	  			this.strafe = 140,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 31 & this.sliderValue <= 40 ) {
	  			this.strafe = 200,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 41 & this.sliderValue <= 50 ) {
	  			this.strafe = 280,
	  			this.punkte = 2,
	  			this.verbot = 2
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 51 & this.sliderValue <= 60 ) {
	  			this.strafe = 480,
	  			this.punkte = 2,
	  			this.verbot = 3
	  		}

	  		if ( this.pk_lk == 'LKW' & this.au_in == 'IN' & this.sliderValue >= 61 ) {
	  			this.strafe = 680,
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