<template lang="pug">
	
	.container-fluid
		.list(v-if="list")
			h1 {{ list.title }}
			p {{ list.text }}

</template>

<script>
	
	var lists = require('../list')

	module.exports = {
		data: function() {
			return {
				lists: lists,
				list: null
			}
		},
		created: function() {
			var listId = this.$route.params.id
			this.list = this.lists[listId]
		}
	}

</script>