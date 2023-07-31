
import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'
import VueSocialSharing from 'vue-social-sharing'
import { Cropper } from 'vue-advanced-cropper';


// import './plugins/click-away'


import '../public/home/css/style.css'
import './scss/app.scss'
import '../public/home/css/nice-select.css'
import '../public/home/css/themify-icons.css'
import '../public/home/css/elegant-icons.css'
import 'vue-advanced-cropper/dist/style.css';

import store from './store'
import { auth } from "./database/index";
import VueFormulate from '@braid/vue-formulate'
import './assets/tailwind.css'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(VueMeta)
Vue.use(Antd);
Vue.use(VueSocialSharing);
Vue.use(Cropper);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      metaInfo: {
        // if no title is specified, "Dial a Lawyer" will be used as a default title
        title: 'Dial a Lawyer', 
        // all titles will be injected into this template
        titleTemplate: '%s | Dial a Lawyer',
        meta: [
          { property: 'og:site_name', content: 'Dial a Lawyer' },
          { property: 'og:image', content: 'https://dialalawyer.africa/img/banner.251176c6.jpg'},
          { property: 'og:description', content: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market' },
          { name: 'twitter:site', content: '@dialalawyer' },
          { name: 'twitter:description', content: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market' },
          // other meta tags...
        ]
      },
      render: (h) => h(App),
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetAllAdvocates")

  }
  store.dispatch("fetAllAdvocates")
  store.dispatch("fetchCourts")
});