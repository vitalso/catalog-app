<template lang="pug">
	
	.item.inner.container-fluid

		ul.inner__nav.right-nav
			li: a(href="#" , v-scroll-to={ el: '#auserorts' , duration: 1000 , offset: -150 } ).active__link Außerorts
			li: a(href="#" , v-scroll-to={ el: '#innerorts' , duration: 1000 , offset: -150 } ) Innerorts

		h3 Verstoß außerorts

		#auserorts
			.item__box
				.box__side
					h4 bis 10 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 10 € 
						li Punkte: 0 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 10-15 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 25 € 
						li Punkte: 0 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 16-20 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 35 € 
						li Punkte: 0 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 21-25 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 80 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 26-30 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 100 € 
						li Punkte: 1 
						li: span Fahrverbot im Wiederholungsfall

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 31-40 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 160 € 
						li Punkte: 2
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 41-50 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 200 € 
						li Punkte: 2
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 51-60 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 280 € 
						li Punkte: 2
						li Fahrverbot: 2 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

		ul.inner__nav.right-nav
			li: a(href="#" , v-scroll-to={ el: '#auserorts' , duration: 1000 , offset: -150 } ) Außerorts
			li: a(href="#" , v-scroll-to={ el: '#innerorts' , duration: 1000 , offset: -150 } ).active__link Innerorts

		h3 Verstoß innerorts

		#innerorts
			.item__box
				.box__side
					h4 bis 10 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 10 € 
						li Punkte: 0 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 10-15 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 20 € 
						li Punkte: 0 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 16-20 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 30 € 
						li Punkte: 0 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 21-25 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 70 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 26-30 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 80 € 
						li Punkte: 1 
						li: span Fahrverbot im Wiederholungsfall

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 31-40 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 120 € 
						li Punkte: 1
						li: span Fahrverbot im Wiederholungsfall

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 41-50 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 160 € 
						li Punkte: 2
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 51-60 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 240 € 
						li Punkte: 2
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 61-70 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 440 € 
						li Punkte: 2
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

			.item__box
				.box__side
					h4 über 70 km/h
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 600 € 
						li Punkte: 2
						li Fahrverbot: 3 Monat

				.box__side.show-on-desktop
					p: a(href="#").default__btn Einspruch sinnvoll?
					p: a(href="#") Hier gratis prüfen

		cta

</template>

<script>

</script>

<style>
	
	.inner__nav {
		display: flex;
		-webkit-justify-content: space-between;
		        justify-content: space-between;
		margin-bottom: 30px;
		font-size: 16px;
		font-weight: 500;
		border-top: 2px solid #f2f2f2;
		border-bottom: 2px solid #f2f2f2;
	}
		.inner__nav li {
			-webkit-flex-basis: 50%;
			        flex-basis: 50%;
		}
			.inner__nav li:last-child a {
					padding-right: 13px;
			}

		.inner__nav a {
			display: block;
			padding-left: 13px;
			padding-top: 7px;
			padding-bottom: 7px;
			color: #a9a9a9;
		}
				.inner__nav a.active__link {
					background: #ececec;
					color: #000;
				}
		
		.inner__nav.right-nav li:last-child {
				text-align: right;
		}

	h3 {
		margin-bottom: 30px;
		font-size: 22px;
		font-weight: 500;
	}

	.inner .item__box {
		-webkit-flex-direction: row;
		    -ms-flex-direction: row;
		        flex-direction: row;
	    -webkit-align-items: center;
	            align-items: center;
		-webkit-justify-content: space-between;
		        justify-content: space-between;
	}
		
			.inner .item__box h4 {
				margin-bottom: 30px;
				font-size: 18px;
				font-weight: 500;
				color: #000;
			}

			.inner .item__box p {
				margin: 0;
			}

			.inner .item__box a {
				font-size: 12px;
			}
					.inner .item__box a.default__btn {
						color: #000;
					}

			.inner .item__box .box__list {
				width: 120px;
				margin: 0;
				padding-top: 10px;
				padding-bottom: 10px;
				text-align: right;
				border-left: 2px solid #d6d6d6;
			}
				.inner .item__box .box__list li {
					margin-bottom: 8px;
				}
						.inner .item__box .box__list li span {
							font-size: 12px;
						}

		.inner .item__box .box__side.show-on-desktop {
			display: none;
		}

/* Media query */

@media screen and (min-width: 992px) {

	.inner__nav {
		max-width: 840px;
	}
	
	.inner .item__box .box__list {
		width: auto;
	}

		.inner .item__box .box__list li {
			display: inline-block;
			padding-left: 20px;
		}

		.inner .item__box .box__side p {
			display: none;
		}
		
		.inner .item__box .box__side.show-on-desktop {
			display: block;
		}

		.inner .item__box .box__side.show-on-desktop p {
			display: block;
		}

		.inner .item__box h4 {
			margin-bottom: 0;
		}

		.inner .item__box .box__side:first-child {
			width: 100%;
			max-width: 220px;
		}

}

</style>