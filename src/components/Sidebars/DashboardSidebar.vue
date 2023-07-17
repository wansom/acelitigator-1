<template>
	<!-- Main Sidebar -->
	<a-layout-sider
		collapsible
		class="sider-primary"
		breakpoint="lg"
		collapsed-width="0"
		width="250px"
		:collapsed="sidebarCollapsed"
		@collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
		:trigger="null"
		:class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
		theme="light"
		:style="{ backgroundColor: 'transparent',}">
			<div ><router-link to="/"><img src="images/dial-logo.png" alt="" style="height:100px;"></router-link> <span></span></div>
			<hr>
			<!-- Sidebar Navigation Menu -->
			<a-menu theme="light" mode="inline">
				<a-menu-item>
					<router-link to="/dashboard">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label" v-if="user.status=='active'">Dashboard</span>
						<span class="label" v-else-if="user.status=='admin'">Admin Dashboard</span>
						<span class="label" v-else>Create Profile</span>
					</router-link>
				</a-menu-item>
				<a-menu-item v-if="user.status=='active'">
					<router-link to="/chat">
						<span class="icon">
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 25 6 C 13.526286 6 4 13.7136 4 23.4375 C 4 29.610949 8.0052576 35.336806 14.298828 38.4375 A 1.0001 1.0001 0 0 0 14.298828 38.439453 C 14.321498 38.450593 14.316721 38.431551 14.306641 38.462891 C 14.026044 39.334531 13.083785 41.111046 12.175781 42.433594 A 1.0001 1.0001 0 0 0 13.294922 43.955078 C 15.7364 43.202868 18.266937 41.809598 19.787109 40.328125 C 19.787109 40.328125 19.789062 40.328125 19.789062 40.328125 C 20.69854 40.522027 21.624358 40.657425 22.554688 40.748047 C 24.946035 42.758366 28.247811 43.990234 31.841797 43.990234 C 33.013255 43.990234 34.188265 43.852989 35.337891 43.585938 C 36.384344 44.315325 37.521711 44.58987 38.572266 44.947266 A 1.0001 1.0001 0 0 0 39.742188 43.466797 C 39.384102 42.897562 39.169632 42.658155 38.972656 42.199219 C 42.649396 40.192133 44.947266 36.757832 44.947266 32.994141 C 44.947266 31.954794 44.763855 30.958201 44.447266 30.011719 C 45.441687 27.986624 46 25.763454 46 23.4375 C 46 13.7136 36.473714 6 25 6 z M 25 8 C 35.582286 8 44 15.0334 44 23.4375 C 44 24.888208 43.73741 26.284543 43.273438 27.617188 C 41.009817 24.24087 36.692775 22 31.841797 22 C 24.718957 22 18.736328 26.826273 18.736328 32.994141 C 18.736328 34.980576 19.36404 36.824024 20.443359 38.416016 C 20.361743 38.399548 20.278581 38.388465 20.197266 38.371094 A 1.0001 1.0001 0 0 0 20.191406 38.369141 C 20.064341 38.342981 19.927545 38.326172 19.78125 38.326172 C 19.264833 38.326172 18.765808 38.535031 18.398438 38.892578 A 1.0001 1.0001 0 0 0 18.396484 38.892578 C 17.701332 39.571005 16.505944 40.294461 15.214844 40.947266 C 15.543019 40.304953 16.038305 39.611017 16.210938 39.074219 C 16.512716 38.134058 16.070064 37.081797 15.181641 36.644531 C 9.4592628 33.825224 6 28.744051 6 23.4375 C 6 15.0334 14.417714 8 25 8 z M 31.841797 24 C 38.068957 24 42.947266 28.140009 42.947266 32.994141 C 42.947266 35.969675 41.145727 38.76769 37.958984 40.482422 A 1.0001 1.0001 0 0 0 37.957031 40.484375 C 37.326022 40.824847 37.074008 41.499264 37.072266 42.189453 C 36.896198 42.102293 36.592201 42.04088 36.447266 41.9375 A 1.0001 1.0001 0 0 0 36.445312 41.935547 C 36.12793 41.710906 35.739477 41.583984 35.345703 41.583984 C 35.199513 41.583984 35.052625 41.601246 34.910156 41.634766 C 33.901002 41.871228 32.868502 41.990234 31.841797 41.990234 C 25.614637 41.990234 20.736328 37.848273 20.736328 32.994141 C 20.736421 28.140011 25.614637 24 31.841797 24 z M 26.703125 31.056641 A 1.976 1.976 0 1 0 26.703125 35.007812 A 1.976 1.976 0 1 0 26.703125 31.056641 z M 32.236328 31.056641 A 1.976 1.976 0 1 0 32.236328 35.007812 A 1.976 1.976 0 1 0 32.236328 31.056641 z M 37.769531 31.056641 A 1.976 1.976 0 1 0 37.769531 35.007812 A 1.976 1.976 0 1 0 37.769531 31.056641 z"/></svg>
						</span>
						<span class="label">Chat</span>
					</router-link>
				</a-menu-item>
				<a-menu-item v-if="user.status=='active'">
					<router-link to="/profile">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">My Profile</span>
					</router-link>
				</a-menu-item>
				<a-menu-item v-if="user.status=='admin'">
					<router-link to="/requests" >
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z" fill="#111827"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Requests</span>
					</router-link>
				</a-menu-item>
				<a-menu-item  v-if="user.status==='admin'">
					<router-link to="/courts">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Courts</span>
					</router-link>
				</a-menu-item>
				<a-menu-item class="menu-item-header">
					Account
				</a-menu-item>
				<!-- <a-menu-item v-if="user.status!='active'">
					<router-link to="/profile" >
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Profile</span>
					</router-link>
				</a-menu-item> -->
				<a-menu-item >
					<a-button @click="logout" type="link" >
						<span class="icon">
							<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<title>duplicate</title>
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Tables" transform="translate(-58.000000, -507.000000)" fill="#BFBFBF" fill-rule="nonzero">
										<g id="sidebar" transform="translate(33.000000, 43.000000)">
											<g id="sign-up" transform="translate(16.000000, 455.000000)">
												<g id="duplicate" transform="translate(9.000000, 9.000000)">
													<path d="M4,6 C4,4.89543 4.89543,4 6,4 L12,4 C13.1046,4 14,4.89543 14,6 L14,12 C14,13.1046 13.1046,14 12,14 L6,14 C4.89543,14 4,13.1046 4,12 L4,6 Z" id="Path"></path>
													<path d="M2,0 C0.89543,0 0,0.89543 0,2 L0,8 C0,9.1046 0.89543,10 2,10 L2,4 C2,2.8954305 2.8954305,2 4,2 L10,2 L10,2 C10,0.89543 9.1046,0 8,0 L2,0 Z" id="Path"></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</span>
						<span class="label">Sign Out</span>
					</a-button >
				</a-menu-item>
			</a-menu>
			<!-- / Sidebar Navigation Menu -->

	</a-layout-sider>
	<!-- / Main Sidebar -->

</template>

<script>
	export default ({
		props: {
			user:{
				
				dafault:{}
			},
			// Sidebar collapsed status.
			sidebarCollapsed: {
				type: Boolean,
				default: false,
			},
			
			// Main sidebar color.
			sidebarColor: {
				type: String,
				default: "primary",
			},
			
			// Main sidebar theme : light, white, dark.
			sidebarTheme: {
				type: String,
				default: "light",
			},
		},
		data() {
			return {
				// sidebarCollapsedModel: this.sidebarCollapsed,
				active:false
			}
		},
		methods:{
			logout(){
				this.$store.dispatch("logout")
			}
		},
	})

</script>
