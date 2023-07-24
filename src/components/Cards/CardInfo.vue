<template>
 <div>
    <a-card :bordered="false" class="card-info hidden md:block mb-3"  style="height:300px; height: fit-content;">
    <a-row type="flex">
      <a-col class="col-img block md:hidden" :span="24" :md="12">
        <div>
          <img :src="advocate.profile_photo" alt=""  style="object-fit:contain; width: 100%; max-height: 300px;" loading="lazy" v-if="advocate.profile_photo">
          <img src="/images/user-avatar.png" alt=""  style="object-fit:contain; width: 100%; max-height: 300px;" loading="lazy" v-else>

        </div>
      </a-col>
      <a-col class="col-content" :span="24" :xl="12">
        <div class="card-content">
         <a-row type="flex">
          <a-col :span="12"><p class="flex items-center"><a-icon type="user" class="mx-5" />{{ advocate.first_name }} {{ advocate.last_name }}</p></a-col>
          <a-col :span="12"><p class="flex items-center  whitespace-nowrap"><a-icon type="solution" class="mx-5" />{{ advocate.job_title }}</p></a-col>
         </a-row>
          <a-row type="flex" class="my-5">
            <a-col :span="12">
              <p class="flex items-center">
                <a-icon type="environment" class="mx-5" />{{
                  advocate.location
                }}
              </p>
              <p class="flex items-center">
                <a-icon type="calendar" class="mx-5" />{{
                  new Date().getFullYear() -
                  new Date(advocate.practise_start).getFullYear()
                }}Year(s) Experience
              </p>
            </a-col>
            <a-col :span="12">
              <p class="lowercase flex items-center" v-if=" advocate.current_employer">
                <a-icon type="bank" class="mx-5" />{{
                  advocate.current_employer
                }}
              </p>
              <p class="flex items-center">
                <a-icon type="clock-circle" class="mx-5" />Member since
                {{ advocate.date_joined ? advocate.date_joined.toDate().getFullYear() : '2023' }}
              </p>
            </a-col>
          </a-row>
          <p class=" lowercase h-16 mb-6">
            {{ advocate.biography.slice(0,150) }}
          </p>
        <div class="flex items-center gap-4">  <span class="text-red-600 whitespace-nowrap">Primary Practise Area</span>
          <p class=" whitespace-nowrap">{{ advocate.specialisation }}</p></div>
            <span class="text-red-600 whitespace-nowrap">Other Practise Areas</span>
          <div style="display: flex; flex-wrap: nowrap">
            <div
              class="my-5"
              v-for="i of advocate.practise_areas"
              :key="i"
            >
              <span class=" mx-2 whitespace-nowrap">{{ i }}</span>
            </div>
          </div>
        </div>
        <div>
          <router-link :to="'/advocate/'+advocate.id">
           <a-button type="primary" block>
            View Profile
       
            </a-button>
          </router-link>
        </div>
      </a-col>
      <a-col class="col-img hidden md:block" :span="24" :md="12">
        <div>
          <!-- <a-avatar :src="advocate.profile_photo" :size="124"  loading="lazy" class=" object-contain"/> -->
          <img  :src="advocate.profile_photo" alt="profile photo" class="h-36 w-36 object-cover rounded-lg bg-center" v-if="advocate.profile_photo">
          <img  src="/images/user-avatar.png" alt="profile photo" class="h-36 w-36 object-cover rounded-lg bg-center" v-else>
        </div>
      </a-col>
    </a-row>
  </a-card>
  <div class="small-card block md:hidden">
    <a-row class="align-items-center mb-2">
      <a-col class="col-img " :span="12">
        <div>
          <a-avatar :src="advocate.profile_photo" :size="124" style="object-fit:contain" loading="lazy"/>
        </div>
      </a-col>
      <a-col :span="12">
        <h5 class="mb-2">{{ advocate.first_name }} {{ advocate.last_name }}</h5>
          <h6>{{ advocate.job_title }}</h6>
      </a-col>
    </a-row>
    <a-row type="flex">
      
      <a-col class="col-content" :span="24" :xl="12">
        <div class="card-content">
         
          <a-row type="flex" class="my-5">
            <a-col :span="12">
              <div>
                <a-icon type="environment" class="mx-5" />{{
                  advocate.location
                }}
              </div>
              <div>
                <a-icon type="calendar" class="mx-5" />{{
                  new Date().getFullYear() -
                  new Date(advocate.practise_start).getFullYear()
                }}Years Experience
              </div>
            </a-col>
            <a-col :span="12">
              <div>
                <a-icon type="bank" class="mx-5" />{{
                  advocate.current_employer
                }}
              </div>
              <div>
                <a-icon type="clock-circle" class="mx-5" />Member since
                {{ advocate.date_joined ? advocate.date_joined.toDate().toDateString() : '0' }}
              </div>
            </a-col>
          </a-row>
          <p>
            {{ advocate.biography.slice(0,150) }}
          </p>
          <div class="flex items-center gap-4">  <span class="text-red-600">Primary Practise Area</span>
          <p>{{ advocate.specialisation }}</p></div>
            <span class="text-red-600">Other Practise Areas</span>
          <div style="display: flex; flex-wrap: wrap">
            <div
              class="my-5"
              v-for="i of advocate.practise_areas"
              :key="i"
            >
              <span class=" mx-2">{{ i }}</span>
            </div>
          </div>
        </div>
        <div>
          <router-link :to="'/advocate/'+advocate.id">
           <a-button type="primary" block>
            View Profile
       
            </a-button>
          </router-link>
        </div>
      </a-col>
    </a-row>
  </div>
</div>


</template>

<script>
import { Icon } from "ant-design-vue";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default {
  props: ["advocate"],
  components: {
    IconFont,
  },
  data() {
    return {};
  },
  computed: {
    getYearDiff(date) {
      return typeof date;
      // return Math.abs(new Date().getFullYear() - date1.getFullYear());
    },
  },
};
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  margin-top: 20px;
  font-size: 24px;
  color: #db1c22;
}
.small-card{
  width: 100%;
  height: fit-content;
  padding: 5px 15px;
  background: #ffffff;
}
</style>