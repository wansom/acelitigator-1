<template>
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <div>
      <h3>General Information</h3>
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
          <a-col :span="24"  v-if="user.profile_photo">
            <img :src="user.profile_photo" alt="" style="height: 100px" />
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24"  :md="12">
            <a-form-item label="Profile Picture">
              <a-upload-dragger
                name="file"
                accept="image/png, image/jpeg"
                :multiple="false"
                list-type="picture"
                :transform-file="transformFile"
                :file-list="fileList"
                :remove="handleRemove"
                :before-upload="beforeUpload"
                v-decorator="[
                  'photo',
                  {
                    initialValue: user.profile_photo,
                    rules: [
                      { required: true, message: 'Please choose a photo' },
                    ],
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </a-upload-dragger>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="12">
            
            <a-avatar :src="user.profile_photo" :size="160"  v-if="user.profile_photo"/>
            <a-avatar icon="user" v-else  :size="160"/>
          </a-col>
        </a-row>
        <a-checkbox @change="changeTerms" class="mb-3" :checked="terms">
          The information submitted on this page will be visibile to all potential clients
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
import { listenDocumentUploadProgress} from "@/database/storage";
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
      terms:true
    };
  },

  methods: {
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
    changeTerms(){
      this.terms =!this.terms
    },
    
		updateFileProgress( progress) {
			this.uploadProgress=progress
		},
    async handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.$store.dispatch("changeLoading",true)
          return new Promise(resolve => {
            listenDocumentUploadProgress(
            this.user.id,
            values.photo.file,
            values.photo.file.type,
            (progress) => {
              this.updateFileProgress( progress);
            },
            (_error) => {
              resolve(false);
            },
            async (url) => {
            
              console.log(url)
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
            step: "general information",
            profile_photo: url,
            current: 2,
            twitter: values.twitter ?? "https://www.twitter.com/",
            linkedIn: values.linkedIn ?? "https://www.linkedin.com/",
          };
          this.$store.dispatch("updateUser", payload);

              resolve(true);
            }
          );
          
          })
         
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
