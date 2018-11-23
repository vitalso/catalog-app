<template lang="pug">
	
	.cta(v-bind:class="{ 'show-modal': showCTA }")
		a(onclick="return gtag_report_conversion('https://blitzerkanzlei.de/?ref=bussgeldkatalogv2');" , href="https://blitzerkanzlei.de/?ref=bussgeldkatalogv2").hole__cta
			p Lohnt sich ein Einspruch gegen Ihren Bußgeldbescheid?
			button.cta__btn GRATIS PRÜFEN

</template>

<script>
	
	export default {

		data() {
			return {
				showCTA: false
			}
		},

		methods: {
			modal: function() {
				setTimeout(() => { this.showCTA = true } , 3000)
			}
		},

		created: function() {
			this.modal();
		}

	}

</script>

<style lang="scss">
	
	.cta {
		width: 98%;
		position: fixed;
		left: 1%;
		bottom: 20px;
		padding: 18px 12px;
		background: rgba(0, 0, 0, .7);
		font-weight: 500;
		color: #FFF;
    	-webkit-transform: translateY(200px);
    	   -moz-transform: translateY(200px);
    	    -ms-transform: translateY(200px);
    	     -o-transform: translateY(200px);
    	        transform: translateY(200px);
    	-webkit-transition: all .3s ease-in-out;
    	   -moz-transition: all .3s ease-in-out;
    	    -ms-transition: all .3s ease-in-out;
    	     -o-transition: all .3s ease-in-out;
    	        transition: all .3s ease-in-out;
		-webkit-border-radius: 14px;
		        border-radius: 14px;
			&.show-modal {
				-webkit-transform: translateY(0);
				   -moz-transform: translateY(0);
				    -ms-transform: translateY(0);
				     -o-transform: translateY(0);
				        transform: translateY(0);
			    z-index: 2;
			}

		.hole__cta {
			display: flex;
	    	justify-content: space-between;
	    	align-items: center;
	    	color: #FFF;
	    		&:hover {
					color: #FFF;
				}
		}
			
		p {
			margin-bottom: 0;
		}

		.cta__btn {
			padding: 12px;
			display: inline-block;
			font-weight: 700;
			color: #FFF;
			background: #5DAB5D;
			cursor: pointer;
			-webkit-border-radius: 6px;
			        border-radius: 6px;
		}


	}

// Media query

@media screen and (min-width: 992px) {
	
	.cta {
		max-width: 630px;
    	left: 50%;
    	margin-left: -315px;
	}

}

@media screen and (max-width: 480px) {
	
	.cta {
		
		.cta__btn {
			min-width: 120px;
			font-size: 12px;
		}

	}

}

</style>