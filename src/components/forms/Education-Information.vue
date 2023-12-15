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
          <a-col :span="24" :md="14">
            <a-form-item label=" Law School Education">
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
          <a-col :span="24" :md="8">
            <a-form-item label=" Dates">
              <a-month-picker
              :disabled-date="disabledPrevDate"
              v-decorator="[
                  'law_starting',
                  { initialValue: user.law_starting,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                format="YYYY-MM"
                placeholder="Start Date"
                @change="setStartDate"
                @openChange="handleStartOpenChange"
                class="mx-2"
              />
              <a-month-picker
              :disabled-date="disabledEndDate"
              v-decorator="[
                  'law_ending',
                  { initialValue: user.law_ending,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="End Date"
                :open="endOpen"
                @openChange="handleEndOpenChange"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="24" :md="14">
            <a-form-item label="Undergraduate Education">
              
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
          <a-col :span="24" :md="8">
            <a-form-item label="Dates">
         
              <a-month-picker
              :disabled-date="disabledPrevDate"
              v-decorator="[
                  'postgraduate_diploma_start',
                  { initialValue: user.postgraduate_diploma_start,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                format="YYYY-MM"
                placeholder="Start Date"
                @change="setStartDate"
                @openChange="handleStartOpenChange2"
                class="mx-2"
              />
              <a-month-picker
              :disabled-date="disabledEndDate"
              v-decorator="[
                  'postgraduate_diploma_start',
                  { initialValue: user.postgraduate_diploma_start,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="End Date"
                :open="endOpen2"
                @openChange="handleEndOpenChange2"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" :gutter="16">
          <a-col :span="24" :md="14">
            <a-form-item label="Post Graduate Education.(Optional)">
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
          <a-col :span="24" :md="8">
            <a-form-item label="Dates Attended (Optional)">
              <a-month-picker
              :disabled-date="disabledPrevDate"
              v-decorator="[
                  'school2_start',
                  { initialValue: user.school2_start,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                format="YYYY-MM"
                placeholder="Start Date"
                @change="setStartDate"
                @openChange="handleStartOpenChange3"
                class="mx-2"
              />
              <a-month-picker
              :disabled-date="disabledEndDate"
              v-decorator="[
                  'school2_end',
                  { initialValue: user.school2_end,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="End Date"
                :open="endOpen3"
                @openChange="handleEndOpenChange3"
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
      mode2: ["month", "month"],
      startValue: null,
      disabledPrev1Date:null,
      endOpen: false,
      endOpen2:false,
      endOpen3:false,
      endOpen: false,
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  watch: {
    startValue(val) {
return;
    },
    endValue(val) {
      return
    },
  },
  methods: {
    moment,
    disabledDate(current) {
      const startMonth = moment().startOf("month");
      return current < startMonth;
    },
    disabledPrevDate(current) {
      const startMonth = moment().startOf("month");
      return current>startMonth;
    },
    handleRangeChange(dates) {
      const [startDate, endDate] = dates;
    },
    disabledStartDate(startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate(endValue) {
      const startMonth = this.disabledPrev1Date;
      return endValue <startMonth;
    },
    setStartDate(value){
      this.disabledPrev1Date=value
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open;
    },
    handleStartOpenChange2(open) {
      if (!open) {
        this.endOpen2 = true;
      }
    },
    handleEndOpenChange2(open) {
      this.endOpen2 = open;
    },
    handleStartOpenChange3(open) {
      if (!open) {
        this.endOpen3 = true;
      }
    },
    handleEndOpenChange3(open) {
      this.endOpen3 = open;
    },
    handlePrevious() {
      this.$store.dispatch("changeStep", 2);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const payload = {
            law_ending: values.law_ending?.format() ?? "",
            law_school: values.law_school ?? "",
            law_starting: values.law_starting?.format() ?? "",
            postgraduate_diploma: values.postgraduate_diploma ?? "",
            postgraduate_diploma_end: values.postgraduate_diploma_start?.format() ?? "",
            postgraduate_diploma_start: values.postgraduate_diploma_end?.format()?? "",
            school2: values.school2 ?? "",
            school2_end:  values.school2_start?values.school2_start?.format():"",
            school2_start: values.school2_start?values.school2_end?.format():"",
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
