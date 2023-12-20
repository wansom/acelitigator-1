<template>
    <a-card
      :bordered="false"
      class="header-solid h-full"
      :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    >
      <div>
        <h3>Education Information</h3>
        <p>Please provide us with your education history</p>
        <a-form :form="form" layout="vertical" hide-required-mark>
          <h5 class="my-10">Education History</h5>
          <a-row type="flex" :gutter="16">
            <a-col :span="14">
              <a-form-item label="Law School">
                <a-input
                  v-decorator="[
                    'law_school',
                    { initialValue: user.law_school,
                      rules: [
                        {
                          required: true,
                          message: 'Please enter your law school',
                        },
                      ],
                    },
                  ]"
                  placeholder="Institution"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                    'law_starting',
                    { initialValue: user.law_starting,
                      rules: [{ required: true, message: 'Field is required' }],
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
                    'law_ending',
                    { initialValue: user.law_ending,
                      rules: [{ required: true, message: 'Field is required' }],
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
              <a-form-item label="Postgraduate Diploma">
                <a-input
                  v-decorator="[
                    'postgraduate_diploma',
                    { initialValue: user.postgraduate_diploma,
                      rules: [{ required: true, message: 'Field is required' }],
                    },
                  ]"
                  placeholder="Institution"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                   'postgraduate_diploma_start' ,
                    { initialValue: user.postgraduate_diploma_start,
                      rules: [{ required: true, message: 'Field is required' }],
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
                    'postgraduate_diploma_end',
                    { initialValue: user.postgraduate_diploma_end,
                      rules: [{ required: true, message: 'Field is required' }],
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
              <a-form-item label="Institution">
                <a-input
                  v-decorator="[
                    'school2',
                    { initialValue: user.school2,
                      rules: [{ required: false, message: 'field is required' }],
                    },
                  ]"
                  placeholder="Institution"
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="4">
              <a-form-item label="Starting Date">
                <a-date-picker
                  v-decorator="[
                    'school2_start',
                    { initialValue: user.school2_start,
                      rules: [{ required: false, message: 'field is required' }],
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
                    'school2_end',
                    { initialValue: user.school2_end,
                      rules: [{ required: false, message: 'field is required' }],
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
          <a-button type="primary" @click="handleSubmit">Next </a-button>
        </div> -->
      </div>
    </a-card>
  </template>
  
  <script>

  import { mapState } from "vuex";
  const moment = require("moment");
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
              law_ending: values.law_ending?.format() ?? "",
              law_school: values.law_school ?? "",
              law_starting: values.law_starting?.format() ?? "",
              school1: values.school1 ?? "",
              school1_ending: values.school1_ending?.format() ?? "",
              school1_starting: values.school1_starting?.format()?? "",
              school2: values.school2 ?? "",
              school2_end: values.school2_end?.format() ?? "",
              school2_start: values.school2_start?.format()??"",
              school3: values.school3 ?? "",
              school3_end: values.school3_end?.format() ?? "",
              school3_start: values.school3_start?.format() ?? "",
              step:"educationInfo"
            };
            this.$store.dispatch("updateUser", payload);
  
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
  