<template>
  <div>
    <Header></Header>
    <main>
            <Filters :advocates="advocates"></Filters>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Filters from "../components/Widgets/Filters.vue";
import { mapState } from "vuex";
import Footer from "../components/home/Footer.vue";
export default {
  components: { Header, Filters, Footer },
  created() {},
  computed: {
    ...mapState(["allAdvocates", "courtData"]),
    advocates() {
      return this.allAdvocates.filter(
        (advocate) => advocate.status === "active"
      );
    },
  },
};
</script>

<style scoped>
section.single-research-banner {
  height: 40vh;
  background-image: url("https://acelitigator.com/wp-content/uploads/2022/10/Analysis-of-Supreme-Court-30-of-2019.png") !important;
  background-size: cover;
  margin-bottom: 20px;
}
</style>
