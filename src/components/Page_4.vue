<template lang="pug">
	
	.item.container-fluid

		.item__box
			.box__side
				h4 Rote Ampel überfahren
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: 90 € 
					li Punkte: 1 
					li Fahrverbot: 0

		.item__box
			.box__side
				h4 Rote Rote Ampel überfahren die schon länger als 1 Sekunde rot war
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: 90 € 
					li Punkte: 1 
					li Fahrverbot: 0

		.item__box
			.box__side
				h4 Rote Ampel überfahren + Sachbeschädigung
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: 200 € 
					li Punkte: 1 
					li Fahrverbot: 1

		.item__box
			.box__side
				h4 Rote Ampel überfahren + Gefährdung
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: 240 € 
					li Punkte: 2 
					li Fahrverbot: 1

		.item__box
			.box__side
				h4 Rote Ampel die schon länger als 1 Sekunde rot war mit Gefährdung
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: 320 € 
					li Punkte: 2 
					li Fahrverbot: 1

		.item__box
			.box__side
				h4 Rote Ampel die schon länger als 1 Sekunde rot war mit Sachbeschädigung
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: 360 € 
					li Punkte: 2 
					li Fahrverbot: 1

		.item__box
			.box__side
				h4 Rote Ampel (mit Grünpfeil nach rechts) ohne anhalten und überfahren um rechts abzubiegen.
				p: a(href="#").default__btn Einspruch sinnvoll?
				p: a(href="#") Hier gratis prüfen

			.box__side
				ul.box__list
					li Strafe: /0 € 
					li Punkte: ! 
					li Fahrverbot: =
		
			
</template>

<script>

</script>

<style lang="scss">

	.item {
		padding-top: 136px;
	}
	
	.inner__nav {
		display: flex;
		-webkit-justify-content: space-between;
		        justify-content: space-between;
		font-size: 16px;
		font-weight: 500;
		border-top: 2px solid #f2f2f2;
		border-bottom: 2px solid #f2f2f2;
		li {
			-webkit-flex-basis: 50%;
			        flex-basis: 50%;
			&:last-child {
				a {
					padding-right: 13px;
				}
			}
		}
		a {
			display: block;
			padding-left: 13px;
			padding-top: 7px;
			padding-bottom: 7px;
			color: #a9a9a9;
				&.active__link {
					background: #ececec;
					color: #000;
				}
		}
		&.right-nav {
			li:last-child {
				text-align: right;
			}
		}
	}

	h3 {
		margin-bottom: 20px;
		font-size: 22px;
		font-weight: 500;
	}

	.item__box {
		margin-bottom: 30px;
		padding: 20px 15px;
		color: #737373;
		display: flex;
		-webkit-justify-content: space-between;
		        justify-content: space-between;
		-webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		
			h4 {
				margin-bottom: 30px;
				font-size: 18px;
				font-weight: 500;
				color: #000;
			}

			p {
				margin: 0;
			}

			a {
				font-size: 12px;
					&.default__btn {
						color: #000;
					}
			}

			.box__list {
				width: 120px;
				margin: 0;
				padding-top: 10px;
				padding-bottom: 10px;
				text-align: right;
				border-left: 2px solid #d6d6d6;
				li {
					margin-bottom: 8px;
						span {
							font-size: 12px;
						}
				}
			}

	}

</style>