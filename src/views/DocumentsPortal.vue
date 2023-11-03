<template>
  <div>
<headerv-2></headerv-2>
    <div class="container mx-auto px-5 py-12 md:px-12">
      <div>
        <a-list
          class="demo-loadmore-list"
          :loading="loading"
          item-layout="horizontal"
          :data-source="documents"
          :pagination="pagination"
        >
          <div
            v-if="loading"
            slot="loadMore"
            :style="{
              textAlign: 'center',
              marginTop: '12px',
              height: '32px',
              lineHeight: '32px',
            }"
          >
            <a-spin />
          </div>
          <p v-if="error">{{ error }}</p>
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-button type="primary"  slot="actions" @click="()=>{showModal(item)}">GET DOCUMENT</a-button>
           
            <a-list-item-meta description="">
              <a slot="title" href="">{{ item.name }}</a>
              <a-avatar slot="avatar" src="/images/doc-icon.jpg" />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
        <a-modal v-model="visible" title="Enter Details to Download Document " @ok="handleSubmit">
          <template slot="footer">
        <a-button key="back" @click="handleCancel">
          Return
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleSubmit">
          Submit
        </a-button>
      </template>
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="Your Full Name">
      <a-input
        v-decorator="['name', { rules: [{ required: true, message: 'Please input your name!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Your Email">
      <a-input
        v-decorator="['email', { rules: [{ required: true, message: 'Please input your email!' }] }]"
      />
    </a-form-item>
  </a-form>
    </a-modal>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import { storage } from "@/database";
import {
  getDownloadURL,
  ref,
  listAll,
} from "firebase/storage";
import swal from 'sweetalert';
import Headerv2 from '../v2/Headerv2.vue';
export default {
  components: { Header, Footer, Headerv2 },
  data() {
    return {
        documents: [],
      loading: false,
      visible:false,
      error: null,
      pagination: {
        pageSize: 8,
      },
      selectedDocument:null,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    async fetchDocumentLinks() {
      this.loading = true;
      this.error = null;
      try {
        const folderRef = ref(storage, 'documents portal');
        const result = await listAll(folderRef);
        const urlPromises = result.items.map(docRef => {
          return getDownloadURL(docRef).then(url => {
            return {
              name: docRef.name,
              url: url
            };
          });
        });
        this.documents = await Promise.all(urlPromises);
      } catch (error) {
        console.error("Error fetching document links:", error);
        this.error = "Failed to fetch documents. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
    downloadDocuments(link){
      this.$store.dispatch("sendDocumentsMail", {
            name: this.user.first_name,
            email: this.user.email,
            subject: "Download Template Document",
            content:
              "Your Document template is ready for download.",
            link:values.link
          });
    },
    showModal(item) {
      this.visible = true;
      this.selectedDocument=item;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          this.$store.dispatch("sendDocumentsMail", {
        name: values.name,
        email: values.email,
        subject: "TEMPLATE DOCUMENT DOWNLOAD",
        content: `your document ${this.selectedDocument.name} is ready for download`,
        link:this.selectedDocument.url
      }).then(()=>{
        this.loading = false;
        this.visible=false
    
        swal({
            title: "Thank You!",
            text: `The document has been sent to your email address`,
            icon: "success",
          });
        
      })
        }
      });
    },

    handleCancel(e) {
      this.visible = false;
    },
  },
  async created() {
    try {
        this.fetchDocumentLinks();
    } catch (error) {
      console.error("Error in created hook:", error);
    }
  },
};
</script>

<style>
</style>