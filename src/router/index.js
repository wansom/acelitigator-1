import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "../database/index";	
import {updateAdvocate} from "../database/firestore";
import {arrayUnion} from 'firebase/firestore';



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
		path: '/advocate/:id',
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
		path: '/find-a-lawyer',
		name: 'Find-a-Lawyer',
		component: () => import('../views/FindaAawyer.vue'),
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
		meta: {
			requiresAuth: true,
			requiresAdmin: true,
		  },
		component: () => import('../views/Requests.vue'),
	},
	{
		path: '/courts',
		name: 'Courts',
		layout: "dashboard",
		meta: {
			requiresAuth: true,
			requiresAdmin: true,
		  },
		component: () => import('../views/Courts.vue'),
	},
	{
		path: '/chat',
		name: 'Chat',
		layout: "dashboard",
		component: () => import('../views/Chat.vue'),
	},
	{
		path: '/request/:id',
		name: 'Request',
		layout: "dashboard",
		meta: {
			requiresAuth: true,
			requiresAdmin: true,
		  },
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
	{
		path: '/not-authorized',
		name: 'not-authorized',
		component: () => import('../views/NotAuthorized.vue'),
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
	const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
	if (requiresAuth && !auth.currentUser) {
	  next("/sign-in");
	}  else if (requiresAuth && requiresAdmin && auth.currentUser.email !='admin@acelitigator.com') {
		next('not-authorized') //redirect to not-authorized page
	  }
	else {
	  next();
	}
  });

  router.afterEach((to, from) => {
	if(to.params.id){
		updateAdvocate(to.params.id,{
			profile_visits:arrayUnion(new Date())
		})

	}
  });

export default router
