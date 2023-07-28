<template>
    <a-card
      :bordered="false"
      class="header-solid h-full"
      :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    >
      <a-result
        v-if="user.status == 'pending approval'"
        status="404"
        title="Account Pending review"
        sub-title="Your Details are currently being reviewed,your account will be activated once the review is done"
      > 
      <template #extra>
        <a href="/find-a-lawyer">
          <a-button key="console" type="primary">
          Browse Profiles
        </a-button>
        </a>
        <a-button key="buy" @click="reviewInfo" class="m-2">
          Review Information
        </a-button>
      </template>
      </a-result>
      <a-result
      v-else-if="user.status == 'active'"
      status="success"
      title="Your Account currently is Active!"
      :sub-title="'You will be required to renew your subscription on' +'-'+ user.subscription_date"
    >
    <template #extra>
        <a href="/find-a-lawyer">
          <a-button key="console" type="primary">
          Browse Profiles
        </a-button>
        </a>
        <a-button key="buy" @click="reviewInfo" class="m-2">
          Review Information
        </a-button>
      </template>
    </a-result>
    <CardPaymentMethods v-else :user="user"></CardPaymentMethods>
      <!-- <a-result
        v-else
        status="500"
        title="Profile Not Submitted"
        sub-title="Sorry, You can only make payment once your profile has been approved"
      >
        <template #extra>
          <a-button type="primary"> Submit Profile </a-button>
        </template>
      </a-result> -->
    </a-card>
  </template>
  
  <script>
  import CardPaymentMethods from "../Cards/CardPaymentMethods.vue";
  import { mapState } from "vuex";
  import {auth} from "../../database/index"
  export default {
    data() {
      return {
        optons: ["notsubmitted", "pending approval", "approved", "active"],
        status: "approved",
      };
    },
    components: { CardPaymentMethods },
    computed: {
      ...mapState(["allAdvocates"]),
  
      user() {
        return this.allAdvocates.filter(
          (i) => i.id == auth.currentUser.uid
        )[0];
      },
    },
    mounted() {
    },
    methods:{
      reviewInfo(){
        this.$store.dispatch('changeStep',1)
      }
    }
  };
  </script>
  
  <style></style>