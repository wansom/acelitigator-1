<template>
  <div>
    <a-row :gutter="24" type="flex" align="middle">
      <a-col :span="12" :md="8">
        <a-card
          :class="current===1?'icon-card-active text-white':'icon-card'"
          @click="
            () => {
              next(1);
            }"
        >
          <a-icon type="exclamation-circle" class="icon-list text-warning" />
          <p class="card-p">General Information</p>
        </a-card>
      </a-col>
      <!-- <a-col :span="12" :md="8">
        <a-card
        :class="current===2?'icon-card-active text-white':'icon-card'"
          @click="
            () => {
              next(2);
            }
          "
        >
          <a-icon type="bank" class="icon-list text-warning" />
          <p class="card-p">Employment Information</p>
        </a-card>
      </a-col> -->
      <!-- <a-col :span="12" :md="4">
        <a-card
        :class="current===3?'icon-card-active text-white':'icon-card'"
          @click="
            () => {
              next(3);
            }
          "
        >
          <a-icon type="folder-open" class="icon-list text-warning" />
          <p class="card-p">Education Information</p>
        </a-card>
      </a-col> -->
      <!-- <a-col
        :span="12" :md="8"
        @click="
          () => {
            next(3);
          }
        "
      >
        <a-card :class="current===4?'icon-card-active text-white':'icon-card'">
          <a-icon type="file-protect" class="icon-list text-warning" />
          <p class="card-p">Verify Documents</p>
        </a-card>
      </a-col> -->
    </a-row>
    <div class="my-10" v-if="current==1" >
    <general-info-widget :user="request"></general-info-widget>
</div>
<div class="my-10" v-if="current==2">
   <employment-info-widget :user="request"></employment-info-widget>
</div>
<!-- <div class="my-10" v-if="current==3">
   <education-widget :user="request"></education-widget>
</div> -->
<div class="my-10" v-if="current==3">
    <certificate-widget :user="request"></certificate-widget>
</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CertificateWidget from '../components/Widgets/CertificateWidget.vue';
import EducationWidget from '../components/Widgets/EducationWidget.vue';
import EmploymentInfoWidget from '../components/Widgets/EmploymentInfoWidget.vue';
import GeneralInfoWidget from '../components/Widgets/GeneralInfoWidget.vue';
export default {
  components: { GeneralInfoWidget, EmploymentInfoWidget, EducationWidget, CertificateWidget },
  data(){
    return{
        current:1
    }
  },
  methods: {
    next(value) {
      this.current = value;
    },
    prev() {
      this.current--;
    },
  },
  computed: {
    ...mapState(["allAdvocates", "user"]),
    request() {
      return this.allAdvocates.find((a) => a.id == this.$route.params.id);
    },
  },
  mounted() {
  },
};
</script>


<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 200px;
  margin-bottom: 10px;
}
.icon-card-active{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 200px;
  background-color: #db1c22;
  margin-bottom: 10px;
  color:#ffffff
}
.icon-card:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 200px;
  background-color: #db1c22;
  margin-bottom: 10px;
  color:#ffffff
}
.card-p {
  font-size: 24;
  font-weight: bold;
}
.icon-list {
  font-size: 68px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 640px){
  .icon-list {
  font-size: 28px;
  margin-bottom: 5px;
}
	.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100px;
  margin-bottom: 10px;
}
.icon-card:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100px;
  background-color: #db1c22;
  margin-bottom: 10px;
}
}
</style>

