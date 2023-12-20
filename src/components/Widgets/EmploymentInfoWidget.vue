<template>
    <a-card
      :bordered="false"
      class="header-solid h-full"
      :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    >
      <div>
        <h3>Employment Information</h3>
        <!-- <p>
          Please provide us with the information of your current and past
          employemnt
        </p> -->
        <a-form :form="form" layout="vertical" hide-required-mark>
          <h5 class="my-5">Your Current Employer</h5>
          <a-row :gutter="16">
            <a-col :span="18">
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
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="Starting Date">
                <a-date-picker
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
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>
          <h5 class="my-10">Your Previous Employer</h5>
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
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                    'prev1starting',
                    { initialValue: user.prev1starting,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="Start"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-decorator="[
                    'prev1ending',
                    { initialValue: user.prev1ending,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  disabled
                />
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
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                    'prev2starting',
                    { initialValue: user.prev2starting,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="Start"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-decorator="[
                    'prev2ending',
                    { initialValue: user.prev2ending,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  disabled
                />
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
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                    'prev3starting',
                    { initialValue: user.prev3starting,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="Start"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-decorator="[
                    'prev3ending',
                    { initialValue: user.prev3ending,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  disabled
                />
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
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                    'prev4starting',
                    { initialValue: user.prev4starting,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="Start"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Ending Date">
                <a-date-picker
                  v-decorator="[
                    'prev4ending',
                    { initialValue: user.prev4ending,
                      rules: [
                        { required: false, message: 'Field is required' },
                      ],
                    },
                  ]"
                  placeholder="End"
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <!-- <div>
          <a-button type="" @click="handlePrevious" class="mx-10">
            Previous
          </a-button>
          <a-button type="primary" @click="handleSubmit"> Next </a-button>
        </div> -->
      </div>
    </a-card>
  </template>
  
  <script>
  import { mapState } from "vuex";
  const moment =require("moment");
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
       
      },
      endValue(val) {
     
      },
    },
    methods: {
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
      handlePrevious() {},
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
         
          if (!err) {
            const payload = {
              current_employer:values.current_employer?? "",
              current_starting: values.current_starting.format()??"",
  
              prev1:values.prev1?? "",
              prev1ending:values.prev1ending.format()?? "",
              prev1starting:values.prev1starting.format()??"",
              prev2:values.prev2?? "",
              prev2ending:values.prev2ending.format()??"",
              prev2starting: values.prev2starting?.format()??"",
              prev3:values.prev3?? "",
              prev3ending: values.prev3ending.format()??"",
              prev3starting: values.prev3starting.format()??"",
              prev4: values.prev4??"",
              prev4ending: values.prev4ending.format()??"",
              prev4starting:values.prev4starting.format()?? "",
              step:"employmentInfo"
            };
            this.$store.dispatch("updateUser",payload);
          }
        });
      },
    },
    computed: {
      ...mapState([]),
    },
    mounted() {
    },
  };
  </script>
  
  <style></style>
  