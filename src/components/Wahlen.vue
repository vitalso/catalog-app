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
				cursor: pointer;
				vertical-align: middle;
			}

	.slider {
		width: 94% !important;
		position: absolute;
    	left: 3%;
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

/* Calculate result */

.wrap__calculate__result , .wrap__animation , .wrap__pre__result {
	position: absolute;
	-webkit-transform: translateX(-120%);
       -moz-transform: translateX(-120%);
        -ms-transform: translateX(-120%);
         -o-transform: translateX(-120%);
            transform: translateX(-120%);
    -webkit-transition: all .5s ease-in-out;
       -moz-transition: all .5s ease-in-out;
        -ms-transition: all .5s ease-in-out;
         -o-transition: all .5s ease-in-out;
            transition: all .5s ease-in-out;
}

.title__result {
	margin-bottom: 30px;
	font-size: 20px;
	color: #000;
}

.pre_result_img {
	max-width: 40px;
}

.result__list {
	margin-bottom: 20px;
	display: flex;
	-webkit-justify-content: space-between;
	        justify-content: space-between;
}

	.result__list li {
		-webkit-flex: 0 0 33%;
		    	flex: 0 0 33%;
		text-align: center;
		font-size: 28px;
		color: #000;
		border-right: 1px solid #a5a5a5;
	}

		.result__list li:last-child {
			border: none;
		}

		.result__list li span {
			margin-top: 10px;
			font-size: 14px;
			display: block;
			color: #a5a5a5;
		}

	.wrap__calculate__result.show_result , .wrap__animation.is_animation , .wrap__pre__result.pre_result {
		position: relative;
		-webkit-transform: translateX(0);
		   -moz-transform: translateX(0);
		    -ms-transform: translateX(0);
		     -o-transform: translateX(0);
		        transform: translateX(0);
	}

		.wrap__animation.is_animation {
			position: absolute;
			width: 100%;
    		max-width: 840px;
			background: #FFF;
			z-index: 1;
		}

	.result {
		margin-bottom: 20px;
		color: #C92339;
		position: relative;
	}

	.result__btn {
		display: inline-block;
		max-width: 330px;
		width: 100%;
		padding: 12px 0;
		background: #5DAB5D;
		text-align: center;
		font-size: 14px;
		color: #fff;
		cursor: pointer;
		-webkit-border-radius: 6px;
		        border-radius: 6px;
	}

		.item__box a.result__btn {
			font-size: 14px;
			color: #FFF;
		}

		.item__box a.back__to {
			font-size: 16px;
			color: #000;
		}

		.result__btn:hover {
			opacity: .8;
			color: #FFF;
		}

		.result__btn:focus , .result__btn:active {
			outline: none;
		}

	.wrap__result {
		max-width: 840px;
		margin-top: 40px;
	}

		.wrap__result button {
			text-transform: uppercase;
		}

			.wrap__result button:focus , .wrap__result button:active {
				outline: none;
			}

	.calculate__input {
		-webkit-transition: all .5s ease-in-out;
		   -moz-transition: all .5s ease-in-out;
		    -ms-transition: all .5s ease-in-out;
		     -o-transition: all .5s ease-in-out;
		        transition: all .5s ease-in-out;
	}		

	.hide_calculate {
		-webkit-transform: translateX(-120%);
		   -moz-transform: translateX(-120%);
		    -ms-transform: translateX(-120%);
		     -o-transform: translateX(-120%);
		        transform: translateX(-120%);
	}

	.back__to {
		text-decoration: underline;
		font-size: 16px;
		font-weight: 400;
		color: #000;
	}

		.back__to i {
			font-size: 12px;
			margin-right: 10px;
			margin-top: -3px;
			vertical-align: middle;
		}

		.back__to:hover {
			color: #C92339;
		}

.item__animate {
    width: 80px;
    height: 80px;
    margin: 40px auto;
    background: transparent;
    border-left: 4px solid #a5a5a5;
    border-top: 4px solid #a5a5a5;
    border-right: 4px solid #a5a5a5;
    border-bottom: 4px solid #C92339;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: loader 2s infinite;
    -moz-animation: loader 2s infinite;
    -o-animation: loader 2s infinite;
    animation: loader 2s infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
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

	.calculate__result {
		max-width: 840px;
		margin: 0 0 20px 0;
	}

}

</style>