<template lang="pug">

	div.item.calculate.container-fluid
		h3 Bußgeldrechner Rotlicht
		
		form

			.item__box
				h5.item__box__title War die Ampel schon länger als 1 Sekunde rot?

				.box__form
					.form__row
						.form__input
							input(type="radio" , name="radio1" , checked)#radio-1
							span
							label(for="radio-1") Ja
						.form__input
							input(type="radio" , name="radio1")#radio-2
							span
							label(for="radio-2") Nein
			.item__box
				h5.item__box__title Ist eine Gefährdung oder ein Sachschaden entstanden?

				.box__form.row-direction
					.form__row
						.form__input
							input(type="radio" , name="radio2" , checked)#radio-3
							span
							label(for="radio-3") Nein

					.form__row
						.form__input
							input(type="radio" , name="radio2")#radio-4
							span
							label(for="radio-4") Gefährdung

					.form__row
						.form__input
							input(type="radio" , name="radio2")#radio-5
							span
							label(for="radio-5") Sachschaden

</template>

<script>

	import RangeSlider from 'vue-range-slider'

	import 'vue-range-slider/dist/vue-range-slider.css'

	export default {
	  data () {
	    return {
	      sliderValue: 2
	    }
	  },
	  components: {
	    RangeSlider
	  }
	}

</script>

<style lang="scss">



</style>