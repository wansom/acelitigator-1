<template>
  <div>
    <div v-if="user.status === 'pending approval'">
        <a-result
          v-if="user.status == 'pending approval'"
          status="404"
          title="Account Pending review"
          sub-title="Your Details are currently being reviewed,your account will be activated once the review is done"
        >
          <template #extra>
            <a href="/find-a-lawyer">
              <a-button key="console" type="primary">
                Browse Advocate Profiles
              </a-button>
            </a>
            <a-button key="buy" @click="logout" class="m-2">
              Logout 
            </a-button>
          </template>
        </a-result>
      
    </div>
    <div v-else>
      <a-row :gutter="24" type="flex" align="middle">
        <a-col :span="12" :md="4">
          <a-card
            :class="current === 1 ? 'icon-card-active text-white' : 'icon-card'"
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
        <a-col :span="12" :md="4">
          <a-card
            :class="current === 2 ? 'icon-card-active text-white' : 'icon-card'"
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
        <a-col :span="12" :md="4">
          <a-card
            :class="current === 3 ? 'icon-card-active text-white' : 'icon-card'"
            @click="
              () => {
                next(3);
              }
            "
          >
            <a-icon type="folder-open" class="icon-list text-warning" />
            <p class="card-p">Education Information</p>
          </a-card>
        </a-col>
        <a-col
          :span="12"
          :md="4"
          @click="
            () => {
              next(4);
            }
          "
        >
          <a-card
            :class="current === 4 ? 'icon-card-active text-white' : 'icon-card'"
          >
            <a-icon type="file-protect" class="icon-list text-warning" />
            <p class="card-p">Documents Upload</p>
          </a-card>
        </a-col>
        <a-col :span="24" :md="4">
          <a-card
            :class="current === 5 ? 'icon-card-active text-white' : 'icon-card'"
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
   logout(){
    this.$store.dispatch('logout')
   }
  },
  components: {
    GeneralInformation,
    EmploymentInformation,
    EducationInformation,
    CertificateUpload,
    SubscriptionPayment,
  },
  computed: {
    ...mapState(["allAdvocates", "current"]),
    user() {
      return this.allAdvocates.filter((i) => i.id == auth.currentUser.uid)[0];
    },
  },
  mounted() {},
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
.icon-card-active {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 200px;
  background-color: #db1c22;
  margin-bottom: 10px;
  color: #ffffff;
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
  color: #ffffff;
}
.card-p {
  font-size: 24;
  font-weight: bold;
}
.icon-list {
  font-size: 68px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 640px) {
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
