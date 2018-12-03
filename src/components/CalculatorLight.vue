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
				h5.item__box__title War die Ampel schon länger als 1 Sekunde rot?

				.box__form
					.form__row
						.form__input
							input(type="radio" , name="radio1" , value="ja" , v-model="zeit" , checked)#radio-1
							span
							label(for="radio-1") Ja
						.form__input
							input(type="radio" , name="radio1" , value="nein" , v-model="zeit")#radio-2
							span
							label(for="radio-2") Nein
			.item__box
				h5.item__box__title Ist eine Gefährdung oder ein Sachschaden entstanden?

				.box__form.row-direction
					.form__row
						.form__input
							input(type="radio" , name="radio2" , value="1" , v-model="types" , checked)#radio-3
							span
							label(for="radio-3") Nein

					.form__row
						.form__input
							input(type="radio" , name="radio2" , value="2" , v-model="types")#radio-4
							span
							label(for="radio-4") Gefährdung

					.form__row
						.form__input
							input(type="radio" , name="radio2" , value="3" , v-model="types")#radio-5
							span
							label(for="radio-5") Sachschaden

			.wrap__result.text-center
				button(v-on:click="preCalculate").result__btn Ergebnis anzeigen

</template>

<script>

	export default {

	  data () {
	    return {
	    	isPre: false,
	    	isShow: false,
	    	isHide: false,
	      	isResult: false,
	    	zeit: 'ja',
	    	types: 1,
	    	strafe: 0,
	    	punkte: 0,
	    	verbot: 0
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

	  		// Ja

	  		if ( this.zeit == 'ja' & this.types == 1 ) {
	  			this.strafe = 200,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.zeit == 'ja' & this.types == 2 ) {
	  			this.strafe = 320,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		if ( this.zeit == 'ja' & this.types == 3 ) {
	  			this.strafe = 360,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  		// Nein

	  		if ( this.zeit == 'nein' & this.types == 1 ) {
	  			this.strafe = 80,
	  			this.punkte = 1,
	  			this.verbot = 0
	  		}

	  		if ( this.zeit == 'nein' & this.types == 2 ) {
	  			this.strafe = 200,
	  			this.punkte = 1,
	  			this.verbot = 1
	  		}

	  		if ( this.zeit == 'nein' & this.types == 3 ) {
	  			this.strafe = 240,
	  			this.punkte = 2,
	  			this.verbot = 1
	  		}

	  	}
	  }

	}

</script>

<style lang="scss">



</style>