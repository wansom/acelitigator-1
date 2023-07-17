<template>
	
	<!-- Layout Footer -->
	<a-layout-footer>
		<a-row type="flex">
			<a-col :span="24" :md="12">

				<!-- Footer Copyright Notice -->
				<p class="copyright">
					© {{ new Date().getFullYear() }}
					 <a href="https://acelitigator.com/">Acelitigator</a>
				</p>
				<!-- / Footer Copyright Notice -->

			</a-col>
			<a-col :span="24" :md="12" class="footer-control">

				<!-- Footer Navigation Menu -->
				<a-menu mode="horizontal">
					<a-menu-item><a href="https://acelitigator.com/about-us">About Us</a></a-menu-item>
					<a-menu-item><a href="https://acelitigator.com/litigation-documents/">Documents Portal</a></a-menu-item>
					<a-menu-item><a href="https://acelitigator.com/about-us">Privacy Policy</a></a-menu-item>
					<a-menu-item><a href="https://acelitigator.com/about-us">Support</a></a-menu-item>
				</a-menu>
				<!-- / Footer Navigation Menu -->

			</a-col>
		</a-row>
	</a-layout-footer>
	<!-- / Layout Footer -->

</template>

<script>

	export default ({
		data() {
			return {
			}
		},
	})

</script>
