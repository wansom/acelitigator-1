<template>
<div>
    <Header></Header>
    <div class="container mx-auto px-5 py-12 md:px-12">
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
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <a-spin />
    </div>
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a  :href="item.url" target="_blank" slot="actions" class="hover:text-red">Download</a>
      <a-list-item-meta
        description=""
      >
        <a slot="title" href="">{{ item.name}}</a>
        <a-avatar
          slot="avatar"
          src="/images/doc-icon.jpg"
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import {fetchDocumentLinks} from "@/database/storage"
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
export default {
    components:{Header,Footer },
    data() {
    return {
      documents: [],
      loading:false,
      pagination: {
        pageSize: 8,
      },
    };
  },
  async created() {
    try {
        
      this.documents = await fetchDocumentLinks();
    } catch (error) {
      console.error("Error in created hook:", error);
    }
  }
};
</script>

<style>

</style>