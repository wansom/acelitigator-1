<template>
  <div>
    <a-row :gutter="24" type="flex" align="middle">
      <a-col :span="12" :md="6">
        <a-card
          :class="current===1?'icon-card-active text-white rounded-lg':'icon-card rounded-lg'"
          @click="
            () => {
              next(1);
            }
          "
        >
          <a-icon type="exclamation-circle" class="icon-list text-warning" />
          <p class="card-p">General Information</p>
        </a-card>
      </a-col>
      <a-col :span="12" :md="6">
        <a-card
        :class="current===2?'icon-card-active text-white rounded-lg':'icon-card rounded-lg'"
          @click="






          
            () => {
              next(2);
            }
          "
        >
          <a-icon type="bank" class="icon-list text-warning" />
          <p class="card-p">Employment Information</p>
        </a-card>
      </a-col>
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
      <a-col
        :span="12" :md="6"
        @click="
          () => {
            next(4);
          }
        "
      >
        <a-card :class="current===4?'icon-card-active text-white rounded-lg':'icon-card rounded-lg'">
          <a-icon type="file-protect" class="icon-list text-warning" />
          <p class="card-p">Documents Upload</p>
        </a-card>
      </a-col>
      <a-col :span="12" :md="6">
        <a-card
        :class="current===5?'icon-card-active text-white rounded-lg':'icon-card rounded-lg'"
          @click="
            () => {
              next(5);
            }
          "
        >
          <a-icon type="credit-card" class="icon-list text-warning" />
          <p class="card-p">Payment</p>
        </a-card>
      </a-col>
    </a-row>
    <div class="my-10" v-if="current == 1">
      <!-- <test-form></test-form> -->
      <GeneralInformation :user="user" />
    </div>
    <div class="my-10" v-if="current == 2">
      <EmploymentInformation :user="user" />
    </div>
    <div class="my-10" v-if="current == 3">
      <EducationInformation :user="user"></EducationInformation>
    </div>
    <div class="my-10" v-if="current == 4">
      <CertificateUpload :user="user"></CertificateUpload>
    </div>
    <div class="my-10" v-if="current == 5">
      <SubscriptionPayment :user="user"></SubscriptionPayment>
    </div>
  </div>
</template>
<script>
import GeneralInformation from "./General-Information.vue";
import EmploymentInformation from "./Employment-Information.vue";
import EducationInformation from "./Education-Information.vue";
import CertificateUpload from "./Certificate-Upload.vue";
import SubscriptionPayment from "./Subscription-Payment.vue";
import { auth } from "../../database/index";
import { mapState } from "vuex";
import TestForm from './TestForm.vue';
export default {
  data() {
    return {};
  },
  methods: {
    next(value) {
      this.$store.dispatch("changeStep", value);
    },
    prev() {
      this.current--;
    },
  },
  components: {
    GeneralInformation,
    EmploymentInformation,
    EducationInformation,
    CertificateUpload,
    SubscriptionPayment,
    TestForm,
  },
  computed: {
    ...mapState(["allAdvocates", "current"]),
    user() {
      return this.allAdvocates.filter(
        (i) => i.id == auth.currentUser.uid
      )[0];
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
.icon-card-active{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100px;
  background-color: #db1c22;
  margin-bottom: 10px;
  color:#ffffff
}
}
</style>
