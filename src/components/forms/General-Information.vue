<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3 class="text-lg mb-5">General Information</h3>
      <a-form :form="form" layout="vertical">
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="First Name">
              <a-input
                v-decorator="[
                  'first_name',

                  {
                    initialValue: user.first_name,

                    rules: [
                      { required: true, message: 'Please enter user name' },
                    ],
                  },
                ]"
                placeholder="Please enter your first name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            <a-form-item label="Last Name">
              <a-input
                v-decorator="[
                  'last_name',
                  {
                    initialValue: user.last_name,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your last name',
                      },
                    ],
                  },
                ]"
                placeholder="last name"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Email">
              <a-input
                v-decorator="[
                  'email',
                  {
                    initialValue: user.email,
                    rules: [
                      { required: true, message: 'Please select your email' },
                    ],
                  },
                ]"
                placeholder="Please a valid email"
                type="email"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Phone Number">
              <a-input
                v-decorator="[
                  'phone',
                  {
                    initialValue: user.phone,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your phone number',
                      },
                    ],
                  },
                ]"
                placeholder="Please enter a valid phone number"
                type="email"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Primary practice Location(State)">
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
            <a-form-item label="Other Sates where you practice(Optional)"><a-tooltip
                  slot="suffix"
                  title="Enter Freelance if currently unemployed"
                >
                  <a-icon
                    type="info-circle"
                    style="color: rgba(0, 0, 0, 0.45)"
                  />
                </a-tooltip>
              <a-select
                mode="tags"
                style="width: 100%"
                placeholder="Type or search"
                v-decorator="[
                  'other_counties',
                  {
                    initialValue: user.other_counties,
                    rules: [{ required: false, message: 'field is required' }],
                  },
                ]"
              >
                <a-select-option v-for="i in counties" :key="i">
                  {{ i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Website(Optional)">
              <a-input
                v-decorator="[
                  'website',
                  {
                    initialValue: user.website,
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
          <a-col :span="24" :md="12">
            <a-form-item label="Job Title">
              <a-input
                v-decorator="[
                  'job_title',
                  {
                    initialValue: user.job_title,
                    rules: [
                      {
                        required: true,
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
            <a-form-item label="Short Biography">
              <a-textarea
                v-decorator="[
                  'biography',
                  {
                    initialValue: user.biography,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter your biography',
                      },
                    ],
                  },
                ]"
                :rows="4"
                placeholder="Enter a short biography"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24"  :md="12">
            <a-form-item label="Profile Picture">
              <a-upload-dragger
                accept="image/png, image/jpeg"
                :multiple="false"
                list-type="picture"
                :before-upload="handleBeforeUpload"
                :show-upload-list="false"
                :custom-request="uploadProfilePicture"
              >
                <a-progress
                  type="circle"
                  :percent="uploadProgress"
                  :width="80"
                  v-if="uploadProgress"
                />
                <div v-else>
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </div>
              </a-upload-dragger>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            
            <a-avatar :src="user.profile_photo" :size="160"  v-if="user.profile_photo"/>
            <a-avatar icon="user" v-else  :size="160"/>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="8">
            <a-form-item label="Current Workplace">
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
                  title="Enter Freelance if currently unemployed"
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
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label=" Supreme Court Enrollment Number.">
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
        
        <a-checkbox @change="changeTerms" class="mb-3" :checked="terms">
          I understand that the information submitted on this page will be visibile to all
          potential clients
        </a-checkbox>
      </a-form>
      <div>
        <a-button
          type="primary"
          @click="handleSubmit"
          :loading="loading"
          disabled
          v-if="user.status === 'pending approval'||!terms" 
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
import { storage } from "../../database";
import { updateAdvocate } from "../../database/firestore";
import moment from "moment";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
export default {
  props: ["user"],
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      image: null,
      fileList: [],
      uploading: false,
      uploadProgress:0,
      isFormDirty: false,
      terms: false,
    };
  },

  methods: {
    moment,
    disabledDate(current) {
      // Can not select days before today and today
      return current && current > moment().endOf("day");
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },

    changeTerms(){
      this.terms =!this.terms
    },
    
		updateFileProgress( progress) {
			this.uploadProgress=progress
		},
    handleBeforeUpload(file) {
      // Validate the file type, size, etc., if needed
    },
    uploadProfilePicture({ file }) {
      const storageRef = ref(storage, "profilePictures/" + file.name);
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
          message.error("Failed to upload profile picture");
          console.error(error);
        },
        () => {
          // Get the download URL of the uploaded file
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateAdvocate(this.user.id, { profile_photo: downloadURL });
          });
        }
      );

      return false; // Prevent default upload behavior
    },
    async handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
            const payload = {
            first_name: values.first_name ?? "",
            last_name: values.last_name ?? "",
            phone: values.phone ?? "",
            job_title: values.job_title ?? "",
            biography: values.biography ?? "",
            email: values.email ?? "",
            location: values.location ?? "",
            website: values.website ?? "",
            specialisation: values.specialisation ?? "",
            practise_areas: values.practise_areas.slice(0, 3) ?? [],
            other_counties: values.other_counties,
            current_position:values.current_position??"",
            step: "certificates",
            current: 2,
            twitter: values.twitter ?? "",
            linkedIn: values.linkedIn ?? "",
            current_employer: values.current_employer ?? "",
            current_starting: values.current_starting.format() ?? "",
            practise_number: values.practise_number ?? "",
          };
           this.$store.dispatch("updateUser", payload);
          // this.$store.dispatch("changeLoading",true)
          // return new Promise(resolve => {
          //   listenDocumentUploadProgress(
          //   this.user.id,
          //   values.photo.file,
          //   values.photo.file.type,
          //   (progress) => {
          //     this.updateFileProgress( progress);
          //   },
          //   (_error) => {
          //     resolve(false);
          //   },
          //   async (url) => {
            
          //     console.log(url)
 
        

          //     resolve(true);
          //   }
          // );
          
          // })
         
        }
      });
    },
    handleChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
  },
  computed: {
    ...mapState(["loading", "counties", "practiseAreas"]),
  },
  mounted() {},
};
</script>

<style></style>
