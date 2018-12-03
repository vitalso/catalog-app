<template lang="pug">
	
	.item.inner.container-fluid

		ul.inner__nav.right-nav
			li: a(href="#" , v-scroll-to={ el: '#up-130' , duration: 1000 , offset: -150 } ).active__link > 130 km/h
			li: a(href="#" , v-scroll-to={ el: '#up-100' , duration: 1000 , offset: -150 } ) > 100 km/h
			li: a(href="#" , v-scroll-to={ el: '#up-80' , duration: 1000 , offset: -150 } ) > 80 km/h

		h3 Verstoß bei über 130 km/h

		#up-130
			.item__box
				.box__side
					h4 5/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 100 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 4/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 180 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 3/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 240 € 
						li Punkte: 2 
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 2/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 320 € 
						li Punkte: 2 
						li Fahrverbot: 2 Monat

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 1/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 400 € 
						li Punkte: 2
						li Fahrverbot: 3 Monate

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

		ul.inner__nav.right-nav
			li: a(href="#" , v-scroll-to={ el: '#up-130' , duration: 1000 , offset: -150 } ) > 130 km/h
			li: a(href="#" , v-scroll-to={ el: '#up-100' , duration: 1000 , offset: -150 } ).active__link > 100 km/h
			li: a(href="#" , v-scroll-to={ el: '#up-80' , duration: 1000 , offset: -150 } ) > 80 km/h

		h3 Verstoß bei über 100 km/h

		#up-100
			.item__box
				.box__side
					h4 5/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 75 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 4/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 100 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 3/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 160 € 
						li Punkte: 2 
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 2/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 240 € 
						li Punkte: 2 
						li Fahrverbot: 2 Monat

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 1/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 320 € 
						li Punkte: 2 
						li Fahrverbot: 3 Monate

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

		ul.inner__nav.right-nav
			li: a(href="#" , v-scroll-to={ el: '#up-130' , duration: 1000 , offset: -150 } ) > 130 km/h
			li: a(href="#" , v-scroll-to={ el: '#up-100' , duration: 1000 , offset: -150 } ) > 100 km/h
			li: a(href="#" , v-scroll-to={ el: '#up-80' , duration: 1000 , offset: -150 } ).active__link > 80 km/h

		h3 Verstoß bei über 80 km/h

		#up-80
			.item__box
				.box__side
					h4 5/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 75 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 4/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 100 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 3/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 160 € 
						li Punkte: 2 
						li Fahrverbot: 1 Monat

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 2/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 240 € 
						li Punkte: 2 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

			.item__box
				.box__side
					h4 1/10 des halben Tachowertes
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

				.box__side
					ul.box__list
						li Strafe: 320 € 
						li Punkte: 1 
						li Fahrverbot: 0

				.box__side.show-on-desktop
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").default__btn Bescheid gültig?
					p: a(href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2") Hier gratis prüfen

		cta

			
</template>

<script>

	export default {

		data: function() {
			return {
				isHidden: false
			}
		}

	}

</script>

<style lang="scss">

	

</style>