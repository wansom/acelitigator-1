<template>
  <div>
    <Header></Header>
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
            <a
              :href="item.url"
              target="_blank"
              slot="actions"
              class="hover:text-red"
              >Download</a
            >
            <a-list-item-meta description="">
              <a slot="title" href="">{{ item.name }}</a>
              <a-avatar slot="avatar" src="/images/doc-icon.jpg" />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
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
export default {
  components: { Header, Footer },
  data() {
    return {
        documents: [],
      loading: false,
      error: null,
      pagination: {
        pageSize: 8,
      },
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
    }
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