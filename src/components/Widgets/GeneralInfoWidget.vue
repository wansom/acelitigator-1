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
            <a-col :span="12">
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
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
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
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
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
                  disabled
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
                          message: 'Please select your phone number',
                        },
                      ],
                    },
                  ]"
                  placeholder="Please a valid phone number"
                  type="email"
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>
          
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Location">
                <a-input
                  v-decorator="[
                    'location',
                    {
                      initialValue: user.location,
                      rules: [
                        { required: true, message: 'Please enter your location' },
                      ],
                    },
                  ]"
                  placeholder=""
                  disabled
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Job Ttile">
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
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Practice Areas">
                <a-select
                  mode="tags"
                  style="width: 100%"
                  placeholder="Type or search"
                  v-decorator="[
                    'specialisation',
                    { initialValue: user.specialisation,
                      rules: [
                        { required: true, message: 'field is required' },
                      ],
                    },
                  ]"
                   disabled
                >
                  <a-select-option
                    v-for="i in 25"
                    :key="(i + 9).toString(36) + i"
                  >
                    {{ (i + 9).toString(36) + i }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Website">
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
                   disabled
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
                  disabled
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-item label="Profile Picture">
            <img :src="user.profile_photo" alt="" style="height:120px;">
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <!-- <div>
          <a-button type="primary" @click="handleSubmit"
            >Next
          </a-button>
        </div> -->
      </div>
    </a-card>
  </template>
  
  <script>
  import { mapState } from "vuex";
  import {auth} from "../../database/index"
  export default {
    props:['user'],
    data() {
      return {
        formLayout: "horizontal",
        form: this.$form.createForm(this, { name: "coordinated" }),
        image:null,
        fileList: [],
        uploading: false,
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
      async handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields(async(err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
            const ref = fb.storage.ref();
        const url = await ref
          .child(values.photo.file.name)
          .put(values.photo.file, values.photo.file.type)
          .then((snapshot) => snapshot.ref.getDownloadURL());
            const payload = {
              first_name:values.first_name?? "",
              last_name: values.last_name?? "",
              phone: values.phone??"",
              job_title:values.job_title?? "",
              biography: values.biography?? "",
              email: values.email??"",
              location:values.location?? "",
              webiste: values.webiste??"",
              specialisation: values.specialisation?? "",
              step:"generalInfo",
              profile_photo:url
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
      ...mapState(["general_information",]),
    },
    mounted(){
      let user =auth.currentUser
      this.$store.dispatch("fetchUserProfile",user)
    }
  };
  </script>
  
  <style></style>
  