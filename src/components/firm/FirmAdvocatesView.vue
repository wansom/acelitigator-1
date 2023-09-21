<template>

	<!-- Authors Table Card -->
	<a-card :bordered="false" class="header-solid h-full">
    <template #title>
			<a-row type="flex" align="middle">
				<a-col :span="24" :md="12">
					<h5 class="font-semibold m-0">{{title}}</h5>
				</a-col>
				<a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
					<a-button type="primary" @click="showDrawer">Add Team Member</a-button>
				</a-col>
			</a-row>
		</template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/images/stella.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <!-- <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div> -->
    </div>
    <a-drawer
      title="Add Team Member"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Name">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Job Title">
              <a-input
                v-decorator="[
                  'job_title',
                  {
                    rules: [{ required: true, message: 'please enter job tile' }],
                  },
                ]"
                style="width: 100%"
                placeholder=""
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Short Biography">
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [{ required: true, message: 'Please enter url description' }],
                  },
                ]"
                :rows="4"
                placeholder="please enter url description"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24" :md="12">
            <a-form-item label="Company Logo ">
              <input
              class="block w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              accept="image/*"
              @change="loadImage"
            />
              
            </a-form-item>
            <a-progress :percent="uploadProgress" v-if="uploadProgress>0"  />
          </a-col>
          <a-col :span="24" :md="12">
            <a-avatar
              :src="user.photo"
              :size="160"
              v-if="user.photo"
            />
            <a-avatar icon="user" v-else :size="160" />
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose">
          Submit
        </a-button>
      </div>
    </a-drawer>
</div>
	</a-card>
	<!-- / Authors Table Card -->

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
	export default ({
    props: ["user"],
    data() {
    return {
      visible: false,
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
      img: "https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      result: {
        coordinates: null,
        image: null,
      },
      showModal: false,
    };
  },
  components: {
    Cropper,
    Preview,
    // other components...
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
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
    loadImage(event) {
			const { files } = event.target;
			if (files && files[0]) {
				// 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
				if (this.image.src) {
					URL.revokeObjectURL(this.image.src)
				}
				// 2. Create the blob link to the file to optimize performance:
				const blob = URL.createObjectURL(files[0]);
				// this.image = {
				//    src: blob,
				//    type: files[0].type
				// }
				
				// Create a new FileReader to read this image binary data
				const reader = new FileReader();
        
				// Define a callback function to run, when FileReader finishes its job
				reader.onload = (e) => {
					// Note: arrow function used here, so that "this.image" refers to the image of Vue component
					this.image = {
						// Set the image source (it will look like blob:http://example.com/2c5270a5-18b5-406e-a4fb-07427f5e7b94)
						src: blob,
						// Determine the image type to preserve it during the extracting the image from canvas:
						type: getMimeType(e.target.result, files[0].type),
					};
				};
   
				// Start the reader job - read file as a data url (base64 format)
				reader.readAsArrayBuffer(files[0]);
        this.showModal = true;
			}
		},
    uploadToFirestore() {
      const { canvas } = this.$refs.cropper.getResult();
      if (canvas) {
        canvas.toBlob((blob) => {
          const storageRef = ref(
            storage,
            "logos/" + this.user.first_name
          );
          const uploadTask = uploadBytesResumable(storageRef, blob);

          uploadTask.on(

            "state_changed",
            (snapshot) => {
              this.showModal = false;
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
                updateAdvocate(this.user.id, { logo: downloadURL });
              });
            }
          );
        }, "image/jpeg");
      }
      return false;
    },
    uploadProfilePicture({ file }) {
      const storageRef = ref(storage, "profilePictures/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track the upload progress
          this.showModal = false;
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
  }
	})

</script>