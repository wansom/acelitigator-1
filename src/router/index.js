import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "../firebase";	
import * as fb from "../firebase";


Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/advocate',
		name: 'Advocate',
		component: () => import('../views/Lawyer-Details.vue'),
	},
	{
		path: '/contact-us',
		name: 'Contact-Us',
		component: () => import('../views/Contact.vue'),
	},
	{
		path: '/know-your-courts',
		name: 'Know-Your-Courts',
		component: () => import('../views/Know-Your-Courts.vue'),
	},
	{
		path: '/single-court',
		name: 'Single-Court',
		component: () => import('../views/Single-Court.vue'),
	},
	{
		path: '/landing',
		name: 'Landing',
		component: () => import('../views/Advocate-List.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		meta: {
			requiresAuth: true,
		  },
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/requests',
		name: 'Requests',
		layout: "dashboard",
		component: () => import('../views/Requests.vue'),
	},
	{
		path: '/request/:id',
		name: 'Request',
		layout: "dashboard",
		component: () => import('../views/SingleRequest.vue'),
	},
	{
		path: '/details/:id',
		name: 'Details',
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/profile',
		name: 'Profile',
		layout: "dashboard",
		component: () => import('../views/ActiveProfile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		component: () => import('../views/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		component: () => import('../views/Sign-Up.vue'),
	},
	{
		path: '/forgot-password',
		name: 'Forgot-Password',
		component: () => import('../views/Forgot-Password.vue'),
	},
	{
		path: '/advocate-listing',
		name: 'Advocate-Listing',
		component: () => import('../views/Advocate-List.vue'),
	},
]

function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'history',
	routes,
})
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
  
	if (requiresAuth && !auth.currentUser) {
	  next("/Sign-In");
	} else {
	  next();
	}
  });

  router.afterEach((to, from) => {
	if(to.params.id){
		fb.usersCollection.doc(to.params.id).update({
			profile_visits:fb.types.FieldValue.increment(1)
		})

	}
  });

export default router
