<template>
  <div>
    <Header></Header>
    <section class="">
      <div class="container mx-auto py-10 px-6 card-container">
        <a-tabs type="card">
          <a-tab-pane  v-for="(court,index) of courts" :key="index" :tab="court.type" class="py-12">
            <a-tabs default-active-key="0" :tab-position="tabPosition" >
              <a-tab-pane v-for="(tab,index) of court.courts" :key="index" :tab="tab"  >
                <courts-card ></courts-card>
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
import { mapState } from "vuex";
import CourtsCard from '../components/Know-Your-Courts/courts-card.vue';
export default {
  data() {
    return {
      tabPosition: "left",
      courts: [
        {
          type: "Federal Courts",
          courts: [
            " Supreme Court",
            "Court of Appeal",
            "Federal High Court",
            "National Industrial Court",
          ],
        },
        {
          type: "State Courts",
          courts: [
            "Abia State ",
            "Adamawa State",
            "Akwa Ibom State ",
            "Anambra State",
            "Bauchi State",
            "Benue State",
            "Borno State",
            "Cross River State",
            "Delta State",
            "Ebonyi State",
            "Edo State",
            "Ekiti State",
            "Enugu State",
            "Gombe State",
            "Imo State",
            "Jigawa State",
            "Kaduna State",
            "Kano State",
            "Katsina State",
            "Kebbi State",
            "Kogi State",
            "Kwara State",
            "Lagos State",
            "Nassarawa State",
            "Niger State",
            "Ogun State",
            "Ondo State",
            "Plateau State",
            "Rivers State",
            "Sokoto State",
            "Taraba State",
            "Yobe State",
            "Zamfara State",
            "Federal Capital Territory",
          ],
        },
        {
          type: "Tribunals",
          courts: [" Federal Tribunals", "State Tribunals"],
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    Breadcrum,
    KnowYourCourtsSidebar,
    KnowYourCourtsContent,
    CourtsCard,
  },
  computed: {
    ...mapState(["counties"]),
  },
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
