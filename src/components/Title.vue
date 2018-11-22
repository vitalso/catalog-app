<template lang="pug">
	
	.title__section(v-bind:class=" { 'inner-title': $route.path != '/' , 'hidden': $route.path == '/calculator_speed' || $route.path== '/calculator_distance' || $route.path == '/calculator_light' || $route.path == '/result_speed' } ")
		h1 {{ pageTitle }}

</template>

<script>
	
	export default {

		data() {
			return {
				pageTitle: 'Was wird ihnen vorgeworfen?'
			}
		},
		watch: {
		    '$route' (to, from) {
		    	this.pageTitle = to.meta.pageTitle
		    }
		}

	}

</script>

<style lang="scss">
	/*@import '../scss/title.scss'*/
	.title__section {
		position: fixed;
		top: 60px;
		left: 0;
		width: 100%;
		background: #f2f2f2;
		padding: 15px 20px;
	}

			.title__section h1 {
				margin: 0;
				font-size: 22px;
				font-weight: 500;
			}
			.title__section.inner-title h1 {
					font-weight: 400;
					font-size: 14px;
					color: #404040;
			}

		.title__section.hidden {
			display: none;
		}


// Media query

@media screen and (min-width: 991px) {
	
	.title__section {
	    position: relative;
	    padding: 45px 0 0 308px;
	    background: transparent;
	    top: auto;
	    
			h1 {
				font-size: 28px;
			}

			&.inner-title {
				h1 {
					font-size: 28px;
				}
			}

	  }

}

</style>