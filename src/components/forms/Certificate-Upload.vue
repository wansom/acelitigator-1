<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>Certificate Upload</h3>
      <div class="p-4 text-black rounded-lg my-2" style="width: fit-content;background-color:#FFFBE6;">
        <h5 >The inforamtion submitted will be used for the approval of your account</h5>
      </div>
      <a-form :form="form" layout="vertical">
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Date of Admission">
              <a-date-picker
                :disabled-date="disabledDate"
                v-decorator="[
                  'practise_start',
                  {
                    initialValue: user.practise_start,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter date of admission',
                      },
                    ],
                  },
                ]"
                placeholder="Select date"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Last Practicing Certificate Renewal Date">
              <a-date-picker
                :disabled-date="disabledDate"
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
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="National ID/Passport Number">
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
                placeholder=""
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Admission Number">
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
                addon-before="P105./"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Curriculum Vitae/Resume" style="width: 100%">
              <a-upload
                label="Curriculum Vitae/Resume"
                name="file"
                accept="application/pdf"
                :file-list="fileList"
                :remove="handleRemove"
                :before-upload="beforeUpload"
                v-decorator="[
                  'resume',
                  {
                    rules: [
                      {
                        required: false,
                        message: 'Please upload a resume or Curriculum vitae',
                      },
                    ],
                  },
                ]"
              >
                <a-button>
                  <a-icon type="upload" block /> Click to Upload
                </a-button></a-upload
              >
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Current Practice Certificate">
              <a-upload
                name="file"
                accept="application/pdf"
                :file-list="fileList3"
                :remove="handleRemove3"
                :before-upload="beforeUpload3"
                v-decorator="[
                  'practise_cert',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload a valid certificate',
                      },
                    ],
                  },
                ]"
              >
                <a-button> <a-icon type="upload" /> Click to Upload </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="National ID">
              <a-upload
                name="file"
                accept="application/pdf"
                :file-list="fileList2"
                :remove="handleRemove2"
                :before-upload="beforeUpload2"
                v-decorator="[
                  'national_id_doc',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload National ID or Passport',
                      },
                    ],
                  },
                ]"
              >
                <a-button>
                  <a-icon type="upload" block /> Click to Upload
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Admission Certificate">
              <a-upload
                name="file"
                accept="application/pdf"
                :file-list="fileList1"
                :remove="handleRemove1"
                :before-upload="beforeUpload1"
                v-decorator="[
                  'residence_evidence',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload proof of residence',
                      },
                    ],
                  },
                ]"
              >
                <a-button>
                  <a-icon type="upload" block /> Click to Upload
                </a-button></a-upload
              >
            </a-form-item>
            <a-form-item
              label="Proof of Residence(Utility bill or evidence of payment of branch dues to the Nigerian Bar Association)"
            >
              <a-upload
                name="file"
                accept="application/pdf"
                :file-list="fileList1"
                :remove="handleRemove1"
                :before-upload="beforeUpload1"
                v-decorator="[
                  'residence_evidence',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please upload proof of residence',
                      },
                    ],
                  },
                ]"
              >
                <a-button>
                  <a-icon type="upload" block /> Click to Upload
                </a-button></a-upload
              >
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div>
        <a-button type="dark" class="mx-10" @click="handlePrevious"
          >Previous Section
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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/database";
export default {
  props: ["user"],
  data() {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
      form: this.$form.createForm(this, { name: "coordinated" }),
      image: null,
      fileList: [],
      lskfile: [],
      admissionfile: [],
      idfile: [],
      uploading: false,
      fileList1: [],
      fileList2: [],
      fileList3: [],
      progress: 0,
      imageUrls: [],
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
      return current && current > moment().endOf("day");
    },
    // lsk cert
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    // certificate of admission upload
    beforeUpload1(file) {
      this.fileList1 = [...this.fileList1, file];
      return false;
    },
    handleRemove1(file) {
      const index = this.fileList1.indexOf(file);
      const newFileList = this.fileList1.slice();
      newFileList.splice(index, 1);
      this.fileList1 = newFileList;
    },
    // upload ID
    beforeUpload2(file) {
      this.fileList2 = [...this.fileList2, file];
      return false;
    },
    handleRemove2(file) {
      const index = this.fileList2.indexOf(file);
      const newFileList = this.fileList2.slice();
      newFileList.splice(index, 1);
      this.fileList2 = newFileList;
    },
    // practise cert upload
    beforeUpload3(file) {
      this.fileList3 = [...this.fileList3, file];
      return false;
    },
    handleRemove3(file) {
      const index = this.fileList3.indexOf(file);
      const newFileList = this.fileList3.slice();
      newFileList.splice(index, 1);
      this.fileList3 = newFileList;
    },

    transformFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement("canvas");
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    },
    handlePrevious() {
      this.$store.dispatch("changeStep", 3);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.$store.dispatch("changeLoading", true);
          const files = [
            values.practise_cert.file,
            values.residence_evidence.file,
            values.national_id_doc.file,
          ];
          if(values.resume){
            files.push(values.resume.file)
          }
          const promises = files.map((file) => {
            const storageRef = ref(storage, `certificates/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            return new Promise((resolve, reject) => {
              uploadTask.on("state_changed", null, reject, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  resolve(downloadURL);
                });
              });
            });
          });

          try {
            const downloadURLs = await Promise.all(promises);
            const payload = {
              practise_start: this.user.practise_start
                ? this.user.practise_start
                : values.practise_start.format(),
              cert_renewal_date: this.user.cert_renewal_date
                ? this.user.cert_renewal_date
                : values.cert_renewal_date.format() ?? "",
              national_id: values.national_id ?? "",
              practise_number: values.practise_number ?? "",
              practise_certificate: downloadURLs[0],
              resume: downloadURLs[3]??"",
              residence_evidence: downloadURLs[1],
              national_id_doc: downloadURLs[2],
              step: "certificates",
              current: 5,
            };
            await this.$store.dispatch("updateUser", payload);

            console.log("User information updated successfully.", downloadURLs);
          } catch (error) {
            console.error("Error updating user information:", error);
          }
          // Upload each file to Firebase Storage and get download URLs
          const fileRefs = [];

          this.$store.dispatch("changeLoading", false);
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
