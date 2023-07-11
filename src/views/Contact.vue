<template>
  <div class="">
    <Header></Header>
<contact-component></contact-component>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import Map from "../components/Widgets/Map.vue";
import ContactComponent from '../components/home/ContactComponent.vue';
export default {
  components: { Header, Footer, Breadcrum, Map, ContactComponent },
  data() {
    return {
      title: 'Contact Us',
      description: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market',
      url: 'https://dialalawyer.africa',
      image: 'https://dialalawyer.africa/images/banner.jpg',
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
      loading: this.$store.state.loading,

    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
  // Open Graph (for Facebook, LinkedIn, etc.)
  { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.image },
        { property: 'og:url', content: this.url },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.image },
        { name: 'twitter:url', content: this.url },
        // Add more tags as needed
      ]
    }
  },
};
</script>

<style></style>
