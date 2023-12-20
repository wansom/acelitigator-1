<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3 class="text-lg my-10">Employment Information</h3>
      <p>
        Please provide us with the information of your current and past
        employemnt
      </p>
      <a-form :form="form" layout="vertical">
        <h5 class="my-5">Your Current work place</h5>
        <a-row :gutter="16">
          <a-col :span="24" :md="8">
            <a-form-item label="Company">
              <a-input
                v-decorator="[
                  'current_employer',
                  {
                    initialValue: user.current_employer,
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder="current company"
                ><a-tooltip
                  slot="suffix"
                  title="Enter Freelance if currently unemployed.you can also use your own firm"
                >
                  <a-icon
                    type="info-circle"
                    style="color: rgba(0, 0, 0, 0.45)"
                  />
                </a-tooltip>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Position">
              <a-input
                v-decorator="[
                  'current_position',
                  {
                    initialValue: user.current_position,
                    rules: [{ required: true, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
                >
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Starting Date">
              <a-date-picker
                :disabled-date="disabledDate"
                v-decorator="[
                  'current_starting',
                  {
                    initialValue: user.current_starting,
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
        <h5 class="my-10">Your Previous Work place (optional)</h5>
   
        <a-row type="flex" :gutter="16">
          <a-col :span="24" :md="8">
            <a-form-item label="Company(Optional)">
              <a-input
                v-decorator="[
                  'prev2',
                  {
                    initialValue: user.prev2,
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ]"
                placeholder="company"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Position(Optional)">
              <a-input
                v-decorator="[
                  'prev2_position',
                  {
                    initialValue: user.prev2_position,
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Dates(Optional)">
              <a-month-picker
              :disabled-date="disabledStartDate"
              v-decorator="[
                  'prev2starting',
                  { initialValue: user.prev2starting,
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
                  'prev2ending',
                  { initialValue: user.prev2ending,
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
          <a-col :span="24" :md="8">
            <a-form-item label="Company(Optional)">
              <a-input
                v-decorator="[
                  'prev3',
                  {
                    initialValue: user.prev3,
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ]"
                placeholder="company"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Position(Optional)">
              <a-input
                v-decorator="[
                  'prev3_position',
                  {
                    initialValue: user.prev3_position,
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Dates(Optional)">
              <a-month-picker
              :disabled-date="disabledStartDate"
              v-decorator="[
                  'prev3starting',
                  { initialValue: user.prev3starting,
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
                  'prev3ending',
                  { initialValue: user.prev3ending,
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
        <a-row type="flex" :gutter="16">
          <a-col :span="24" :md="8">
            <a-form-item label="Company(Optional)">
              <a-input
                v-decorator="[
                  'prev4',
                  {
                    initialValue: user.prev4,
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ]"
                placeholder="company"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
            <a-form-item label="Position(Optional)">
              <a-input
                v-decorator="[
                  'prev4_position',
                  {
                    initialValue: user.prev4_position,
                    rules: [{ required: false, message: 'Field is required' }],
                  },
                ]"
                placeholder=""
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="8">
              <a-form-item label="Dates(Optional)">
              <a-month-picker
              :disabled-date="disabledStartDate"
              v-decorator="[
                  'prev4starting',
                  { initialValue: user.prev4starting,
                    rules: [
                      { required: false, message: 'Field is required'},
                    ],
                  },
                ]"
                format="YYYY-MM"
                placeholder="Start Date"
                @change="setStartDate"
                @openChange="handleStartOpenChange4"
                class="mx-2"
              />
              <a-month-picker
              :disabled-date="disabledEndDate"
              v-decorator="[
                  'prev4ending',
                  { initialValue: user.prev4ending,
                    rules: [
                      { required: false, message: 'Field is required' },
                    ],
                  },
                ]"
                placeholder="End Date"
                :open="endOpen4"
                @openChange="handleEndOpenChange4"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div style="display: flex">
        <a-button type="dark" @click="handlePrevious" class="mx-10">
          Previous
        </a-button>
        <a-button
          type="primary"
          @click="handleSubmit"
          :loading="loading"
          disabled
          v-if="user.status === 'pending approval'"
          >Save and Continue
        </a-button>
        <a-button type="primary" @click="handleSubmit" :loading="loading" v-else
          >Save and Continue
        </a-button>
      </div>
    </div>
  </a-card>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  props: ["user"],
  data() {
    return {
      mode2: ["month", "month"],
      startValue: null,
      prev1startValue: null,
      prev1endValue: null,
      endOpen: false,
      endOpen2:false,
      endOpen3:false,
      endOpen4:false,
      disabledPrev1Date:null,
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
    moment,
    disabledDate(current) {
      const startMonth = moment().startOf("day");
      return current >startMonth;
    },
    disabledPrevDate(current) {
      const startMonth = moment().startOf("month");
      return current>startMonth;
    },
    disabledStartDate(current) {
      const startMonth = moment().startOf("month");
      return current >startMonth;
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
    handleEndOpenChange(current,open) {
      this.endOpen = open;
      this.disabledPrev1Date=current
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
    handleStartOpenChange4(open) {
      if (!open) {
        this.endOpen4 = true;
      }
    },
    handleEndOpenChange4(open) {
      this.endOpen4 = open;
    },
    onChange(val) {
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
            current_employer: values.current_employer ?? "",
            current_starting: typeof values.current_starting==='string'?values.current_starting:values.current_starting.format(),
            current_position:values.current_position??"",
           
            prev2_position:values.prev2_position??"",
            prev3_position:values.prev3_position??"",
            prev4_position:values.prev4_position??"",
            prev2: values.prev2 ? values.prev2 : "",
            prev2ending:typeof values.prev2ending==='string'?values.prev2ending:
              values.prev2ending?.format()??"",
            prev2starting: typeof values.prev2starting==='string'?values.prev2starting
              :values.prev2starting?.format()??""
              ,
            prev3: values.prev3 ? values.prev3 : "",
            prev3ending:typeof values.prev3ending==='string'?values.prev3ending:
              values.prev3ending?.format()??"",
            prev3starting: typeof values.prev3starting==='string'?values.prev3starting:
               values.prev3starting?.format()??""
              ,
            prev4: values.prev4 ?? "",
            prev4ending:typeof values.prev4ending==='string'?values.prev4ending:
               values.prev4ending?.format()??""
              ,
            prev4starting:typeof values.prev4starting==='string'
              ?values.prev4starting: values.prev4starting?.format()??""
              ,
            step: "employment information",
            current: 4,
          };
          console.log(payload)
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