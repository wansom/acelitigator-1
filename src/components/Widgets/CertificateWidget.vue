<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>Certificates</h3>
      <a-form :form="form" layout="vertical" hide-required-mark class="mb-5">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Practise Start Date">
              <a-date-picker
                v-decorator="[
                  'practise_start',
                  {
                    initialValue: user.practise_start,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter practise Start Date',
                      },
                    ],
                  },
                ]"
                placeholder="Select date"
                disabled
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Last Certificate Renewal Date">
              <a-date-picker
                v-decorator="[
                  'cert_renewal_date',
                  {
                    initialValue: user.cert_renewal_date,
                    rules: [
                      {
                        required: true,
                        message: 'select date',
                      },
                    ],
                  },
                ]"
                placeholder="select date"
                disabled
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="National ID/Passport">
              <a-input
                v-decorator="[
                  'national_id',
                  {
                    initialValue: user.national_id,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter national id',
                      },
                    ],
                  },
                ]"
                placeholder="Select date"
                style="width: 100%"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Practising Certificate Number">
              <a-input
                v-decorator="[
                  'practise_number',
                  {
                    initialValue: user.practise_number,
                    rules: [
                      {
                        required: true,
                        message: 'enter number',
                      },
                    ],
                  },
                ]"
                placeholder=""
                style="width: 100%"
                disabled
              />
            </a-form-item>
            <!-- <a-form-item label="Practising Certificate Number">
              <a-input
                v-decorator="[
                  'practise_number',
                  {
                    initialValue: user.practise_number,
                    rules: [
                      {
                        required: true,
                        message: 'enter number',
                      },
                    ],
                  },
                ]"
                placeholder=""
                style="width: 100%"
                disabled
              />
            </a-form-item> -->
          </a-col>
        </a-row>
        <a-row :gutter="16" class="mb-5">
          <a-col :span="6">
            <a-button
              icon="download"
              :href="user.practise_certificate"
              target="blank"
              >view Current Practice Certificate</a-button
            >
          </a-col>
          <!-- <a-col :span="6">
            <a-button icon="download" :href="user.resume" target="blank"
              >view Resume/CV</a-button
            >
          </a-col> -->
          <a-col :span="6">
            <a-button
              icon="download"
              :href="user.residence_evidence"
              target="blank"
              >View Admission Certificate</a-button
            >
          </a-col>
          <!-- <a-col :span="6">
            <a-button
              icon="download"
              :href="user.national_id_doc"
              target="blank"
              >view National ID</a-button
            >
          </a-col> -->
        </a-row>
      </a-form>
      <div style="margin-top: 40px">
        <a-button
          class="mx-10"
          @click="
            () => {
              handleSubmit('declined');
            }
          "
          :loading="loading"
          >Decline Request
        </a-button>
        <a-button
          type="primary"
          @click="
            () => {
              handleSubmit('approved');
            }
          "
          :loading="loading"
          >Approve Request
        </a-button>
      </div>
    </div>
    <a-modal v-model="visible" title="Add Comments" on-ok="handleOk">
          <template slot="footer">
            <a-button key="back" @click="onClose"> Close </a-button>
            <a-button
            
              key="submit"
              type="primary"
              :loading="loading"
              @click="handleChange"
            >
              Submit
            </a-button>
            
          </template>
          <div>         
            <input type="text" id="comment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add comment" v-model="comments" />
        </div>
        </a-modal>
  </a-card>
</template>

<script>
import router from "../../router/index";
import { arrayUnion } from "@firebase/firestore";
import { updateRequest } from "../../database/firestore";
// import PDFViewer from "pdf-viewer-vue";
export default {
  props: ["user"],
  components: {},
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
      form: this.$form.createForm(this, { name: "coordinated" }),
      loading: false,
      visible: false,
      comments:'',
      url: "",
      approveStatus:''
    };
  },
  watch: {
    startValue(val) {
    },
    endValue(val) {
    },
  },
  methods: {
    handleDownload() {},
    viewPDF(value) {
      this.url = value;
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
    handleChange() {
      this.loading = true;
      const payload = {
        status: this.approveStatus == "approved" ? "active" : "declined",
        date_joined:new Date(),
        subscription_date: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toDateString(),
        notifications: arrayUnion({
          notification: `your account has been updated successfully`,
          date: new Date(),
        }),
      };
      
      updateRequest(this.user.uid, payload).then(() => {
        router.push("/dashboard");
        if (this.approveStatus == "declined") {
          this.$store.dispatch("sendMail", {
            name: this.user.first_name,
            email: this.user.email,
            subject: "Dial A Lawyer Account",
            content: `Your account request has been declined for the following reason:${this.comments}`,
          });
        } else {
          this.$store.dispatch("sendMail", {
            name: this.user.first_name,
            email: this.user.email,
            subject: "Dial A Lawyer Account",
            content: this.comments?`Your account request has been activated successfully. You have an active subscription valid till ${new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            )}. Message from admin:${this.comments}`: `Your account request has been activated successfully. You have an active subscription valid till ${new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            )}`,
          });
        }

        this.loading = false;
      });
    },
    handlePrevious() {},
    handleSubmit(status) {
      this.visible=true
      this.approveStatus=status

    },
  },
  computed: {},
  mounted() {},
};
</script>

<style></style>
