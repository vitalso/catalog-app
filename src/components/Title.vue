<template lang="pug">
	
	.title__section(v-bind:class=" { 'inner-title': $route.path != '/' } ")
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
		      	console.log(to.meta.pageTitle)
		    }
		}

	}

</script>

<style lang="scss">
	.title__section {
		position: fixed;
		top: 60px;
		left: 0;
		width: 100%;
		background: #f2f2f2;
		padding: 15px 20px;
			h1 {
				margin: 0;
				font-size: 22px;
				font-weight: 500;
			}
			&.inner-title {
				h1 {
					font-weight: 400;
					font-size: 14px;
					color: #404040;
				}
			}
	}
</style>