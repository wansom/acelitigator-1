<template>
  <a-card
    :bordered="false"
    class="header-solid h-full p-5 shadow-lg rounded-lg "
  >
    <div>
      <a-form :form="form" layout="vertical" >
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Primary Office Location">
              <a-select
                v-decorator="[
                  'location',
                  {
                    initialValue: user.location,
                    rules: [
                      { required: true, message: 'Please enter your location' },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="county in counties"
                  :key="county"
                  :value="county"
                >
                  {{ county }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Languages"
              ><a-tooltip
                slot="suffix"
                title="Enter all Languages your firm can handle cases in"
              >
                <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
              </a-tooltip>
              <a-select
                mode="multiple"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'languages',
                  {
                    initialValue: user.languages,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in languages" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Address">
              <a-input
                v-decorator="[
                  'address',
                  {
                    initialValue: user.address,
                    rules: [
                      {
                        required: false,
                        message: 'Please enter your address',
                      },
                    ],
                  },
                ]"
                style="width: 100%"
                placeholder="address"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Free Consultation">
              <a-select
                v-decorator="[
                  'consultation',
                  {
                    initialValue: user.consultation,
                    rules: [
                      { required: true, message: 'Field is required' },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="county in freeConsultation"
                  :key="county"
                  :value="county"
                >
                  {{ county }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Primary Practice Area">
              <a-select
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'specialisation',
                  {
                    initialValue: user.specialisation,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in practiseAreas" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item
              label="Other Practice Areas (Select upto 3 that apply)"
            >
              <a-select
                mode="tags"
                :maxTagCount="3"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'practise_areas',
                  {
                    initialValue: user.practise_areas,
                    rules: [{ required: true, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in practiseAreas" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Your LinkedIn link(Optional)">
              <a-input
                v-decorator="[
                  'linkedIn',
                  {
                    initialValue: user.linkedIn,
                    rules: [
                      {
                        required: false,
                        message: 'Filed is required',
                      },
                    ],
                  },
                ]"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Your Twitter Link(Optional)">
              <a-input
                v-decorator="[
                  'twitter',
                  {
                    initialValue: user.twitter,
                    rules: [
                      {
                        required: false,
                        message: 'Please enter your job title',
                      },
                    ],
                  },
                ]"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Registration Certificate">
              <a-upload-dragger
              v-decorator="[
                  'reg_certificate',
                  {
                    initialValue: user.reg_certificate,
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
            <a-progress :percent="uploadProgress" v-if="uploadProgress>0" />
          </a-col>
        </a-row>
        <a-checkbox @change="changeTerms" class="mb-3" :checked="terms">
          I understand that the information submitted on this page will be
          visibile to all potential clients
        </a-checkbox>
      </a-form>
      <div>
        <a-button
          type="primary"
          @click="handleSubmit"
          :loading="loading"
          :disabled="user.status === 'pending approval' || !terms"
          >Save and Continue
        </a-button>
        <!-- <a-button type="primary" @click="handleSubmit" :loading="loading" v-else
          >Save and Continue
        </a-button> -->
      </div>
    </div>
  </a-card>
</template>

<script>
import { mapState } from "vuex";
import { storage } from "../../database";
import { Cropper, Preview } from "vue-advanced-cropper";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from "moment";
import { updateAdvocate } from "../../database/firestore";
function getMimeType(file, fallback = null) {
	const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
       header += byteArray[i].toString(16);
    }
	switch (header) {
        case "89504e47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}
export default {
  props: ["user"],
  components: {
    Cropper,
    Preview,
    // other components...
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      image: {
        src: null,
        type: null,
      },
      fileList: [],
      uploading: false,
      isFormDirty: false,
      uploadProgress: 0,
      terms: false,
      resultImage: null,
      coordinates: {
        width: 200,
        height: 200,
      },
      freeConsultation:[
'No Free Consultation',
'15 minutes',
'30 Minutes',
'45 Minutes',
'1 Hour'
      ],
      languages:[
        'English',
        'Kiswahili',
        'French',
        'Arabic'
      ],
      img: "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      result: {
        coordinates: null,
        image: null,
      },
      showModal: false,
    };
  },

  methods: {
    moment,
    disabledDate(current) {
      // Can not select days before today and today
      return current && current > moment().endOf("day");
    },
    changeTerms() {
      this.terms = !this.terms;
    },
    crop() {
			const { canvas } = this.$refs.cropper.getResult();
			canvas.toBlob((blob) => {
				// Do something with blob: upload to a server, download and etc.
			}, this.image.type);
		},
    reset() {
      this.image = {
        src: null,
        type: null,
      };
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
          this.uploadProgress = Math.round(progress);
        },
        (error) => {
          // Handle the upload error
          message.error("Failed to upload");
          console.error(error);
        },
        () => {
          // Get the download URL of the uploaded file
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateAdvocate(this.user.id, { reg_certificate: downloadURL });
          });
        }
      );

      return false; // Prevent default upload behavior
    },
    handleCancel() {
      this.showModal = false;
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
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

    updateFileProgress(progress) {
      this.uploadProgress = progress;
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const payload = {
            address: values.address ?? "",
            location: values.location ?? "",
            languages: values.languages ?? "",
            specialisation: values.specialisation ?? "",
            practise_areas: values.practise_areas ?? [],
            step: "offices",
            current: 3,
            consultation:values.consultation,
              
            twitter: values.twitter ?? "",
            linkedIn: values.linkedIn ?? "",
          };

          this.$store.dispatch("updateUser", payload);
        }
      });
    },
    handleChange(value) {
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
  computed: {
    ...mapState(["loading", "counties", "practiseAreas"]),
  },
  destroyed() {
		if (this.image.src) {
			URL.revokeObjectURL(this.image.src)
		}
	},
  mounted() {},
};
</script>

<style scoped>
.cropper {
  height: 200px;
  width: 200px;
  background: #ddd;
}
</style>
