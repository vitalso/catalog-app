<template lang="pug">

	div.item.calculate.container-fluid
		h3 Bußgeldrechner Abstand

		div

			.item__box
				h5.item__box__title Wie schnell sind Sie gefahren?

				.box__form.row-direction
					.form__row
						.form__input
							input(type="radio" , name="radio1" , checked)#radio-1
							span
							label(for="radio-1") > 80 km/h

					.form__row
						.form__input
							input(type="radio" , name="radio1")#radio-2
							span
							label(for="radio-2") > 100 km/h

					.form__row
						.form__input
							input(type="radio" , name="radio1")#radio-3
							span
							label(for="radio-3") > 130 km/h

			.item__box
				h5.item__box__title Abstand zum vorausfahrenden Fahrzeug?

				.box__form
					.number__range
						span(v-text="sliderValue").mr-0
						| /5 des halben Tachowertes
					range-slider(class="slider" , min="0" , max="5" , step="1" , v-model="sliderValue")

</template>

<script>

	import RangeSlider from 'vue-range-slider'

	import 'vue-range-slider/dist/vue-range-slider.css'

	export default {
	  data () {
	    return {
	      sliderValue: 0
	    }
	  },
	  components: {
	    RangeSlider
	  }
	}

</script>

<style lang="scss">



</style>