<template lang="pug">

	div.item.calculate.container-fluid
		h3 Bußgeldrechner Rotlicht

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
				button(v-on:click="calculate").result__btn Ergebnis anzeigen

</template>

<script>

	export default {

	  data () {
	    return {
	      	isResult: false,
	    	zeit: 'ja',
	    	types: 1,
	    	strafe: 0,
	    	punkte: 0,
	    	verbot: 0
	    }

	  },

	  methods: {
	  	calculate: function() {

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