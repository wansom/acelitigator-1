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
            <a-icon type="appstore" class="icon-list text-warning" />
            <p class="card-p">General Firm Information</p>
          </a-card>
        </a-col>
        <a-col :span="12" :md="6">
          <a-card
          :class="current===2?'icon-card-active text-white rounded-lg':'icon-card rounded-lg'"
            @click="() => {
                next(2);
              }
            "
          >
            <a-icon type="bank" class="icon-list text-warning" />
            <p class="card-p">Offices and Services</p>
          </a-card>
        </a-col>
        <a-col
          :span="12" :md="6"
          @click="
            () => {
              next(4);
            }
          "
        >
          <a-card :class="current===4?'icon-card-active text-white rounded-lg':'icon-card rounded-lg'">
            <a-icon type="team" class="icon-list text-warning" />
            <p class="card-p">Our Team</p>
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
      <firm-details-form></firm-details-form>
      </div>
      <div class="my-10" v-if="current == 2">
        <firm-offices-form></firm-offices-form>
      </div>
      <div class="my-10" v-if="current == 3">
        <firm-advocates-view></firm-advocates-view>
      </div>
    </div>
  </template>
  <script>
  import { auth } from "../../database/index";
  import { mapState } from "vuex";
import FirmOfficesForm from './FirmOfficesForm.vue';
import FirmAdvocatesView from './FirmAdvocatesView.vue';
import FirmDetailsForm from './FirmDetailsForm.vue';
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
        FirmOfficesForm,
        FirmAdvocatesView,
        FirmDetailsForm,
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
    height: 120px;
    margin-bottom: 10px;
  }
  .icon-card-active{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 120px;
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
    height: 120px;
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
  