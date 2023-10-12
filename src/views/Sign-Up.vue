<template>
  <div>
    <headerv-2></headerv-2>
    <FormulateInput type="text" />
	<RegisterForm></RegisterForm>
  <!-- <test-form/> -->
	<footerv-2></footerv-2>
  </div>
</template>

<script>
import Header from '../components/home/Header.vue';
import Footer from '../components/home/Footer.vue';
import Breadcrum from '../components/Widgets/Breadcrum.vue';
import RegisterForm from '../components/forms/Register-Form.vue';
import Footerv2 from '../v2/Footerv2.vue';
import Headerv2 from '../v2/Headerv2.vue';
export default {
  data(){
    return{
      title: 'Reigister New Account',
      description: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market',
      url: 'https://dialalawyer.africa',
      image: 'https://dialalawyer.africa/images/banner.jpg',
    }
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
  components:{Header,Footer,Breadcrum,RegisterForm, Footerv2, Headerv2},

};
</script>

<style lang="scss"></style>
