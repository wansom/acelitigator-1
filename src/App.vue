<template>
	<div id="app" @contextmenu.prevent="">
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>
import { auth } from "./database/index";
	export default ({
		computed: {
			// Sets components name based on current route's specified layout, defaults to
			// <layout-default></layout-default> component.
			layout() {
				return "layout-" + ( this.$route.meta.layout || "default" ).toLowerCase() ;
			}
		},
	})
	
</script>

<style lang="scss">
</style>