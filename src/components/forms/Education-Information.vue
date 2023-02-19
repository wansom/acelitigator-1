<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>Education Information</h3>
      <p>Please provide us with your education history</p>
      <a-form :form="form" layout="vertical">
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
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label=" Dates">
              <a-range-picker 
              :disabled-date="disabledDate"
                v-decorator="[
                  'law_starting',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder="Start"
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
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Dates">
              <a-range-picker 
              :disabled-date="disabledDate"
                v-decorator="[
                  'postgraduate_diploma_start',
                  {
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="14">
            <a-form-item label="Any other Institution">
              <a-input
                v-decorator="[
                  'school2',
                  { initialValue: user.school2,
                    rules: [{ required: false, message: 'field is required' }],
                  },
                ]"
                placeholder="Institution"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="Dates">
              <a-range-picker 
           
                v-decorator="[
                  'school2_start',
                  {
                    rules: [{ required: false, message: 'field is required' }],
                  },
                ]"
                placeholder="Start"
              />
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
      this.$store.dispatch("changeStep", 2);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const payload = {
            law_ending: values.law_starting[1]?.format() ?? "",
            law_school: values.law_school ?? "",
            law_starting: values.law_starting[0]?.format() ?? "",
            postgraduate_diploma: values.postgraduate_diploma ?? "",
            postgraduate_diploma_end: values.postgraduate_diploma_start[1]?.format() ?? "",
            postgraduate_diploma_start: values.postgraduate_diploma_start[0]?.format()?? "",
            school2: values.school2 ?? "",
            school2_end:  values.school2_start?values.school2_start[0]?.format():"",
            school2_start: values.school2_start?values.school2_start[1]?.format():"",
            step:"education Information ",
            current:4
          };
          this.$store.dispatch("updateUser", payload);

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
