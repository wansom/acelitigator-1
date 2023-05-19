<template>
  <div class="container mx-auto detail-card">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="product-pic-zoom" :style="{ backgroundImage: 'url(' + advocate.profile_photo + ')' }">
      </div>
      <div class="">
        <div class="product-details">
          <div class="pd-title ">
            <span>{{ advocate.job_title }}</span>
            <h3 style="white-space:nowrap;display: flex;">{{ advocate.first_name }}<span class="mr-2"></span>{{ advocate.last_name }}</h3>
          </div>
          <div class="pd-desc">
            <p class="text-lg">
             {{ advocate.biography }}
            </p>
            <h4><i class="fa fa-business-time mr-2"></i>{{advocate.specialisation }}<span>(Primary Practise Area)</span></h4>
            <h4><i class="fa fa-location-dot mr-2"></i>{{advocate.location}}<span>(Primary Location)</span></h4>
          </div>
          <ul class="pd-tags">
            <li class="flex items-center gap-6"><span  class="mr-3">PRACTICE AREAS:</span><p class="m-2 text-lg" v-for="area of advocate.practise_areas" :key="area">{{ area }},</p></li>
            <li class="flex items-center gap-6"><span  class="mr-3">lOCATIONS:</span><p class="m-2 text-lg" v-for="area of advocate.other_counties" :key="area">{{ area }},</p></li>
          </ul>
          <div class="pd-size-choose flex justify-between flex-wrap">
            <div class="p-4 border-2 border-gray-100 rounded-lg flex items-center" @click="openPhoneDialer">
              <span> <i class="fa fa-phone text-lg mr-2"></i >{{advocate.phone}}</span>
            </div>
            <div class="p-4 border-2 border-gray-100 rounded-lg flex items-center" @click="openMailClient">
              <span > <i class="fa fa-envelope mr-2"></i>{{ advocate.email}}</span>
            </div>
            <div class="p-4 border-2 border-gray-100 rounded-lg flex items-center">
              <span for="lg-size"> <a :href="'//' +advocate.linkedIn"  target="_blank"><i class="ti-linkedin"></i></a></span>
            </div>
            <div class="p-4 border-2 border-gray-100 rounded-lg flex items-center">
              <span for="xl-size">  <a :href="'//' + advocate.twitter"  target="_blank"><i class="ti-twitter-alt"></i></a></span>
            </div>
            <div class="p-4 border-2 border-gray-100 rounded-lg flex items-center">
              
              <span for="xl-size">  <a  :href="'//' + advocate.website" target="_blank"><i class="fa fa-globe"></i></a></span>
            </div>
          </div>
          <h3>EXPERIENCE</h3>
          <div class="specification-table">
              <table>
                <tr>
                  <td class="p-catagory">{{ advocate.current_employer }}</td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.current_starting).toDateString() }}</div>
                    
                  </td>
                  <td>
                    <div class="cart-add">PRESENT</div>
                  </td>
                </tr>
                <tr v-if="advocate.prev1">
                  <td class="p-catagory">{{ advocate.prev1 }}</td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev1starting).toDateString() }}</div>
                  </td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev1ending).toDateString() }}</div>
                  </td>
                </tr>
                <tr v-if="advocate.prev2">
                  <td class="p-catagory">{{ advocate.prev2 }}</td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev2ending).toDateString() }}</div>
                  </td>
                  <td>
                    <div class="cart-add">{{new Date( advocate.prev2ending).toDateString() }}</div>
                  </td>
                </tr>
               
              </table>
            </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:['advocate'],
  methods:{
    openPhoneDialer() {
      const url = `tel:${this.advocate.phone}`;
      window.open(url);
    },
    openMailClient() {
      const url = `mailto:${this.advocate.email}`;
      window.open(url);
    },
  }
};
</script>

<style scoped>
.product-pic-zoom{
  height: 450px;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-color: transparent;
}
.pd-size-choose span{
  font-size:18px;
  font-weight:500;
  color:#000000;
}
.detail-card h3{
  font-size:24px;
  font-weight:500;
  color:#000000; 
}
</style>