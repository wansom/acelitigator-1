<template>
  <div>
    <Header></Header>
    <section class="">
      <div class="container mx-auto py-10 px-6 card-container">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="Federal Courts"  class="py-12">
        <a-tabs default-active-key="1" :tab-position="tabPosition">
      <a-tab-pane key="1.1" tab="Supreme Court ">
        Content of Tab 1
      </a-tab-pane>
      <a-tab-pane key="1.2" tab="Court of Appeal ">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="1.3" tab="Federal High Court">
        Content of Tab 3
      </a-tab-pane>
      <a-tab-pane key="1.4" tab="National Industrial Court">
        Content of Tab 3
      </a-tab-pane>
    </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="2" tab="State Courts"  class="py-10">
        <a-tabs default-active-key="Abia State (17 LGAs)" :tab-position="tabPosition">
      <a-tab-pane  v-for="state of counties"  :key="state" :tab="state">
        Content of Tab {{ state }}
      </a-tab-pane>
    </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tribunals" class="py-10">
        <a-tabs default-active-key="1" :tab-position="tabPosition">
      <a-tab-pane key="1" tab="Federal Tribunals">
        Content of Tab 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="State Tribunals ">
        Content of Tab 2
      </a-tab-pane>
    </a-tabs>
      </a-tab-pane>
    </a-tabs>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import KnowYourCourtsSidebar from "../components/Sidebars/Know-Your-Courts-Sidebar.vue";
import KnowYourCourtsContent from "../components/Know-Your-Courts/Know-Your-Courts-Content.vue";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      tabPosition: 'left',
    };
  },
  components: {
    Header,
    Footer,
    Breadcrum,
    KnowYourCourtsSidebar,
    KnowYourCourtsContent,
  },
  computed:{
    ...mapState(['counties'])
  }
};
</script>

<style scoped>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>
