<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>Employment Information</h3>
      <p>
        Please provide us with the information of your current and past
        employemnt
      </p>
      <a-form :form="form" layout="vertical">
        <h5 class="my-5">Your Current Employer</h5>
        <a-row :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'current_employer',
                  { initialValue: user.current_employer,
                    rules: [
                      { required: true, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="current employer"
              ><a-tooltip slot="suffix" title="Enter Freelance if currently unemployed">
        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </a-tooltip>
            </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Starting Date">
             
              <a-date-picker
              :disabled-date="disabledDate"
                v-decorator="[
                  'current_starting',
                  { initialValue: user.current_starting,
                    rules: [
                      {
                        required: true,
                        message: 'Field is required',
                      },
                    ],
                  },
                ]"
                placeholder="Select date"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <h5 class="my-10">Your Previous Employers</h5>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev1',
                  { initialValue: user.prev1,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Dates">
              <!-- <a-date-picker
              :disabled-date="disabledDate"
                v-decorator="[
                  'prev1starting',
                  { initialValue: user.prev1starting,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="Start"
              /> -->
              <a-range-picker 
              :disabled-date="disabledDate"
              v-decorator="[
                  'prev1starting',
                  { 
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev2',
                  { initialValue: user.prev2,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Starting Date">
              <a-range-picker 
              :disabled-date="disabledDate"
              v-decorator="[
                  'prev2starting',
                  { 
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev3',
                  { initialValue: user.prev3,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Starting Date">
              <a-range-picker 
              :disabled-date="disabledDate"
              v-decorator="[
                  'prev3starting',
                  { 
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'prev4',
                  { initialValue: user.prev4,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="employer"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Starting Date">
              <a-range-picker 
              :disabled-date="disabledDate"
              v-decorator="[
                  'prev4starting',
                  { 
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"/>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div style="display:flex;">
        <a-button type="dark" @click="handlePrevious" class="mx-10">
          Previous
        </a-button>
        <a-button type="primary" @click="handleSubmit" :loading="loading" disabled v-if="user.status==='pending approval'">Save and Continue </a-button>
        <a-button type="primary" @click="handleSubmit" :loading="loading" v-else>Save and Continue </a-button>
      </div>
    </div>
  </a-card>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
export default {
  props:['user'],
  data() {
    return {
      startValue: null,
      prev1startValue: null,
      prev1endValue: null,
      endOpen: false,
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  watch: {
    startValue(val) {
      console.log("startValue", val);
    },
    endValue(val) {
      console.log("endValue", val);
    },
  },
  methods: {
    moment,
    disabledDate(current) {
      // Can not select days before today and today
      return current && current > moment().endOf('day');
    },
    onChange(val){
      console.log(val)
    },
    prev1disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    prev1disabledEndDate(endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    prev1handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    prev1handleEndOpenChange(open) {
      this.endOpen = open;
    },
    handlePrevious() {
      this.$store.dispatch("changeStep", 1);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const payload = {
            current_employer:values.current_employer?? "",
            current_starting:values.current_starting.format()??"",

            prev1:values.prev1?? "",
            prev1ending:values.prev1starting?values.prev1starting[1].format():"",
            prev1starting:values.prev1starting?values.prev1starting[0]?.format():"",
            prev2:values.prev2?values.prev2: "",
            prev2ending:values.prev2ending?values.prev2starting[1]?.format():"",
            prev2starting:values.prev2starting?values.prev2starting[0]?.format():"",
            prev3:values.prev3?prev3: "",
            prev3ending:values.prev3starting?values.prev3starting[1]?.format():"",
            prev3starting:values.prev3starting?values.prev3starting[0]?.format():"",
            prev4: values.prev4??"",
            prev4ending: values.prev4starting?values.prev4starting[1]?.format():"",
            prev4starting:values.prev4starting?values.prev4starting[0]?.format():"",
            step:"employment information",
            current:3
          };
          this.$store.dispatch("updateUser",payload);
        }
      });
    },
  },
  computed: {
    ...mapState(["loading"]),
  },

};
</script>

<style></style>


