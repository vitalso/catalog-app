<template lang="pug">
	<!--div.item.container-fluid
		.item__box(v-for="(list , index) in lists")
			.item__box__icon
				img(:src="list.image")
			.item__box__desc
				h5.item__box__title {{ list.title }}
				p {{ list.text }}
				router-link(:to="{ name: 'list' , params: { id: index } }") KATALOG AUFRUFEN-->

	div.item.container-fluid
		.item__box
			.item__box__icon
				img(src="src/assets/icon-1.png")
			.item__box__desc
				h5.item__box__title Geschwindigkeitsverstoß
				p Sie sollen zu schnell gefahren sein? Wir zeigen Ihnen wie teuer es wird
				router-link(to="/page_2" , v-on:click.native="$emit('subTitle')") KATALOG AUFRUFEN

		.item__box
			.item__box__icon
				img(src="src/assets/icon-2.png")
			.item__box__desc
				h5.item__box__title Abstandsverstoß
				p Sie sollen den erforderlichen Mindestabstand nicht eingehalten haben?
				router-link(to="/page_3") KATALOG AUFRUFEN

		.item__box
			.item__box__icon
				img(src="src/assets/icon-3.png")
			.item__box__desc
				h5.item__box__title Rotlichtverstoß
				p Sie sollen über eine Rote Ampel gefahren sein?
				router-link(to="/page3") KATALOG AUFRUFEN

		.list__title Interaktiver Rechner

		.item__box
			.item__box__icon
				img(src="src/assets/icon-3.png")
			.item__box__desc
				h5.item__box__title Bußgeldrechner 2018
				p Sie möchten Ihr Bußgeld lieber selber ausrechnen?
				router-link(to="/page3") BUßGELDRECHNER STARTEN

</template>

<script>
	
	var lists = require('../list')

	module.exports = {
		data: function() {
			return {
				lists: lists,
			}
		}/*,
		methods: {
			subTitle: function() {
				console.log('ok')
			}
		}*/
	}

</script>

<style lang="scss">
	.item__box {
		margin-bottom: 30px;
		padding: 30px 15px;
		color: #a5a5a5;
		-webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
		&__icon {
			width: 68px;
    		height: 68px;
    		line-height: 68px;
    		text-align: center;
    		background: #F0F0F0;
    		float: left;
    		-webkit-border-radius: 50%;
    		        border-radius: 50%;
    			img {
    				max-width: 80%;
    				max-height: 40px;
    			}
		}
		&__desc {
			padding-left: 115px;
		}
		&__title {
			margin-bottom: 20px;
			font-size: 18px;
			font-weight: 500;
			color: #000;
		}
		a {
			font-size: 12px;
			font-weight: 700;
			color: #C92339;
		}
	}

	.list__title {
		margin-bottom: 20px;
		padding: 8px 0;
		font-size: 16px;
		font-weight: 500;
		border-top: 2px solid #cecece;
		border-bottom: 2px solid #cecece;
	}

</style>