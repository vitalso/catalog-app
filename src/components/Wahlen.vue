<template lang="pug">

	div.item.container-fluid
		router-link(to="/calculator_speed").item__box
			.item__box__icon
				img(src="src/assets/icon-1.png")
			.item__box__desc
				h5.item__box__title Geschwindigkeitsverstoß
				p Sie sollen zu schnell gefahren sein? Rechnen Sie aus wie teuer es wird
				router-link(to="/calculator_speed") KATALOG AUFRUFEN

		router-link(to="/calculator_distance").item__box
			.item__box__icon
				img(src="src/assets/icon-2.png")
			.item__box__desc
				h5.item__box__title Abstandsverstoß
				p Sie sollen den erforderlichen Mindestabstand nicht eingehalten haben?
				router-link(to="/calculator_distance") KATALOG AUFRUFEN

		router-link(to="/calculator_light").item__box
			.item__box__icon
				img(src="src/assets/icon-3.png")
			.item__box__desc
				h5.item__box__title Rotlichtverstoß
				p Sie sollen über eine Rote Ampel gefahren sein?
				router-link(to="/calculator_light") KATALOG AUFRUFEN

</template>

<script>

</script>

<style>

	.calculate.item {
		padding-top: 86px;
	}

		.calculate h3 {
			font-size: 28px;
			display: none;
		}

	.calculate .item__box {
		display: block;
		position: relative;
		margin-bottom: 15px;
		padding: 15px;
	}

		.box__form .form__row {
			display: flex;
			-webkit-justify-content: space-between;
			        justify-content: space-between;
		}
		
		.box__form .form__input {
			position: relative;
			-webkit-flex-basis: 50%;
			        flex-basis: 50%;
		}

			.box__form input[type="radio"] {
				width: 35px;
				height: 35px;
				position: absolute;
				z-index: 2;
				opacity: 0;
				cursor: pointer;
			}
					.box__form input[type="radio"]:checked + span:after {
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
						.box__form input[type="radio"]:checked + span + label {
							font-weight: 700;
							color: #010101;
						}
			.box__form .form__row span {
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
			.box__form .form__row label {
				margin: 0;
				font-weight: 400;
				font-size: 18px;
				color: #525252;
			}

	.slider {
		width: 98% !important;
		position: absolute;
    	left: 1%;
    	bottom: -7px;
    	padding: 0 !important;
    }
			.slider .range-slider-rail {
				height: 6px;
			    background-color: #F2B7C0;
			}
			.slider .range-slider-fill {
				height: 6px;
			    background-color: #C92339;
			}
			.slider .range-slider-knob {
				width: 31px;
				height: 31px;
				border: 2px solid #cdcdcd;
				-webkit-box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, .16);
				        box-shadow: 2px 2px 20px 0 rgba(0, 0, 0, .16);
			}

	.box__form .form__row {
		margin-bottom: 20px;			
	}

		.box__form .form__row:last-child {
			margin-bottom: 0;
		}

	.number__range {
		margin-bottom: 15px;
		font-size: 26px;
		font-weight: 500;
		color: #000;
	}
			.number__range span {
				margin-right: 5px;
			}

/* Media query */

@media screen and (min-width: 992px) {
	
	.calculate h3 {
		display: block;
	}

	.box__form.row-direction {
		display: flex;
	}

		.box__form.row-direction .form__row {
			display: block;
    		margin-right: 40px;
		}

}

</style>