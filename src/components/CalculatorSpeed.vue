<template lang="pug">

	div.item.container-fluid
		form.calculate

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
					range-slider(class="slider" , min="10" , max="100" , step="1" , v-model="sliderValue")

</template>

<script>

	import RangeSlider from 'vue-range-slider'

	import 'vue-range-slider/dist/vue-range-slider.css'

	export default {
	  data () {
	    return {
	      sliderValue: 20
	    }
	  },
	  components: {
	    RangeSlider
	  }
	}

</script>

<style lang="scss">
	
	header {
		margin-bottom: 20px;
	}

	.item__box {
		position: relative;
		margin-bottom: 30px;
		padding: 30px 15px;
		color: #a5a5a5;
		-webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		&__title {
			margin-bottom: 20px;
			font-size: 18px;
			font-weight: 500;
			color: #000;
		}
	}

	.title__section {
		display: none;
	}

	.box__form {
		.form__row {
			display: flex;
			-webkit-justify-content: space-between;
			        justify-content: space-between;
		}
		.form__input {
			position: relative;
			-webkit-flex-basis: 50%;
			        flex-basis: 50%;
			input[type="radio"] {
				width: 35px;
				height: 35px;
				position: absolute;
				z-index: 2;
				opacity: 0;
				cursor: pointer;
					&:checked + span {
						&:after {
							content: "";
							position: absolute;
							top: 7px;
							left: 7px;
							width: 21px;
							height: 21px;
							background: #C92339;
							-webkit-border-radius: 50%;
							        border-radius: 50%;
						}
					}
			}
			span {
				width: 35px;
				height: 35px;
				margin-right: 13px;
				display: inline-block;
				vertical-align: middle;
				background: #f0f0f0;
				position: relative;
				-webkit-border-radius: 50%;
				        border-radius: 50%;
				cursor: pointer;
			}
			label {
				margin: 0;
				font-weight: 400;
				font-size: 18px;
				color: #525252;
			}
		}
	}

	.slider {
		width: 100%;
		position: absolute;
    	left: 0;
    	bottom: -7px;
    	padding: 0;
			.range-slider-rail {
				height: 6px;
			    background-color: #F2B7C0;
			}
			.range-slider-fill {
				height: 6px;
			    background-color: #C92339;
			}
			.range-slider-knob {
				width: 31px;
				height: 31px;
				border: 2px solid #cdcdcd;
				-webkit-box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, .16);
				        box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, .16);
			}
	}

	.number__range {
		margin-bottom: 15px;
		font-size: 26px;
		font-weight: 500;
		color: #000;
			span {
				margin-right: 5px;
			}
	}

</style>