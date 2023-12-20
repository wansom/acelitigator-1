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
      url: "",
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
    handleChange() {},
    handlePrevious() {},
    handleSubmit(status) {
      this.loading = true;
      const payload = {
        status: status == "approved" ? "active" : "declined",
        date_joined:new Date(),
        subscription_date: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toDateString(),
        notifications: arrayUnion({
          notification: `your account has been activated successfully`,
          date: new Date(),
        }),
      };
      
      updateRequest(this.user.uid, payload).then(() => {
        router.push("/dashboard");
        if (status == "declined") {
          this.$store.dispatch("sendMail", {
            name: this.user.first_name,
            email: this.user.email,
            subject: "Dial A Lawyer Account",
            content:
              "Your account request has been declined please contact admin for more information",
          });
        } else {
          this.$store.dispatch("sendMail", {
            name: this.user.first_name,
            email: this.user.email,
            subject: "Dial A Lawyer Account",
            content: `Your account request has been activated successfully. You have an active subscription valid till ${new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            )}`,
          });
        }

        this.loading = false;
      });
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style></style>
