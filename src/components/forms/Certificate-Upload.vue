<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3 class="my-10 text-lg">Certificate Upload</h3>
      <a-form :form="form" layout="vertical">
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
            <a-form-item label="Current Practice Certificate">
              <a-upload-dragger
              v-decorator="[
                  'practise_certificate',
                  {
                    initialValue: user.practise_certificate,
                    rules: [{ required: true, message: 'Certificate  is required' }],
                  },
                ]"
                accept="application/pdf"
                :multiple="false"
                list-type="picture"
                :before-upload="handleBeforeUpload"
                :show-upload-list="false"
                :custom-request="uploadPracticeCert"
              >

                <div >
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">
                    Click or drag file to this area to upload Certificate
                  </p>
                </div>
              </a-upload-dragger>
             
            </a-form-item>
            <a-progress :percent="uploadPracticeProgress" v-if="uploadPracticeProgress"/> 

            
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Admission Certificate">
              <a-upload-dragger
              v-decorator="[
                  'residence_evidence',
                  {
                    initialValue: user.residence_evidence,
                    rules: [{ required: true, message: 'Certificate  is required' }],
                  },
                ]"
                accept="application/pdf"
                :multiple="false"
                list-type="picture"
                :before-upload="handleBeforeUpload"
                :show-upload-list="false"
                :custom-request="uploadAdmissionCert"
              >

                <div >
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">
                    Click or drag file to this area to upload Certificate
                  </p>
                </div>
              </a-upload-dragger>
             
            </a-form-item>
            <a-progress :percent="uploadAdmissionProgress" v-if="uploadAdmissionProgress"/> 
          </a-col>
        </a-row>
        <a-checkbox @change="changeTerms" class="mb-3" :checked="terms">
          The inforamtion submitted will only be used for the approval of your account <a href="//https://firebasestorage.googleapis.com/v0/b/scanpal-f74da.appspot.com/o/Privacy%20Policy%20200223.docx?alt=media&token=bd536806-a1ac-4361-a56a-ddfca9885a8f">View privacy policy</a>
  </a-checkbox>
      </a-form>
      <div>
        <a-button type="dark" class="mx-10" @click="handlePrevious"
          >Previous Section
        </a-button>
        <a-button
          type="primary"
          @click="handleSubmit"
          :loading="loading"
          :disabled="user.status === 'pending approval'||!terms"
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
import { updateAdvocate } from '../../database/firestore';
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
      terms:false,
      uploadAdmissionProgress: 0,
      uploadPracticeProgress: 0,


    };
  },
  watch: {
    startValue(val) {
     return
    },
    endValue(val) {
return;
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
    changeTerms(){
      this.terms =!this.terms
    },
    handleBeforeUpload(file) {
      // Validate the file type, size, etc., if needed
    },
    uploadAdmissionCert({ file }) {
      const storageRef = ref(storage, "certificates/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track the upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadAdmissionProgress = Math.round(progress);
        },
        (error) => {
          // Handle the upload error
          message.error("Failed to upload profile picture");
          console.error(error);
        },
        () => {
          // Get the download URL of the uploaded file
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateAdvocate(this.user.id, { residence_evidence: downloadURL });
          });
        }
      );

      return false; // Prevent default upload behavior
    },
    uploadPracticeCert({ file }) {
      const storageRef = ref(storage, "certificates/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track the upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadPracticeProgress = Math.round(progress);
        },
        (error) => {
          // Handle the upload error
          message.error("Failed to upload profile picture");
          console.error(error);
        },
        () => {
          // Get the download URL of the uploaded file
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateAdvocate(this.user.id, { practise_certificate: downloadURL });
          });
        }
      );

      return false; // Prevent default upload behavior
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

    handlePrevious() {
      this.$store.dispatch("changeStep", 2);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const payload = {
              national_id: values.national_id ?? "",
              practise_number: values.practise_number ?? "",
              step: "certificates",
              current: 5,
            };
            await this.$store.dispatch("updateUser", payload);
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
