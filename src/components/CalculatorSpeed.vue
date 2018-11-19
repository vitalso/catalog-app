<template lang="pug">

	div.item.calculate.container-fluid
		h3 Bußgeldrechner Geschwindigkeit
		
		form

			.item__box
				h5.item__box__title Was für ein Fahrzeug wurde gefahren?

				.box__form
					.form__row
						.form__input
							input(type="radio" , name="radio1" , checked)#radio-1
							span
							label(for="radio-1") PKW

						.form__input
							input(type="radio" , name="radio1")#radio-2
							span
							label(for="radio-2") LKW

			.item__box
				h5.item__box__title Wo wurden Sie gemessen?

				.box__form
					.form__row
						.form__input
							input(type="radio" , name="radio2" , checked)#radio-3
							span
							label(for="radio-3") Außerorts

						.form__input
							input(type="radio" , name="radio2")#radio-4
							span
							label(for="radio-4") Innerorts

			.item__box
				h5.item__box__title Wieviel sind Sie zu schnell gefahren?

				.box__form
					.number__range
						span(v-text="sliderValue")
						| km / h
					range-slider(class="slider" , min="0" , max="100" , step="1" , v-model="sliderValue")

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