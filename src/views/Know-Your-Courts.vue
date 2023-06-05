<template>
  <div>
    <Header></Header>
    <section class="">
      <div class="container mx-auto py-10 px-6">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="Federal Courts"  class="py-10">
        <a-tabs default-active-key="1" :tab-position="tabPosition">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab 3
      </a-tab-pane>
    </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="2" tab="State Courts "  class="py-10">
        <a-tabs default-active-key="1" :tab-position="tabPosition">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab 3
      </a-tab-pane>
    </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tribunals" class="py-10">
        <a-tabs default-active-key="1" :tab-position="tabPosition">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">
        Content of Tab 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab 3
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
};
</script>

<style></style>
