<template>
  <div>
    <Header></Header>
    <!-- <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <detail-card  :advocate="advocate"></detail-card>
        </div>
      </div>
    </section> -->
    <div class="container mx-auto my-5 px-5 lg:px-10 py-5 overflow-x-hidden">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-red-600">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            :src="advocate.profile_photo"
                            alt="">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ advocate.first_name }}<span class="mx-1"></span>{{ advocate.last_name }}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">{{ advocate.job_title }}</h3>
                 
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3"  @click="openMailClient">
                            <span>Send Email</span>
                            <span class="ml-auto cursor-pointer"><span
                                    class="bg-red-500 py-1 px-2 rounded text-white text-sm flex items-center"><a-icon type="mail" /></span></span>
                        </li>
                        <li class="flex items-center py-3" @click="openPhoneDialer">
                            <span>Call Advocate</span>
                            <span class="ml-auto cursor-pointer"><span
                                    class="bg-red-500 py-1 px-2 rounded text-white text-sm flex items-center"><a-icon type="phone" /></span></span>
                        </li>
                        <li class="flex items-center py-3 justify-between">
                            <span>View Social Profile </span>
                            <div class="flex items-center gap-6 ml-6">
                              <span class="ml-auto"><span
                                    class="bg-red-500 py-1 px-2 rounded text-white text-sm flex items-center"> <a :href="'//' + advocate.twitter"  target="_blank"><i class="ti-twitter-alt hover:text-red-600"></i></a></span></span>
                                    <span class="ml-auto"><span
                                    class="bg-red-500 py-1 px-2 rounded text-white text-sm flex items-center"><a  :href="'//' + advocate.website" target="_blank"><i class="fa fa-globe hover:text-red-600"></i></a></span></span>
                                    <span class="ml-auto"><span
                                    class="bg-red-500 py-1 px-2 rounded text-white text-sm flex items-center"><a :href="'//' +advocate.linkedIn"  target="_blank"><i class="fa fa-linkedin hover:text-red-600"></i></a></span></span>
                            </div>
                           
                        </li>
                       
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
                <!-- Friends card -->
                <div class="bg-white p-3 hover:shadow">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span class="text-red-600">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Similar Profiles</span>
                    </div>
                    <div class="grid grid-cols-3" >
                        <div class="text-center my-2" v-for="advocate of advocates.slice(0,3)" :key="advocate.id">
                            <img class="h-16 w-16 rounded-full mx-auto object-cover"
                            :src="advocate.profile_photo"
                                alt="">
                            <a href="#" class="text-main-color">{{ advocate.first_name }}<sapn class="mx-1"></sapn>{{ advocate.last_name }}</a>
                        </div>
                    </div>
                </div>
                <!-- End of friends card -->
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid grid-cols-1 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">{{ advocate.first_name }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">{{ advocate.last_name }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{{ advocate.phone }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact Email</div>
                                <div class="px-4 py-2">{{ advocate.email }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Primary Practise Area</div>
                                <div class="px-4 py-2">{{ advocate.specialisation }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="p-2 font-semibold">Oher Practise Areas.</div>
                                <div class="flex items-center">
                                  <div class="px-4 py-2 " v-for="(area,index) of advocate.practise_areas" :key="index">
                                    {{ area }}
                                </div>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Primary Practise Location</div>
                                <div class="px-4 py-2">{{advocate.location }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Other Practise Locations</div>
                                <div class="flex items-center">
                                  <div class="p-2" v-for="(location,index) of advocate.other_counties" :key="index">{{location}}</div>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-1">
                                <div class="px-4 py-2 font-semibold">Biography</div>
                                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 px-4">
                       {{ advocate.biography }}</p>
                            </div>
                        </div>
                    </div>
                 
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                              <li>
                                    <div class="text-teal-600">{{ advocate.current_employer }}</div>
                                    <div class="text-gray-500 text-xs">{{new Date( advocate.current_starting).toDateString() }} - Present</div>
                                </li>
                                <li v-if="advocate.prev1">
                                    <div class="text-teal-600" >{{ advocate.prev1 }}</div>
                                    <div class="text-gray-500 text-xs">{{new Date( advocate.prev1starting).toDateString() }} - {{new Date( advocate.prev1ending).toDateString() }}</div>
                                </li>
                             
                                <li v-if="advocate.prev2">
                                    <div class="text-teal-600">{{ advocate.prev2 }}</div>
                                    <div class="text-gray-500 text-xs">{{new Date( advocate.prev2ending).toDateString() }}- {{new Date( advocate.prev2ending).toDateString() }}</div>
                                </li>
                                
                            </ul>
                        </div>
                        <!-- <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Education</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Masters Degree in Oxford</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import DetailCard from '../components/Detail/Detail-card.vue';
import RelatedAdvocates from '../components/Detail/Related-Advocates.vue';
import {getAdvocate} from '../database/firestore'
import {increment} from "firebase/firestore"
import { updateAdvocate } from "../database/firestore";
import { arrayUnion} from "firebase/firestore";
import { mapState } from 'vuex';
export default {
  components: { Header, Footer, Breadcrum,DetailCard, RelatedAdvocates },
  data(){
    return{
      advocate:{}
    }
    
  },
  methods: {
    openPhoneDialer() {
      const url = `tel:${this.advocate.phone}`;
      window.open(url);
    },
    openMailClient() {
      const url = `mailto:${this.advocate.email}`;
      window.open(url);
    },
    moveToHome(){
      router.push('/')

    },
    fetchDetails() {
      getAdvocate(this.$route.params.id).then((data)=>{
       this.advocate=data
       updateAdvocate(this.$route.params.id,{
          profile_visits:arrayUnion(new Date()),
        })
      })
    },
  },
  computed: {
...mapState([ "advocates",])
  },
  mounted() {
    this.fetchDetails();
    this.$store.dispatch('fetchActiveAdvocates')
  },
};
</script> 

<style></style>
